const mongoose = require('mongoose');
const postModel =  require('../models/postModel');
const Post = mongoose.model('Post');


exports.list_all_posts = (req, res) => {
    Post.find({}, (error ,posts) => {
        if (error){
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur;'});
        }
        else {
            res.status(200);
            res.json(posts);
        }
    })
};

exports.create_a_post = (req, res) => {
    const new_post = new Post(req.body);
    new_post.save((error, post) => {
        if (error){
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur;'});
        }
        else {
            res.status(201);
            res.json(post);
        }
    })

    ;
};

exports.get_a_post = (req, res) => {
    Post.findById(req.params.id, function(error, post) {
        if (error){
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur;'});
        }
        else {
            res.status(201);
            res.json(post);
        }
    });
};

exports.update_a_post = (req, res) => {
    // On pouvait utiliser aussi findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, post))
    Post.findById(req.params.id, function(error, post) {
        if (error){
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur;'});
        }
        else {
            post.title = req.body.title;
            post.content = req.body.content;

            post.save(function(err){
                if(err){
                    res.status(500);
                    console.log(error);
                    res.json({message: 'Erreur serveur;'});
                }
                // Si tout est ok
                res.status(201);
                res.json(post);
            });
        }
    });
};

exports.delete_a_post = (req, res) => {
    Post.remove({_id: req.params.id}, function(error, post) {
        if (error){
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur;'});
        }
        else {
            res.status(200);
            res.json('Post bien supprimé');
        }
    });
};
