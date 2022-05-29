/* numbers */
let value_a = 2;
let value_b = new Number(1);
let value_c = 7.19;
let value_d = "5.67";
let value_e = 15;

console.log(value_a, value_b);
/* The toFixed() method converts a number to a string 
and rounds the string to a specified number of decimals. */
console.log(value_c.toFixed(1));
console.log(typeof value_c.toFixed(1));
console.log(parseInt(value_c)); // return an integer value
console.log(parseFloat(value_e)); //return a float value
console.log(typeof value_d, typeof value_e); //typeof method returns the type of the value
console.log(value_c, value_d); //concatenation
console.log(value_e + parseInt(value_d)); //string to convert into integer value to do math operations
console.log(value_e + parseFloat(value_d)); //string to convert into float value to do math operations
