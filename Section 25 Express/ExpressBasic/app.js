var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("hi there!");
});

app.get("/speak/:animal", function(req, res){  
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "Meow"
    }
    var animal = req.params.animal;
    var sound = "";
    res.send("The " + animal + " says " + sounds[animal]);
});

app.listen(3000, function(){
    console.log("running");
});