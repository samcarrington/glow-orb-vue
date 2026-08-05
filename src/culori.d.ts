/**
 * culori v4 ships no TypeScript types and the DefinitelyTyped `@types/culori`
 * package targets the older v2 API, so this declares only the surface this
 * package actually uses.
 */
declare module 'culori' {
  export interface Oklch {
    mode: 'oklch';
    l: number;
    c: number;
    h?: number;
    alpha?: number;
  }

  export function converter(
    mode: 'oklch'
  ): (color: string | Record<string, unknown>) => Oklch | undefined;
  export function formatRgb(color: Record<string, unknown>): string | undefined;
}
