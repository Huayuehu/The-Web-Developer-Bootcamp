const mongoose = require("mongoose");
// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "hermione Granger"
// });

// newUser.posts.push({
//     title: "How to bre polyjuice potion",
//     content: "Just kidding.  Go to potions class to learn it!"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

User.findOne({name: "hermione Granger"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
        user.posts.push ({
            title: "3 Things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save(function(err, user) {
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
})
