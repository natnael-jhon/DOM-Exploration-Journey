console.log(document.querySelector("li").parentElement)
console.log(document.querySelector("li").parentElement.parentElement)


// Children
console.log(document.querySelector("ul").children)

// To access each children we use querySelector("ul").children[2]
console.log(document.querySelector("ul").children[2])

console.log(document.querySelector("li").nextElementSibling.innerText = "hi")