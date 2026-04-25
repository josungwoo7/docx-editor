/**
 * findReplaceUtils unit tests
 *
 * Tests focused on findMatchToPmPosition - the bridge that maps a FindMatch
 * (which is keyed by a source-document paragraph index) back to an absolute
 * ProseMirror position, accounting for `pageBreak` PM nodes that can appear
 * either after a normal paragraph or as the sole representation of a
 * page-break-only source paragraph.
 */

import { describe, expect, it } from 'bun:test';
import { Schema } from 'prosemirror-model';
import { findMatchToPmPosition, type FindMatch } from './findReplaceUtils';

// Minimal schema sufficient for find-mapping tests. Mirrors the real schema's
// top-level structure (doc -> [paragraph, pageBreak, table]).
const testSchema = new Schema({
  nodes: {
    doc: { content: '(paragraph | pageBreak | table)+' },
    paragraph: { content: 'text*', group: 'block' },
    pageBreak: { group: 'block', atom: true },
    table: {
      content: 'table_row+',
      group: 'block',
    },
    table_row: { content: 'table_cell+' },
    table_cell: { content: 'paragraph+' },
    text: { group: 'inline' },
  },
});

function makeMatch(paragraphIndex: number, startOffset: number): FindMatch {
  return {
    paragraphIndex,
    contentIndex: 0,
    startOffset,
    endOffset: startOffset + 1,
    text: 'x',
  };
}

describe('findMatchToPmPosition', () => {
  it('maps a normal paragraph match to its absolute PM position', () => {
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('hello world')]),
      testSchema.node('paragraph', null, [testSchema.text('second line here')]),
    ]);

    // The second paragraph starts at PM offset = 1 (open) + 11 (text) + 1 (close) = 13
    // Inside the paragraph, position 14 is the first text char. Match offset 7 → 21.
    const pmPos = findMatchToPmPosition(doc, makeMatch(1, 7));

    expect(pmPos).toBe(21);
  });

  it('does not drift after a pageBreak that follows a paragraph', () => {
    // Source layout (block.type === 'paragraph'):
    //   index 0: regular paragraph
    //   index 1: paragraph that has a page break inside  → emits paragraph + pageBreak
    //   index 2: regular paragraph (the one we want)
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('alpha')]),
      testSchema.node('paragraph', null, [testSchema.text('beta')]),
      testSchema.node('pageBreak'),
      testSchema.node('paragraph', null, [testSchema.text('gamma')]),
    ]);

    const pmPos = findMatchToPmPosition(doc, makeMatch(2, 0));

    // alpha paragraph: pos 0..6 (open=1, text=5, close=1)
    // beta paragraph: pos 7..12 (open=1, text=4, close=1)
    // pageBreak atom: pos 13..13 (size 1)
    // gamma paragraph open: pos 14, first text char: pos 15
    expect(pmPos).toBe(15);
  });

  it('handles a page-break-only source paragraph (empty paragraph + pageBreak)', () => {
    // Source layout (block.type === 'paragraph'):
    //   index 0: normal paragraph (alpha)
    //   index 1: page-break-only source paragraph
    //            → converter emits empty paragraph + pageBreak
    //   index 2: target paragraph (gamma)
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('alpha')]),
      testSchema.node('paragraph', null, []),
      testSchema.node('pageBreak'),
      testSchema.node('paragraph', null, [testSchema.text('gamma')]),
    ]);

    const pmPos = findMatchToPmPosition(doc, makeMatch(2, 0));

    // alpha paragraph: pos 0..6 (open=1, text=5, close=1)
    // empty paragraph: pos 7..8 (open=1, close=1)
    // pageBreak atom: pos 9..9 (size 1)
    // gamma paragraph open: pos 10, first text char: pos 11
    expect(pmPos).toBe(11);
  });

  it('treats a standalone pageBreak (no preceding paragraph in this slot) as its own slot', () => {
    // Edge case: textbox-extracted paragraph collapses to no paragraph node.
    // Source layout:
    //   index 0: normal paragraph (alpha)
    //   index 1: textbox-extracted page-break-only paragraph
    //            → converter emits ONLY pageBreak (no preceding paragraph in slot)
    //   index 2: target paragraph (gamma)
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('alpha')]),
      testSchema.node('pageBreak'),
      testSchema.node('paragraph', null, [testSchema.text('gamma')]),
    ]);

    // With this PM shape we cannot distinguish the textbox-extracted case from
    // "alpha contains an internal page break" (also paragraph + pageBreak).
    // We pick the more common interpretation (pageBreak absorbed by previous
    // paragraph), so source index 2 → null (no match), allowing the caller to
    // fall back to the legacy scrollToMatch path.
    const pmPos = findMatchToPmPosition(doc, makeMatch(2, 0));
    expect(pmPos).toBeNull();
  });

  it('clamps startOffset to the paragraph content size', () => {
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('hi')]),
    ]);

    const pmPos = findMatchToPmPosition(doc, makeMatch(0, 999));

    // Paragraph "hi": text content size = 2. Inside-content positions are 1..3.
    expect(pmPos).toBe(3);
  });

  it('returns null when the match paragraph index has no matching slot', () => {
    const doc = testSchema.node('doc', null, [
      testSchema.node('paragraph', null, [testSchema.text('only')]),
    ]);

    expect(findMatchToPmPosition(doc, makeMatch(5, 0))).toBeNull();
  });

  it('returns null when given a non-doc input', () => {
    expect(findMatchToPmPosition(null, makeMatch(0, 0))).toBeNull();
    expect(findMatchToPmPosition(undefined, makeMatch(0, 0))).toBeNull();
    expect(findMatchToPmPosition({}, makeMatch(0, 0))).toBeNull();
  });
});
