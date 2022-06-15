// JavaScript Nuggets
// async / await
// async must be present, always returns a promise
// await waits until promise is settled
// error handling - try/catch block

// General example
//const example = async () => {
//    return 'Hello there'
//}

//async function someFunc() {
//    const result = await example();
//    console.log(result);
//    console.log('Hello World');
//}

// Specific example
const users = [
    { id: 1, name: 'jhon' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' }
];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] }
];

const getData = async () => {
    const user = await getUser('jhon')
    if (user) {
        const articles = await getArticles(user.id)
        console.log(articles);
    }
}

getData();

/* getUser('susan')
    .then((user) => getArticles(user.id))
    .then((articles) => console.log(articles))
    .catch((err) => console.log(err)) */

function getUser(name) {
    return new Promise((resolver, reject) => {
        const user = users.find((user) => user.name === name)
        if (user) {
            return resolver(user);
        }
        else {
            reject(`No such user with name: ${name}`)
        }
    })
}

function getArticles(userId) {
    return new Promise((resolver, reject) => {
        const userArticles = articles.find((user) => { user.userId === userId })
        if (userId) {
            return resolver(userArticles.articles)
        }
        else {
            reject(`Wrong ID`)
        }
    })
}