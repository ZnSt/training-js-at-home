const numbers = [5, 10, 15, 20, 25, 30];
const filterNumbers = numbers.filter((number) => number < 10 || number > 20);
// console.log(filterNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

const playersOnline = players.filter((player) => player.online);
console.table(playersOnline);

const playersNotOnline = players.filter((player) => !player.online);
console.table(playersNotOnline);
