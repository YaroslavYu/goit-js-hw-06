// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divParent = document.querySelector("#boxes");

let markupDivs = "";
let divWidth = 30;
let divHeight = 30;

// console.log(input);
// console.log(buttonCreate);
// console.log(buttonDestroy);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    markupDivs += `<div style="background-color: ${getRandomHexColor()}; width: ${divWidth}px; height: ${divHeight}px; "></div>`;
    divWidth += 10;
    divHeight += 10;
  }
  divParent.insertAdjacentHTML("beforeend", markupDivs);
  markupDivs = "";
}

function buttonCreateClickHandler() {
  createBoxes(input.value);
}

function destroyBoxes() {
  divParent.innerHTML = "";
}

function buttonDestroyClickHandler() {
  destroyBoxes();
  divWidth = 30;
  divHeight = 30;
  // input.value = 0;
}

buttonCreate.addEventListener("click", buttonCreateClickHandler);
buttonDestroy.addEventListener("click", buttonDestroyClickHandler);
