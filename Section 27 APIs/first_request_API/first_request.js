var request = require('request');
// pry = require('pryjs'); // locus的替代品, locus是个debugging tool

request("https://jsonplaceholder.typicode.com/users/1", function (error, response, body) {
    eval(require("locus"));
    // eval(pry.it);
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    } 
});