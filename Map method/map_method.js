// MAP METHOD
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'software developer'
    },
    {
        name: 'cesar',
        age: 21,
        position: 'junior developer'
    },
    {
        name: 'sofia',
        age: 45,
        position: 'scrum master'
    },
    {
        name: 'jhon',
        age: 38,
        position: 'product owner'
    }
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// First manner
const names = people.map((person)=>{
    return person.name;
});

console.log(names);

// Second manner
const ages = people.map((person) => person.age)
console.log(ages);

// Third manner
const getPosition = (person) => person.position;
const positions = people.map(getPosition);
console.log(positions);

// Get Objects
const newPerson = people.map((item) => {
    return{
        firstName: item.name.toUpperCase(),
        age: item.age,
        jobPosition: item.position
    }
});
console.log(newPerson);

// Inner HTML
const data = people.map((item) => `<p>${item.name + '-' + item.age}</p>`);
const result = document.querySelector('#dataPerson');
result.innerHTML = data.join('');