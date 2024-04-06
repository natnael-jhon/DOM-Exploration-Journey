// 1. Select element h4 which holds text of "Red" by using getElementsByTagName

console.log(document.getElementsByTagName("h4"))
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
console.log(document.getElementsByClassName("green"))
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByIdName
console.log(document.getElementById("blue"))
// 4. Select div which has the class & Id of "yellow" by using querySelector()

console.log(document.querySelector("#yellow"))
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
console.log(document.querySelectorAll(".teal"))