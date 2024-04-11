// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");
// input.addEventListener("keypress", () => {
//     console.log("puusy")
// });



input.addEventListener("keypress", e =>{
    // console.log(e.charCode) give nus some nums or keboard id
    // console.log(e.code) gives us what is the key
    // console.log(e.ctrlKey)
    console.log(e.key)
})