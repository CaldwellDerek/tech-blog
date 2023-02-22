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

router.get("/signup", (request, response)=> {
    response.render("signup");
})

router.get("/dashboard", (request, response)=> {
    Post.findAll({
        where: {
            user_id: request.session.userID
        }
    }).then(postData => {
        const hbsPosts = postData.map(post => post.toJSON());
        response.render("dashboard", {
            allPosts: hbsPosts
        });
    }).catch(error => {
        console.log(error);
    })
    
})

router.get("/sessions", (request, response)=> {
    response.json(request.session);
})


module.exports = router;
