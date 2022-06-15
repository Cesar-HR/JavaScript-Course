// Reduce - Objects
// cart example

const cart = [
    { title:'Samsung Galaxy S7', price:599.99, amount:1 },
    { title:'Google Pixel', price:799.99, amount:2 },
    { title:'Xiaomi Redmi Note 2', price:699.99, amount:4 },
    { title:'Xiaomi Redmi Note 5', price:399.99, amount:3 },
];

//github repos example
const url = 'https://api.github.com/users/jhon-smilga/repos?per_page=100';

// first manner
let total = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem;
    // count items
    total.totalItems += amount;
    // sum prices
    total.cartTotal += amount * price;
    return total;  
}, {totalItems:0, cartTotal:0});
console.log(total);

// second manner
let {items,prices} = cart.reduce((total,dataCart)=>{
    const {amount,price} = dataCart;
    //count items
    total.items += amount;
    //sum prices
    total.prices += amount * price;
    return total;
},{ items:0, prices:0 });
prices = parseFloat(prices.toFixed(2));
console.log(items,prices);