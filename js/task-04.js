// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

// console.log(decrementButton);
// console.log(incrementButton);
// console.log(counter);

const decrementButtonClickHandler = function () {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const incrementButtonClickHandler = function () {
  counterValue += 1;
  counter.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementButtonClickHandler);
incrementButton.addEventListener("click", incrementButtonClickHandler);
