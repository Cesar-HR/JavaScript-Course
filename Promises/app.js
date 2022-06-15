// Javascript Nuggets - Promises

// async await
// consume/use promises

// pending, rejected, fulfilled

const value = 4;

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    if (value === random) {
        resolve('hello wolrd');
    } else {
        reject('there was an error');
    }
});

console.log(promise);
promise.then((data) => console.log(data)).catch((err) => console.log(err));