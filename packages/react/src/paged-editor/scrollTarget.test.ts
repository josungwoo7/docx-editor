/**
 * scrollTarget unit tests
 *
 * Verifies the find-target lookup used by PagedEditor.scrollToPositionImpl,
 * including the range-fallback that lets find-navigation succeed when the
 * exact data-pm-start node is not rendered.
 */

import { describe, expect, it, beforeAll } from 'bun:test';
import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { findScrollTargetForPmPosition, findLayoutScrollYForPmPosition } from './scrollTarget';
import type { Layout } from '@eigenpal/docx-core/layout-engine';

beforeAll(() => {
  if (!('document' in globalThis)) {
    GlobalRegistrator.register();
  }
});

function buildContainer(html: string): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
}

describe('findScrollTargetForPmPosition', () => {
  it('returns the exact element when a [data-pm-start] node matches', () => {
    const container = buildContainer(`
      <span data-pm-start="10" data-pm-end="20">a</span>
      <span data-pm-start="42" data-pm-end="50">b</span>
    `);

    const el = findScrollTargetForPmPosition(container, 42);

    expect(el?.dataset.pmStart).toBe('42');
  });

  it('falls back to the first range that contains pmPos when no exact match exists', () => {
    const container = buildContainer(`
      <span data-pm-start="10" data-pm-end="20">a</span>
      <span data-pm-start="40" data-pm-end="60">b</span>
      <span data-pm-start="70" data-pm-end="80">c</span>
    `);

    const el = findScrollTargetForPmPosition(container, 55);

    expect(el?.dataset.pmStart).toBe('40');
  });

  it('returns null when no element contains pmPos', () => {
    const container = buildContainer(`
      <span data-pm-start="10" data-pm-end="20">a</span>
      <span data-pm-start="40" data-pm-end="60">b</span>
    `);

    expect(findScrollTargetForPmPosition(container, 999)).toBeNull();
  });

  it('returns null when container is missing or pmPos is non-finite', () => {
    expect(findScrollTargetForPmPosition(null, 10)).toBeNull();
    expect(findScrollTargetForPmPosition(undefined, 10)).toBeNull();

    const container = buildContainer(`<span data-pm-start="10" data-pm-end="20">a</span>`);
    expect(findScrollTargetForPmPosition(container, Number.NaN)).toBeNull();
  });

  it('prefers exact-match over a range that also contains pmPos', () => {
    const container = buildContainer(`
      <span data-pm-start="40" data-pm-end="60">range</span>
      <span data-pm-start="55" data-pm-end="55">exact</span>
    `);

    const el = findScrollTargetForPmPosition(container, 55);

    expect(el?.textContent).toBe('exact');
  });
});

function makeLayout(
  pages: Array<{ height: number; fragments: Array<{ y: number; pmStart: number; pmEnd: number }> }>
): Layout {
  return {
    pageSize: { w: 800, h: 1100 },
    pageGap: 20,
    pages: pages.map((p, i) => ({
      number: i + 1,
      fragments: p.fragments.map((f) => ({
        kind: 'paragraph' as const,
        blockId: i,
        x: 0,
        y: f.y,
        width: 800,
        height: 20,
        fromLine: 0,
        toLine: 1,
        pmStart: f.pmStart,
        pmEnd: f.pmEnd,
      })),
      margins: { top: 0, right: 0, bottom: 0, left: 0 },
      size: { w: 800, h: p.height },
    })),
  } as unknown as Layout;
}

describe('findLayoutScrollYForPmPosition', () => {
  it('returns absolute Y of the page+fragment containing pmPos', () => {
    const layout = makeLayout([
      { height: 1100, fragments: [{ y: 50, pmStart: 0, pmEnd: 100 }] },
      // page 2 starts at y=1120 (1100 + 20 gap). Fragment at y=200 within page 2.
      { height: 1100, fragments: [{ y: 200, pmStart: 200, pmEnd: 300 }] },
    ]);

    expect(findLayoutScrollYForPmPosition(layout, 250)).toBe(1120 + 200);
  });

  it('returns null when no fragment contains pmPos', () => {
    const layout = makeLayout([{ height: 1100, fragments: [{ y: 50, pmStart: 0, pmEnd: 100 }] }]);

    expect(findLayoutScrollYForPmPosition(layout, 9999)).toBeNull();
  });

  it('returns null when layout is missing or pmPos non-finite', () => {
    expect(findLayoutScrollYForPmPosition(null, 10)).toBeNull();
    expect(findLayoutScrollYForPmPosition(undefined, 10)).toBeNull();
    expect(findLayoutScrollYForPmPosition(makeLayout([]), Number.NaN)).toBeNull();
  });
});
