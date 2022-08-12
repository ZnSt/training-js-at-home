const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

const playersName = players.map((player) => player.name);
// console.log(playersName);

const playersId = players.map((player) => player.id);
// console.log(playersId);

const res = players.map(({ name, online }) => {
  return {
    name,
    online,
  };
});
// console.log(res);

const updatePlayers = players.map((player) => {
  return {
    ...player,
    points: player.points * 1.1,
  };
});

// console.table(updatePlayers);

const newPlayer = "player-3";

// 1 ВАРИАНТ РЕШЕНИЯ ЗАДАЧИ
const updatePlayer = players.map((player) =>
  newPlayer === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 700,
      }
    : player
);

// 2 ВАРИАНТ РЕШЕНИЯ ЗАДАЧИ
// const updatePlayer = players.map((player) => {
//   console.log(player.id);
//   if (newPlayer === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 500,
//     };
//   }

//   return player;
// });

console.table(updatePlayer);
