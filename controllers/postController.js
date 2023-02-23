const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');
const dayjs = require("dayjs");

router.get("/", async (request, response)=>{
    try {
        const allPosts = await Post.findAll();
        if (allPosts){
            response.status(200).json(allPosts);
        } else {
            response.status(404).json({msg: "An error occured."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error occured."});
    }
});

router.get("/user_posts", async (request, response)=> {
    try {
        const userPosts = await Post.findAll({
            where: {
                user_id: request.session.userID
            }
        })
        if (userPosts){
            response.status(200).json(userPosts);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.post("/", async (request, response)=> {
    try {
        const newPost = await Post.create({
            title: request.body.title,
            post: request.body.content,
            author: request.session.username,
            user_id: request.session.userID
        })
        if (newPost){
            response.status(200).json(newPost);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.delete("/", async (request, response)=> {
    try {
        const removePost = await Post.destroy({
            where: {
                id: request.body.id
            }
        })
        if (removePost){
            response.status(200).json(removePost);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        response.status(500).json({msg: "An error has occurred."});
    }
});


module.exports = router;