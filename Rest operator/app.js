// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear', 'watermelon', 'pineapple'];
const [first, second, ...restOfFruits] = fruits;
console.log(first, second, restOfFruits);
const specificFruit = restOfFruits.find((fruit) => fruit === 'pineapple');
console.log(specificFruit);

// objects
const person = { firstname: 'jhon', lastName: 'smith', job: 'developer' };
const { job, ...restofInfo } = person;
console.log(job, restofInfo);

// functions
const getAverage = (firstname, ...scores) => {
    console.log(firstname);
    console.log(scores);
    const average = scores.reduce((total, score) => { return total += score }, 0) / scores.length;
    console.log(average);
};

//getAverage(person.firstname, 5, 4, 3, 2, 1)
const scoreData = [10,9,8,7,6];
getAverage(person.firstname,...scoreData);