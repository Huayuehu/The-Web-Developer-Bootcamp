const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cat_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// // add a mew cat to the DB
// var george = new Cat({
//     name: "Georgo",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if (err) {
//         console.log("Something went WRONG!!!");
//     } else {
//         console.log("We just saved a cat to the DB: ");
//         console.log(cat);
//     }
// });

//another way of inserting a data in DB
Cat.create({
    name: "Snow Yellow",
    age: 5,
    temperament: "Yellow"   
}, function(err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log("Added Snow Yellow: ");
        console.log(cat);
        catList();
    }
});

// retrieva all cats from the DB and console.log each one
function catList () {
    Cat.find({}, function(err, cats){
        if (err) {
            console.log("Oh No, ERROR!!");
            console.log(err);
        } else {
            console.log("ALL THE Cats: ");
            console.log(cats);
        }
    });    
}
