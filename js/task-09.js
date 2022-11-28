function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeBgColor = document.querySelector(".change-color");
const spanOutputBgColor = document.querySelector(".color");
const body = document.querySelector("body");

function buttonChangeBgColorClickHandler() {
  const getColor = getRandomHexColor();
  spanOutputBgColor.textContent = getColor;
  body.style.backgroundColor = getColor;
}

buttonChangeBgColor.addEventListener("click", buttonChangeBgColorClickHandler);
