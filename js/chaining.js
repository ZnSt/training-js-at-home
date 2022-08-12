const numbers = [1, 5, 2, 4, 3];

const result = numbers
  .filter((number) => number > 2)
  .map((number) => number * 3)
  .sort((a, b) => a - b);

const players = [
  { id: "player-1", name: "Mango", rank: 110, online: true },
  { id: "player-2", name: "Poly", rank: 150, online: true },
  { id: "player-3", name: "Ajax", rank: 200, online: false },
  { id: "player-4", name: "Huston", rank: 405, online: true },
  { id: "player-5", name: "Kiwi", rank: 500, online: false },
];
// console.table(players);

const inlineSorted = players.filter((player) => player.online).sort((a, b) => a.rank - b.rank);
// console.table(inlineSorted);

const user = {
  name: "Mango",
  locations: {
    coord: [1, 2],
    city: "Kiyv",
  },
};

console.log(user?.locations?.coord);
