// @vitest-environment happy-dom
import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { defineComponent, h, ref } from 'vue';
import { useHoverPreview } from './useHoverPreview';

function mountHarness(seed = 0) {
  const Harness = defineComponent({
    setup(_props, { expose }) {
      const target = ref<HTMLElement | null>(null);
      const env = ref(0);
      useHoverPreview(target, env, { seed });
      expose({ env });
      return () =>
        h('div', {
          ref: (el) => {
            target.value = (el as HTMLElement) ?? null;
          },
        });
    },
  });
  return mount(Harness);
}

describe('useHoverPreview', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('attaches pointerenter/pointerleave listeners to the target element on mount', () => {
    // Arrange
    const addSpy = vi.spyOn(HTMLElement.prototype, 'addEventListener');

    // Act
    const wrapper = mountHarness();

    // Assert
    expect(addSpy).toHaveBeenCalledWith('pointerenter', expect.any(Function));
    expect(addSpy).toHaveBeenCalledWith('pointerleave', expect.any(Function));
    wrapper.unmount();
  });

  test('removes listeners and cancels its animation frame loop on unmount', () => {
    // Arrange
    const wrapper = mountHarness();
    const removeSpy = vi.spyOn(HTMLElement.prototype, 'removeEventListener');
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame');

    // Act
    wrapper.unmount();

    // Assert
    expect(removeSpy).toHaveBeenCalledWith(
      'pointerenter',
      expect.any(Function)
    );
    expect(removeSpy).toHaveBeenCalledWith(
      'pointerleave',
      expect.any(Function)
    );
    expect(cancelSpy).toHaveBeenCalled();
  });

  test('starts with env at 0 before any hover interaction', () => {
    // Arrange & Act
    const wrapper = mountHarness();

    // Assert
    // `expose()` on a raw defineComponent isn't reflected in @vue/test-utils'
    // inferred instance type, so the exposed shape needs an explicit cast here.
    const vm = wrapper.vm as unknown as { env: number };
    expect(vm.env).toBe(0);
    wrapper.unmount();
  });
});
