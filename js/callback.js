// const fnA = function (message, callback) {
//   console.log(message);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Second function!", number);
// };
// // fnA("Hello World!", fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   //   console.log(result);
// };

// const sum = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// // doMath(2, 4, sum);
// // doMath(10, 20, sum);
// // doMath(30, 10, sub);

// const onGetCurrentPosition = function (position) {
//   // console.log(position);
// };
// const errorGetCurrentPosition = function (error) {
//   // console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetCurrentPosition, errorGetCurrentPosition);

// const filter = function (array, test) {
//   const newFilter = [];
//   for (const el of array) {
//     // console.log(el);
//     const passed = test(el);
//     if (passed) {
//       newFilter.push(el);
//     }
//   }
//   return newFilter;
// };

// const callback1 = function (number) {
//   return number >= 3;
// };

// const callback2 = function (number) {
//   return number <= 5;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6], callback1);
// // console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
// // console.log(r2);

// const letMeSeeYourName = (userName, callback) => {
//   callback(userName);
// };

// const greet = (name) => {
//   console.log(`Your are welcome, ${name}!`);
// };

// const seen = (name) => {
//   console.log(`Hope see you soon, ${name}!`);
// };

// letMeSeeYourName("Stas", greet);
// letMeSeeYourName("Stas", seen);

// let id = 0;

// const makeProduct = (name, price, callback) => {
//   const result = {
//     name,
//     price,
//     id,
//   };

//   callback(result);

//   id += 1;
// };

// const showProduct = ({ name, price, id }) => {
//   console.log(`Product ${name}, price $${price}, id ${id}`);
// };

// // makeProduct("Kettle", 80, showProduct);
// // makeProduct("Dodja", 100, showProduct);
// // makeProduct("Fall", 2000, showProduct);

// const strings = ["Happy", "New", "Year!"];

// const giveArray = (array, cb) => {
//   for (const elem of array) {
//     const newStr = cb(elem);
//     console.log(newStr);
//   }
// };

// // const reverseString = (str) => str.split("").reverse().join("");
// // const upperCase = (item) => item.toUpperCase();

// giveArray(strings, (str) => str.split("").reverse().join(""));
// giveArray(strings, (item) => item.toUpperCase());

// const logins = ["dog", "cat", "rat"];

// const acceptLogin = (login, successLogin, failLogin) => {
//   if (login.length < 3) {
//     failLogin(`Your login should be longer that 2`);
//     return;
//   }

//   if (logins.includes(login)) {
//     failLogin(`Your login has been alreday taken!`);
//     return;
//   }

//   logins.push(login);
//   successLogin(login);
// };

// const onSuccess = (login) => {
//   console.log(`Congratulate! Your login ${login} was accepted!`);
// };

// const onError = (error) => {
//   console.log(`Sorry ${error}`);
// };

// const newLogin = "dog";
// acceptLogin(newLogin, onSuccess, onError);

// const newLogin2 = "ad";
// acceptLogin(newLogin2, onSuccess, onError);

// const newLogin3 = "qweqweqwe";
// acceptLogin(newLogin3, onSuccess, onError);

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);
