const numbers = [1, 9, 6, 2, 3];
numbers.sort((curEl, nexEl) => {
  return nexEl - curEl;
});

// console.log(numbers);

const letters = ["b", "B", "a", "A"];

const players = [
  { id: "player-1", name: "Mango", timePlayed: 110, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 150, points: 60, online: true },
  { id: "player-3", name: "Ajax", timePlayed: 200, points: 67, online: false },
  { id: "player-4", name: "Huston", timePlayed: 405, points: 33, online: true },
  { id: "player-5", name: "Kiwi", timePlayed: 500, points: 89, online: false },
];
console.table(players);

const sortedByBestPlayers = [...players].sort((pervPlayer, nextPlayer) => {
  return pervPlayer.timePlayed - nextPlayer.timePlayed;
});
console.log(sortedByBestPlayers);

const sortedByWorstPlayer = [...players].sort((pervPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - pervPlayer.timePlayed;
});
console.log(sortedByWorstPlayer);

const sortedByNamePlayers = [...players].sort((aName, bName) => {
  const result = aName.name[0] > bName.name[0];
  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }

  //   return aName.name[0] - bName.name[0];
});
console.log(sortedByNamePlayers);
