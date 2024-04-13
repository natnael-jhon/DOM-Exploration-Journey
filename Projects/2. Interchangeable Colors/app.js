const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.value;
    changeBg(color);
  });
});

const changeBg = color => {
  body.className = ""; // Clear existing classes before adding new ones

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
};
