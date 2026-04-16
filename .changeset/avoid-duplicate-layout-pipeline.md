---
'@eigenpal/docx-js-editor': patch
---

Eliminate a duplicate full layout pass that fired on every keystroke. The header/footer re-layout effect listed `runLayoutPipeline` in its deps, but the callback's identity churns on every transaction (the `document` prop changes when the parent pushes a new doc into history), so the effect re-ran and triggered a redundant full pipeline on top of the one already scheduled. Drops start-of-doc keystroke latency on a 310-page document from ~129ms to ~77ms in local benchmarks.
