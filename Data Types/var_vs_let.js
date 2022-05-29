/* var is for global scope variable */
var hello = "Hello World!";

/* let is for block scope variable */
let hola = "Hola Mundo!";

console.log(hello);
console.log(hola);

/* Example using var */
console.log("*** var ***");
var song = "Rock & Roll";
console.log("value of song before a block: ", song);
{
  var song = "Pop";
  console.log("value of song inside a block: ", song);
}
console.log("value of song outside a block: ", song);

/* Example using let */
console.log("*** let ***");
let movie = "Batman";
console.log("value of movie before a block: ", movie);
{
  let movie = "Avengers";
  console.log("value of movie inside a block: ", movie);
}
console.log("value of movie outside a block: ", movie);

/* show variables for windows */
console.log(window);
