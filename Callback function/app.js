// Callback function
function makeUpperCase(value) {
    console.log(value.toUpperCase());
}

//makeUpperCase('cesar');

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}

//reverseString('cesar');

function handleName(name, fn) {
    const fullName = `${name} hidalgo`;
    fn(fullName);
}

handleName('cesar', makeUpperCase);
handleName('cesar', reverseString);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert("Hello World");
});