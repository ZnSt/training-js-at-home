const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

const playerId = "player-3";

const playerIdFind = players.find((player) => player.id === playerId);
console.log(playerIdFind);

const playerName = "Huston";

const playerFindName = players.find((player) => player.name === playerName);
console.log(playerFindName);
