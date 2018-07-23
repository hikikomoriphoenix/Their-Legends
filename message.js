function helloMessage() {
    var body = document.getElementById("content");
    var helloWorldContent = document.createElement("h1");
    helloWorldContent.innerHTML = "Hello World";
    body.appendChild(helloWorldContent);
}