// ====================
// COMMENTS ROUTES
// ====================
const express = require('express');
var router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');
var middleware = require("../middleware");

// Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {campground: campground});
        }
    })
});

// Comments Create
router.post("/", middleware.isLoggedIn, function(req, res){
    // lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    // add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    console.log(comment.author.username);
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    // redirect campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });    
});

// EDIT comment ROUTE
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err) {
            res.redirect(back);
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment})
        }
    })
});

// UPDATE comment ROUTE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    // find and update the correct campground
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if (err) {
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

// DESTROY comment ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

module.exports = router;