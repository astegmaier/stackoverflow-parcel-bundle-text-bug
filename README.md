This project reproduces a bug that I found while trying to answer [this question on stackoverflow](https://stackoverflow.com/questions/71260911/parceljs-with-bundle-text-css-import-is-not-working).

# Repro Steps
1. import _any_ css file with the `bundle-text` pipeline (e.g. `import shadowStyles from "bundle-text:./shadow-dom-styles.css"`)
2. Also do a normal global css import (e.g. `import "./styles.css";`)

# Expected results
`styles.css` is referenced at the root of the DOM with a `<style>` tag, and the contents of `shadow-dom-styles.css` are inlined as a string assigned to the `shadowStyles` variable.

# Actual results
The contents of _both_ `styles.css` and `shadow-dom-styles.css` are inlined as a string assigned to `shadowStyles`, and nothing is added to the root of the DOM.