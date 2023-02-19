const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.use("/", (request, response)=>{
    Post.findAll().then(postData => {
        const hbsPosts = postData.map(post => post.toJSON());
        console.log(hbsPosts);
        response.render("home", {
            allPosts: hbsPosts
        });
    }).catch(error => {
        console.log(error);
    })
})

module.exports = router;