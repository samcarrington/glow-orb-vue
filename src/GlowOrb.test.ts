// @vitest-environment happy-dom
import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import GlowOrb from './GlowOrb.vue';

describe('GlowOrb', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders three blob elements', () => {
    // Arrange & Act
    const wrapper = mount(GlowOrb);

    // Assert
    expect(wrapper.findAll('.blob')).toHaveLength(3);
    wrapper.unmount();
  });

  test('cancels its animation frame loop on unmount', () => {
    // Arrange
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame');
    const wrapper = mount(GlowOrb);

    // Act
    wrapper.unmount();

    // Assert
    expect(cancelSpy).toHaveBeenCalled();
  });

  test('falls back to a hue-derived palette and warns when shades cannot be parsed', () => {
    // Arrange
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // Act
    const wrapper = mount(GlowOrb, {
      props: { shades: ['not-a-color', '#a78bfa', '#818cf8'] },
    });

    // Assert
    expect(warnSpy).toHaveBeenCalled();
    expect(wrapper.find('.glow-orb').exists()).toBe(true);
    wrapper.unmount();
  });

  test('renders successfully with only hue-based color props', () => {
    // Arrange & Act
    const wrapper = mount(GlowOrb, {
      props: { hue: 200, secondaryHue: 40, intensity: 0.8, hueShift: 0.5 },
    });

    // Assert
    expect(wrapper.find('.glow-orb').exists()).toBe(true);
    wrapper.unmount();
  });
});
