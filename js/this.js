// const showTag = function () {
//   console.log(`showTag -> this`, this);
//   console.log(`showTag -> this.tag`, this.tag);
// };

// showTag();

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log(`user:`, user);

// user.showUserTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log(`showTag -> this`, this);
//     console.log(`showTag -> this.tag`, this.tag);
//   },
// };

// user.showTag();
// const outerShowTag = user.showTag;

// outerShowTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log(`showTag -> this`, this);
//     console.log(`showTag -> this.tag`, this.tag);
//   },
// };

// user.showTag();

// const result = user.showTag;
// result();

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// const counter = {
//   value: 0,

//   increment(value) {
//     console.log(`increment -> this: `, this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log(`decrement -> this: `, this);
//     this.value -= value;
//   },
// };

// const updateColor = function (value, operation) {
//   operation(value);
// };

// updateColor(10, counter.increment);
// updateColor(5, counter.decrement);

// МЕТОД CALL

// const showThis = function (...args) {
//   console.log(args);
//   console.log(`showThis -> this: `, this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 6, 7, 8, 9);

// const objB = {
//   x: 567,
//   y: 5768,
// };

// showThis.call(objB, 6, 7, 8, 9, 9);

const changeColor = function (color) {
  console.log(`changeColor -> this: `, this);
  this.color = color;
};

const hat = {
  color: "black",
};

const sweater = {
  color: "orange",
};

changeColor.call(hat, "blue");
console.log(hat);

changeColor.call(sweater, "red");
console.log(sweater);

// МЕТОД APPLY

// const showThis = function (...args) {
//   console.log(args);
//   console.log(`showThis -> this: `, this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.apply(objA, [5, 6, 7, 8, 9]);

// const objB = {
//   x: 567,
//   y: 5768,
// };

// showThis.apply(objB, [6, 7, 8, 9, 9]);

// МЕТОД BIND

const changeHatColor = changeColor.bind(hat);
changeHatColor();

const changeSweaterColor = changeColor.bind(sweater);
changeSweaterColor();
