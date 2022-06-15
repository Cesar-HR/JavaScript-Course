// dot notation
const person = {
    name: 'jhon'
};
console.log(person.name);
person.lastName = 'perez';
person.age = 21;
console.log(person);

// square breacket notation

const items = {
    'featured-items':['item-1','item-2']
}
console.log(items["featured-items"]);
// same manner to the object person
console.log(person["lastName"]);

let appState = 'server';
const port = 'port';
const conn = {
    [appState]: 'on'
};

conn[port] = '3000';

console.log(conn);

// dynamic object keys
const app = {
    loading: true,
    name: '',
    position: ''
};

function updateApp(key,value){
    app[key] = value
};

updateApp('loading','false');
updateApp('name','cesar');
updateApp('position','junior developer');
updateApp('courses',['sql','dev','git']);
console.log(app);