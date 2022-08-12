const numbers = [5, 10, 15, 20, 25, 30];

const total = numbers.reduce((acc, number) => {
  // console.log("acc: ", acc);
  // console.log("number: ", number);

  return acc + number;
}, 0);

// console.log(total);

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total, { price, quantity }) => {
  return total + price * quantity;
}, 0);
// console.log(totalAmount);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
// console.table(players);

const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "node.js"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "node.js"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "node.js", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => {
  // мутабельность параметров:
  // acc.push(...tweet.tags);
  // return acc;

  // без мутабельности параметров(для линтеров):
  return [...acc, ...tweet.tags];
}, []);
// console.log(allTags);

const tagsStats = allTags.reduce((acc, tag) => {
  // console.log(acc);
  //МУТАБЕЛЬНОСТЬ:

  // if (acc[tag]) {
  //   acc[tag] += 1;

  //   return acc;
  // }
  // acc[tag] = 1;

  // return acc;

  //НЕМУТАБЕЛЬНОСТЬ:

  // if (acc[tag]) {
  //   return {
  //     ...acc,
  //     [tag]: acc[tag] + 1,
  //   };
  // }
  // return {
  //   ...acc,
  //   [tag]: 1,
  // };

  //ТЕРНАРНИК:

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

// console.log(tagsStats);

const numberSum = [5, 10, 15, 25, 30];
const result = numberSum.reduce((acc, number) => {
  // console.log("number: ", number);
  // console.log("acc: ", acc);
  return acc + number;
}, 100);

const salary = {
  mango: 100,
  kiwi: 120,
  ajax: 100,
};

const totalSalary = Object.values(salary).reduce((acc, sum) => {
  return acc + sum;
});
console.log("totalSalary: ", totalSalary);
