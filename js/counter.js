// const counter = {
//   value: 0,

//   increment() {
//     console.log(`increment -> this: `, this);
//     this.value += 1;
//   },

//   decrement() {
//     console.log(`decrement -> this: `, this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");

// const icrementBtn = document.querySelector(".js-increment");

// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener("click", function () {
//   console.log("Клик на дикремент!");
//   counter.decrement();
//   //   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// icrementBtn.addEventListener("click", function () {
//   console.log("Клик на икремент!");
//   counter.increment();
//   //   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// value = 27.5;
// console.log(value);

// 1) Попорсить ввести число и сохранить в переменную
// 2) Попросить ввести в степень и сохранить в переменну
// 3) Ввозвести введенные данные в степень и вывести

// const calc = {
//   value: 5,

//   method(param) {
//     return {
//       value: param,
//       multiply: () => {
//         return this.value * 2;
//       },
//     };
//   },
// };

// const result = calc.method(20);
// console.log(result);
// console.log(result.multiply());

// const hotel = {
//   name: "Resort Hotel",
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();

// 6) Привязка при помощи apply, call
// callback.call(hotel);
// callback.apply(hotel);
// };

// 1)Вызов функции в контексте объекта:
// hotel.showThis();

// 2)Потеря контекста при передаче колбека:
// fn(hotel.showThis);

// 3)Частая ошибка, когда вместо передачи ссылки на функцию, мы ее вызываем
// fn(hotel.showThis());

// 4)Передаем анонимный колбек и не теряем контекст
// fn(() => hotel.showThis);

// 5) Привязка контекста методом bind:
// fn(hotel.showThis.bind(hotel));

// 6) Привязка контекста методами call/apply:
// fn(hotel.showThis);

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// Правильные варианты решения задачи
// makeMessage(customer.getFullName.bind(customer));
// makeMessage(() => customer.getFullName());

// const john = {
//   firstName: "John",

//   sayHi(greeting) {
//     console.log(`${greeting} ${this.firstName}!`);
//   },
// };

// const dave = {
//   firstName: "Dave",
// };

// const greeting = "Hello";

// john.sayHi(greeting);
// john.sayHi.call(dave, greeting);
// john.sayHi.apply(dave, [greeting]);
// john.sayHi.bind(john, greeting);

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// // product.showPrice();

// function callAction(callback) {
//   callback();
// }

// callAction(() => product.showPrice());

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
