const express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Running...");
})
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("The YelpCamp Server Has Started!");
// });