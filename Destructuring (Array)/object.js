// faster/easier way to access/unpack variables from arrays, objects

const person = {
    name: 'cesar',
    last: 'hidalgo',
    city: 'lima',
    siblings: {
        young: 'bryan',
        baby: 'thiago'
    }
};

// first example
const firstName = person.name;
const lastName = person.last;
const youngBrother = person.siblings.young;
console.log(firstName, lastName, youngBrother);

// second example
const { name: namePerson, last, city, siblings: { baby: babyBrother } } = person;
console.log(namePerson, last, city, babyBrother);

// third example
function printPerson({ name, last, city, siblings }) {
    console.log(name, last, city, siblings);
}
printPerson(person);