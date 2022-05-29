/* Objects */
const person = {
  name: "Jhon",
  lastname: "Thomson",
  age: 25,
  address: {
    country: "Peru",
    city: "Lima",
  },
  hobbies: ["run", "swim", "watch tv"],
  married: false,
  greet: function () {
    console.log("It's a function");
  },
  myName: function () {
    console.log(`I'm ${person.name}`);
  },
  myAge: function () {
    console.log(`I'm ${this.age} years old`);
  },
};

console.log(person);
console.log("My name is:", person.name, person.lastname);
console.log("My fav hobbie is:", person.hobbies[1]);
console.log("My home is in:", person.address.country);
person.myName();
person.myAge();
/* This method will show all attributes of the object */
console.log(Object.keys(person));
/* This method will show all values of each attribute from the object */
console.log(Object.values(person));
/* To know if an attribute exists in the object */
console.log(person.hasOwnProperty("greet"));
