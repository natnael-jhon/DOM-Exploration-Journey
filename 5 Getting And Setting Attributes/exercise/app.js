// 1. Select the anchor tag
let i = document.querySelector("a")
// 2. Use getAttribute(attrName) to check the attribute.
console.log(i.getAttribute("href"))
// 3. Select a-two & set "href" attribute
document.querySelector(".a-two").innerText = "Telegram"
// setAttribute(attrName, value)
document.querySelector(".a-two").setAttribute("href", "https://t.me/nati0333")
i.setAttribute("target", "_blank")
