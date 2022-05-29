/* Arrays */
const array = [];
const pandora = [
  true,
  false,
  1,
  2,
  3,
  "hello",
  "world",
  ["one", "two", "three"],
];

console.log("Empty array: ", array);
console.log("pandora: ", pandora);
console.log("Pandora length: ", pandora.length);
console.log("pandora[7]", pandora[7]);
console.log("pandora[7][2]", pandora[7][2]);
console.log("pandora[6][2]", pandora[6][2]);

/* Other ways to create an array */
const english = Array.of("me", "you", "his", "her");
console.log("new array: ", english);

/* old */
const value = new Array(1, 2, 3);
console.log("old way: ", value);

/* fill an array of 100 */
const one_hundred = Array(100).fill(1);
console.log(one_hundred);

/* method to add more items inside an array */
const colors = ["Blue", "Yellow", "Red"];
console.log("Colors: ", colors);
colors.push("Purple", "Black");
console.log("New colors: ", colors);

/* method forEach  executes a provided function once for each array element */
colors.forEach(function (item, index) {
  console.log(`<li key=${index}>${item}</li>`);
});
