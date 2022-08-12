const numbers = [5, 10, 15, 20, 20, 30];
const findNumbers = numbers.find((number) => {
  return number > 10;
});
// console.log(findNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

const playersToFind = "player-4";
const find = players.find((player) => playersToFind === player.id);
// console.table(find);

const playersNameFind = "Ajax";
const nameFind = players.find((player) => playersNameFind === player.name);
// console.table(nameFind);

const findPlayerById = (allPlayers, playerId) => {
  return allPlayers.find((player) => {
    return player.id === playerId;
  });
};
console.log(findPlayerById(players, "player-1"));
console.log(findPlayerById(players, "player-4"));
console.log(findPlayerById(players, "player-5"));
