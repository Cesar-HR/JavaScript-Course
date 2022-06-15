/* Conditional */
let age = 17;

if (age > 17) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}

/* if else - else if */
/*
Early morning => 0hrs - 5hrs
Good morning => 6hrs - 11hrs
Good afternoon => 12hrs - 18hrs
Good evening => 19hrs - 23hrs
*/
let hour = 24;

if (hour >= 6 && hour <= 11) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 18) {
  console.log("Good afternoon");
} else if (hour >= 19 && hour <= 23) {
  console.log("Good evening");
} else {
  console.log("Early morning");
}

/* Ternary operator - (condition) ? true : false */
const morning =
  hour > 5 && hour < 12
    ? console.log("Good morning")
    : hour > 11 && hour < 19
    ? console.log("Good afternoon")
    : hour > 18 && hour < 24
    ? console.log("Good evening")
    : console.log("Early morning");

/* Switch case */
/* 
Sunday - 0
Monday - 1
Tuesday - 2
Wednesday - 3
Thursday - 4
Friday - 5
Saturday - 6
*/
const day = 6;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Value undefined");
    break;
}
