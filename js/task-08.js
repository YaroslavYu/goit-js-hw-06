// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector("form.login-form");

function formSubmitHandler(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    alert(
      "Потрібно заповнити всі поля! Деякі поля порожні. Будь-ласка, внесіть дані"
    );
    return;
  }

  //   const formDataNoOrdered = new FormData(event.currentTarget);
  //   const formData = {};
  //   formDataNoOrdered.forEach((value, name) => {
  //     formData[name] = value;
  //   });

  const formData = { email, password };

  console.log(formData);

  form.reset();
}

form.addEventListener("submit", formSubmitHandler);
