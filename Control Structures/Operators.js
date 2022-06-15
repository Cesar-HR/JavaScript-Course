/* Math Operators */
let num = 5 + (5 - 10) * 3;
let module = 5 % 2;

console.log("my result is:", num);
console.log("my module result is:", module);

/* Relational Operators */
console.log("Relational Operators");
console.log(8 > 9); // false
console.log(9 > 8); // true
console.log(8 >= 9); // false
console.log(9 >= 8); // true
console.log(7 < 7); // false
console.log(7 <= 7); // true

/* 
= Variable assignment
== Comparison of variables
=== Data type and value comparison
*/
console.log("");
console.log(7 == 7);
console.log("7" == 7);
console.log("8" == 7);
console.log(0 == false);

console.log("");
console.log(7 === 7);
console.log("7" === 7);
console.log("8" === 7);
console.log(0 === false);

/* Increment */
let i = 1;
//i = i + 2
i += 2;
console.log("my value:", i);

/* Logical operators */
/* 
! => NOT
|| => OR
&& => AND
*/
console.log("NOT Operator (!true)", !true);
console.log("NOT Operator (!false)", !false);
console.log("OR Operator:", 9 === 9 || "9" === 9);
console.log("AND Operator:", 9 === 9 && 9 === 9);
console.log("AND Operator:", 9 === 9 && "9" === 9);
