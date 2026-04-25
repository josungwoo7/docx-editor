/**
 * Helpers for resolving DOM scroll targets from a ProseMirror absolute
 * position. Extracted as a small pure utility so the paged-editor's scroll
 * implementation can be exercised by unit tests without a full editor mount.
 */

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
