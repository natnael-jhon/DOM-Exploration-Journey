// ----------- BAD WAY-----------
// const i = document.querySelector(".second-btn")
// i.onclick = function () {
//     document.querySelector("p").append("hello")
// }
// ----------- GREAT WAY-----------
let i = document.createElement("h1")
i.innerText = "hello world"

const best = document.querySelector(".best")
best.addEventListener("click",  () => {
    document.querySelector("p").prepend(i)
})
        // For Test Purpose only
// const bestRm = document.querySelector(".best-rm")
// bestRm.addEventListener("click", () => document.querySelector("h1").style.display = "none")
// ----------- Event (e) Object -----------
        // Did it for fun tho 
// document.querySelector("form").addEventListener("submit", () => {
//     window.alert("nigga")
// })

const form = document.querySelector("form")
const input = document.querySelector("input")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value)
})