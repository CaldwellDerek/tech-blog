const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

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
})

module.exports = router;