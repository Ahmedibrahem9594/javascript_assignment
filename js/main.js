let node = document.querySelector("body").firstChild;
let result = "this is => "

while(node) {
    result += console.log(`This is => ${node.nodeName}`)
    node = node.nextElementSibling;
}
