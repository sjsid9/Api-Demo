var request = require("request");

request("http://jsonplaceholder.typicode.com/users/1", (err, res, body) => {

    // eval(require('locus'));
    if (!err && res.statusCode == 200) {
        // console.log(body);
        // console.log(typeof body);
        var parsedData = JSON.parse(body);
        // console.log(typeof parsedData);
        console.log("Name : " + parsedData['name']);
        console.log(parsedData.name + "lives in " + parsedData.address.city);
        console.log();
        console.log("Placeholder Line Syntax");
        console.log(`${parsedData.name} live in ${parsedData.address.city}`);
    }
});