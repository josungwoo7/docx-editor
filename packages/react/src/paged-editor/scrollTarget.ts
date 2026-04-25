/**
 * Helpers for resolving DOM scroll targets from a ProseMirror absolute
 * position. Extracted as a small pure utility so the paged-editor's scroll
 * implementation can be exercised by unit tests without a full editor mount.
 */

import type { Layout } from '@eigenpal/docx-core/layout-engine';
import { getPageTop } from '@eigenpal/docx-core/layout-bridge/hitTest';

/**
 * Locate the best DOM element to scroll to for a given ProseMirror position.
 *
 * Strategy:
 *   1. Exact match on `[data-pm-start="${pmPos}"]`.
 *   2. Otherwise scan `[data-pm-start][data-pm-end]` ranges in document order
 *      and return the first whose range contains `pmPos`.
 *
 * Returns `null` when no suitable element exists.
 */
export function findScrollTargetForPmPosition(
  container: ParentNode | null | undefined,
  pmPos: number
): HTMLElement | null {
  if (!container) return null;
  if (!Number.isFinite(pmPos)) return null;

  const exact = container.querySelector(`[data-pm-start="${pmPos}"]`);
  if (exact instanceof HTMLElement) {
    return exact;
  }

  const ranged = container.querySelectorAll<HTMLElement>('[data-pm-start][data-pm-end]');
  for (const el of Array.from(ranged)) {
    const start = Number(el.dataset.pmStart);
    const end = Number(el.dataset.pmEnd);
    if (Number.isFinite(start) && Number.isFinite(end) && start <= pmPos && pmPos <= end) {
      return el;
    }
  }

  return null;
}

/**
 * Walk up parent chain until we find an element that is the actual scroll
 * container (overflow auto/scroll, with overflowing content). Falls back to
 * the documentElement when no intermediate container scrolls.
 */
export function findScrollableAncestor(el: HTMLElement | null | undefined): HTMLElement | null {
  if (!el) return null;
  if (typeof window === 'undefined') return null;

  let current: HTMLElement | null = el.parentElement;
  while (current && current !== document.documentElement) {
    const style = window.getComputedStyle(current);
    const overflowY = style.overflowY;
    const isScrollable = overflowY === 'auto' || overflowY === 'scroll';
    if (isScrollable && current.scrollHeight > current.clientHeight) {
      return current;
    }
    current = current.parentElement;
  }
  return document.scrollingElement instanceof HTMLElement
    ? document.scrollingElement
    : document.documentElement;
}

/**
 * Layout-only fallback: when the target page is not yet materialized in the
 * DOM (the paged renderer virtualizes pages outside the viewport), walk the
 * layout's pages and fragments to find the absolute Y of the page that
 * contains `pmPos`. Returns the absolute Y inside the pages container, or
 * `null` when the layout is missing or no fragment contains `pmPos`.
 */
export function findLayoutScrollYForPmPosition(
  layout: Layout | null | undefined,
  pmPos: number
): number | null {
  if (!layout || !Number.isFinite(pmPos)) return null;

  for (let pageIndex = 0; pageIndex < layout.pages.length; pageIndex++) {
    const page = layout.pages[pageIndex];
    for (const frag of page.fragments) {
      const start = frag.pmStart;
      const end = frag.pmEnd ?? start;
      if (start == null) continue;
      if (start <= pmPos && pmPos <= (end ?? start)) {
        return getPageTop(layout, pageIndex) + frag.y;
      }
    }
  }

  return null;
}
