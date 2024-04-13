// Getting elements from the DOM
let form = document.querySelector("form")
let input = document.querySelector("input")
let todos = document.querySelector(".todos")
function getTodo(vlaue) {
    // Create new elements
    let todo = document.createElement("div")
    let textEL = document.createElement("span")
    // Seetign values and styles

    textEL.innerHTML = vlaue
    // append our elemnt to dom
    todo.appendChild(textEL)

    let coseEL = document.createElement("span")
    coseEL.innerHTML = "&times;"
    coseEL.classList.add("delete")


    // Attech events

    coseEL.addEventListener("click", (e) => {
        todos.removeChild(todo)
    })

    todo.appendChild(coseEL)
    todo.classList.add("todo") 
    return todo;
}


form .addEventListener("submit", e => {
    e.preventDefault()
    let value = input.value;
    if (!value.trim()) return;
    todos.appendChild(getTodo(value))
    input.value = ""
})
