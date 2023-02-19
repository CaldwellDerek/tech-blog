const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.get("/", (request, response)=>{
    Post.findAll().then(postData => {
        const hbsPosts = postData.map(post => post.toJSON());
        response.render("home", {
            allPosts: hbsPosts
        });
    }).catch(error => {
        console.log(error);
    })
})

router.get("/login", (request, response)=> {
    response.render("login");
})

router.get("/sessions", (request, response)=> {
    response.json(request.session);
})


module.exports = router;
