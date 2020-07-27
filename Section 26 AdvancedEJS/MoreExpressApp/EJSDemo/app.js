// var express = require("express");
// var app = express();

// app.get("/:thing", function(req, res){
// 	console.log("test");
// 	var thing = req.params.thing;
// 	res.render("test.ejs", {thingVar: thing}); // test.ejs要打双引号，{paramOne: paramTwo}里paramOne不能是var，var是一个关键词，不能当做变量名字
// });

// app.listen(3000, function(){
// 	console.log("running");
// });


/** 
 * Rendering HTML and Templates 
 */
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
// 	res.render("test.ejs");
// });

// app.get("/fall/:thing", function(req, res){
// 	var thing = req.params.thing;
// 	// res.send("You fall " + thing);
// 	res.render("love.ejs", {thingVar: thing});
// });

// app.listen(3000, function(){
// 	console.log("running");
// });


/**
 * Styles And Partials
 * 
 * Show how to properly include public assets
 * Properly configure our app to use EJS
 * Use partials to dry up our code!
 */
var express = require("express");
var app = express();

app.use(express.static("public"));
// app.set("view engine", "ejs"); // 这句可以在下面写.ejs文件的时候省略后缀


app.get("/", function (req, res) {
    res.render("test.ejs");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Charlie" },
        { title: "Post 3", author: "Colt" }
    ];

    res.render("post.ejs");
})

app.listen(3000, function () {
    console.log("Running...");
});


