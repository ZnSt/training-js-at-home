const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

// const updatePlayers = players.map((player) => {
//   return {
//     ...player,
//     points: player.points * 0.1,
//   };
// });
// console.table(updatePlayers);

// const playerIdUpdate = "player-1";

// const updatePlayers = players.map((player) => {
//   if (playerIdUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 300,
//     };
//   }
//   return player;
// });
// console.table(updatePlayers);

//КОРОТКИЙ ВАРИАНТ ЗАПИСИ РЕШЕНИЯ ЗАДАЧИ:

// const updatePlayers = players.map((player) =>
//   playerIdUpdate === player.id
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 300,
//       }
//     : player
// );
// console.table(updatePlayers);
