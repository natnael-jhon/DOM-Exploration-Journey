// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore(what, where)
/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
document.querySelector("body").style.backgroundColor = "gray"
// const i = document.createElement("h1")
// i.textContent = "Hello"
// console.log(i.textContent = "hello world")
// document.body.appendChild(i);
                            // const li = document.querySelector("li")
                            // console.log(li.innerText = "hi")
                            // document.li.appendChild(li)
// const ul = document.querySelector("ul")
// const newLi = document.createElement("li")
// newLi.innerText = "hello"
// ul.appendChild(newLi)
// const firstLi = document.querySelector("li")
// ul.insertBefore(newLi, firstLi)
// const box = document.querySelector(".box")

// Heading

// const h1 = document.createElement("h1")
// h1.innerText = "Hello World"
// h1.style.textAlign = "center"
// box.appendChild(h1)

// const firstP = document.querySelector("p")
// const i = document.createElement("i")
// i.innerText = "i am itaallic"
// i.style.color = "red"
// firstP.insertAdjacentElement("beforeend", i)

const i = document.createElement("i")
i.innerText = " i am itaallic"
i.style.color = "red"
const section = document.querySelector("section")
section.append(i) // adds it on the end


const c = document.createElement("i")
c.innerText = " i am itaallic "
c.style.color = "green"
section.prepend(c) // Adds it one the first

const box = document.querySelector(".box")
const h1 = document.createElement("h1")
h1.innerText = "Hello Word"
h1.style.textAlign = 'center'
box.append(h1)



// =============================
const newList = document.querySelector(".new-list")
const three = document.querySelector(".three")
newList.removeChild(three)
newList.remove()