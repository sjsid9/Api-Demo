var request = require("request");

request("https://www.google.com", function (err, res, body) {
    if (err) {
        console.log("Something went wrong!!");
        console.log(err);
    } else {
        if (res.statusCode == 200) {
            console.log(res.body);
        }
    }
});