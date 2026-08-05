import { describe, expectTypeOf, it } from 'vitest';
import type { GlowOrbProps } from './index';

describe('public API', () => {
  it('exports the GlowOrb props type', () => {
    expectTypeOf<GlowOrbProps>().toMatchTypeOf<{
      hue?: number;
      size?: number;
    }>();
  });
});
