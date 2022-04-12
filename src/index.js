// BUG: shadowStyles will contain styles from _both_ shadow-dom-styles.css (expected) AND styles.css (unexpected). 
import shadowStyles from "bundle-text:./shadow-dom-styles.css";
import "./styles.css";

function appendSampleElements(element) {
    const hello = document.createElement('h1');
    hello.className = "hello"
    hello.textContent = "Hello World!";

    const goodbye = document.createElement('h1');
    goodbye.className = "goodbye"
    goodbye.textContent = "Goodbye World!";

    element.append(hello);
    element.append(goodbye);
}

const root = document.getElementById("root");
const shadowRoot = document.getElementById("shadowroot").attachShadow({ mode: "open" })

appendSampleElements(root);
appendSampleElements(shadowRoot);

let style = document.createElement("style");
style.textContent = shadowStyles;
shadowRoot.appendChild(style);