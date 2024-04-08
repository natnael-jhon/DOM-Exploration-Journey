// innerText
console.log(document.querySelector("p").innerText)
// textContent This will only give us the content without the HTML tags but if there is any js inside of it will give us all of them
console.log(document.querySelector("p").textContent)
// innerHTML This one will print every shit from the p
console.log(document.querySelector("p").innerHTML)
// And we can change the content of an HTML tad using innerText
document.querySelector("h1").innerText = "What the fuck";
setTimeout(() => {
    document.querySelector("h1").innerHTML = "<mark> Hello </mark>";
    setTimeout(() => {
        document.querySelector("h1").innerHTML = "<mark> NaTi </mark>";
        setTimeout(() => {
            document.querySelector("h1").innerHTML = "<mark>Jhon</mark>";
        }, 2000)
    }, 2000) 
}, 2000)