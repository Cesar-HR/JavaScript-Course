/* strings */
let name = "Style";
let lastname = "Stalinsky";
let family_name = new String("Gloria");
let lorem =
  "Lorem Ipsum is simply. Dummy text of the printing. And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log("my name is: ", name);
console.log("my lastname is: ", lastname);
console.log("my family's name is: ", family_name);

console.log("Length: ", name.length);
console.log("Length: ", lastname.length);
console.log("Length: ", family_name.length);

console.log("Uppercase method: ", name.toUpperCase());
console.log("Lowercase method: ", lastname.toLowerCase());

//console.log(lorem.trim());
console.log(
  "Does my article includes the word simply?: ",
  lorem.includes("simply")
);

console.log(
  "Does my article includes the word thomas?: ",
  lorem.includes("thomas")
);
console.log(lorem.split("."));
