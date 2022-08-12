const numbers = [1, 2, [4, [5]], 6, [7, 8, [9]]];
// console.log(numbers.flat(2));

const tweets = [
  { id: "000", likes: 5, tags: ["js", "node.js"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "node.js"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "node.js", "react"] },
];

const tags = tweets.flatMap((tweet) => tweet.tags);
console.log(tags);
