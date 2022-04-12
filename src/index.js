function appendSampleElements(element) {
    const hello = document.createElement('h1');
    hello.className = "hello"
    hello.textContent = "Hello World!";

    const goodbye = document.createElement('h1');
    goodbye.className = "goodbye"
    goodbye.textContent = "Goodbye World!";

    root.append(hello);
    root.append(goodbye);
}

const root = document.getElementById("root");
const shadowRoot = document.getElementById("shadowroot").attachShadow({ mode: "open" })

appendSampleElements(root);
appendSampleElements(shadowRoot);