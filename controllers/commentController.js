const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');

router.get("/", async (request, response)=> {
    try {
        const allComments = await Comment.findAll();
        if (allComments){
            response.status(200).json(allComments);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
})


router.post("/", async (request, response)=> {
    try {
        const newComment = Comment.create({
            comment: request.body.comment,
            author: request.session.username,
            post_id: request.body.post_id
        })
        if (newComment){
            response.status(200).json(newComment);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
})

module.exports = router;