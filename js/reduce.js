const numbers = [5, 10, 15, 20, 25, 30];

const total = numbers.reduce((acc, number) => {
  //   console.log("acc: ", acc);
  //   console.log("number: ", number);
  return acc + number;
}, 0);
// console.log(total);

const salary = {
  Mango: 120,
  Ajax: 200,
  Huston: 250,
};

const totalSalary = Object.values(salary).reduce((acc, value) => {
  return acc + value;
});
// console.log(totalSalary);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
// console.table(players);

const totalTimePlayer = players.reduce((totalTime, player) => {
  return totalTime + player.timePlayed;
}, 0);
// console.log("totalSum:", totalTimePlayer);

const cart = [
  { label: "Apple", price: 100, quantity: 10 },
  { label: "Orange", price: 200, quantity: 7 },
  { label: "Grape", price: 250, quantity: 5 },
];

const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

// console.log(totalAmount);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "css"] },
  { id: "001", likes: 10, tags: ["js", "html"] },
  { id: "002", likes: 20, tags: ["js", "css", "node.js"] },
  { id: "003", likes: 13, tags: ["js", "css", "react"] },
  { id: "004", likes: 15, tags: ["react", "css"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

const resultTags = allTags.reduce((acc, tag) => {
  // if (acc[tag]) {
  //   acc[tag] += 1;

  //   return acc;
  // }
  // acc[tag] = 1;

  // return acc;

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(resultTags);
