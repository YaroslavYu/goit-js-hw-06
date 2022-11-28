const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

// console.log(inputName);
// console.log(outputName);

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"

const inputNameInputHandler = function (event) {
  !event.currentTarget.value
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = event.currentTarget.value);
};

inputName.addEventListener("input", inputNameInputHandler);
