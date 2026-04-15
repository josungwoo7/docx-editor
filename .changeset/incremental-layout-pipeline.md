---
'@eigenpal/docx-js-editor': patch
---

Incremental layout pipeline for the paged editor. Only re-converts, re-measures, and re-paginates from the edited paragraph forward on each keystroke. Adds paginator snapshot/restore so layout can resume from a saved page boundary, and CSS `content-visibility: auto` on page shells for browser paint optimization. Closes the per-keystroke lag on 20+ page documents.
