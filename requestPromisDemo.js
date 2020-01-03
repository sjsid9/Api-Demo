var rp = require('request-promise');

rp("http://jsonplaceholder.typicode.com/users/1")
    .then((body) => {
        const parsedData = JSON.parse(body);
        console.log(`Name is ${parsedData.name} and he lives in ${parsedData.address.city} .`);
    })
    .catch((err) => {
        console.log('Error', err);
    });