// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRange = document.querySelector("#font-size-control");
const spanTextTest = document.querySelector("#text");
// console.log(spanTextTest.style);
// console.log(spanTextTest);

spanTextTest.style.fontSize = inputRange.value + "px"; //відразу написав цю строку що при зміні розміру текст не стрибав

function inputRangeChangeRangeHandler() {
  spanTextTest.style.fontSize = inputRange.value + "px";
  //   console.log(spanTextTest.style.fontSize);
}

inputRange.addEventListener("input", inputRangeChangeRangeHandler);
