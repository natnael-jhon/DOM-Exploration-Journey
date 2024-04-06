// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length)
// 2. getElementById
console.log(document.getElementById("main"))
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"))
// 4. querySelector
// In this section if we want to select element by tag we write it inside the quotes , for id we use #idname and for classes .classname querySelector("here")
console.log(document.querySelector("h1"))  
// 5. querySelectorAll
console.log(document.querySelectorAll("li").length)
// ---------------------------------------
// Storing data in variables
let i = document.getElementsByClassName("cls")
console.log(i)