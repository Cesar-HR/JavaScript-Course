// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined

const people = [
    { name:'jhon', age:20, position:'developer'},
    { name:'peter', age:25, position:'designer ui'},
    { name:'susy', age:30, position:'product owner'},
    { name:'ann', age:35, position:'intern student'},
    { name:'joshep', age:16, position:'developer'}
];

const fruits = ['banana', 'pineapple', 'orange', 'apples'];

// filter
const young = people.filter((person)=>person.age < 30);
console.log(young);

const devs = people.filter((person)=>person.position === 'developer');
console.log(devs);

// no match
const person = people.filter((item)=>item.name === 'pedro');
console.log(person);

// find
const job = people.find((item)=>item.position === 'designer ui');
console.log(job);

const fruit = fruits.find((fruit)=>fruit === 'pineapple');
console.log(fruit);

// no match
const oldAge = people.find((data)=>data.age > 35);
console.log(oldAge);

// multiple matches - first match
const randomPerson = people.find((data)=>data.age < 35);
console.log(randomPerson);

const jhon = people.filter((jhon)=>jhon.name ==='jhon');
console.log(job['position']);
console.log(jhon[0].position);