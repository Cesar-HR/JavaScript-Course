/* A constant's value cannot be changed. */
/* A constant's value has to be initialize */
const PI = 3.1416;
console.log("PI's value: ", PI);

/* A let's value is not necessary to be initialize */
let movie;
movie = "Avengers";
console.log("my fav movie is: ", movie);

/* object */
const person = {
  name: "Cesar",
  age: "22",
};

/* array */
const colors = ["purple", "red", "blue"];

console.log(person);
console.log(colors);

/* It's able to update/add values in an object and array using let and const*/
/* object - array - function - class are compound values */
person.name = "Jhon";
person.email = "example@gmail.com";
colors.push("yellow", "orange");

console.log(person);
console.log(colors);
