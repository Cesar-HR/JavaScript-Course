// faster/easier way to access/unpack variables from arrays, objects (later videos)

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['jhon', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [friend1, , friend2, , friend3] = friends;
console.log(friend1, friend2, friend3);

let first = 'anna';
let second = 'peter';

// first manner
/*let temp = second;
second = first;
first = temp;
*/

console.log(first, second);

// second manner
[second, first] = [first, second];
console.log(first, second);