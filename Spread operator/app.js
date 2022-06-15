// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['cesar', 'bryan', 'thiago'];
const girls = ['keidy', 'susana'];
const bestFriend = 'mariano';
const school = [...boys, ...girls, bestFriend];
console.log(school);

// reference
//const newFriend = school;
// copy
const newFriend = [...school];
newFriend[0] = 'Jhosep';
console.log(school);
console.log(newFriend);

// ES2018 - ES8 Objects

const person = { name: 'cesar', job: 'student' };
const newPerson = { ...person, city: 'lima' };
console.log(person);
console.log(newPerson);