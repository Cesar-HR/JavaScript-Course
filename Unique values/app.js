// Unique Values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast'
    },
    {
        name: 'burger',
        category: 'lunch'
    },
    {
        name: 'steak',
        category: 'dinner'
    },
    {
        name: 'bacon',
        category: 'breakfast'
    },
    {
        name: 'eggs',
        category: 'breakfast'
    },
    {
        name: 'pasta',
        category: 'dinner'
    }
];
// MAP - get all intances
// new Set - narrow down
// ['all', ...] - turn it back to array

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

// inner html
const result = document.querySelector("#menu");
result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`
}).join('');