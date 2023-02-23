const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');
const dayjs = require("dayjs");

router.get("/", (request, response)=>{
    Post.findAll({
        order: [
            ["createdAt", "DESC"]
        ]
    }).then(postData => {
        const hbsPosts = postData.map(post => post.toJSON());
        for (let obj of hbsPosts){
            let formattedDate = dayjs(obj.createdAt).format("YYYY/MM/DD");
            obj.createdAt = formattedDate;
        }
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
    if (request.session.userID){
        Post.findAll({
            where: {
                user_id: request.session.userID
            },
            order: [
                ["createdAt", "DESC"]
            ]
        }).then(postData => {
            const hbsPosts = postData.map(post => post.toJSON());
            for (let obj of hbsPosts){
                let formattedDate = dayjs(obj.createdAt).format("YYYY/MM/DD");
                obj.createdAt = formattedDate;
            }
            response.render("dashboard", {
                allPosts: hbsPosts
            });
        }).catch(error => {
            console.log(error);
        })
        
    } else {
        response.render("login");
    }
})

router.get("/comments", (request,response)=> {
    response.render("comments");
})

router.get("/sessions", (request, response)=> {
    response.json(request.session);
})


router.get("/:id", (request, response)=> {
    Post.findOne({
        where: {
            id: request.params.id
        }
    })
    .then(postData => {
        const hbsPostData = postData.toJSON();
        hbsPostData.createdAt = dayjs(hbsPostData.createdAt).format("YYYY/MM/DD");
        Comment.findAll({
            where: {
                post_id: hbsPostData.id
            },
            order: [
                ["createdAt", "DESC"]
            ]
        }).then(commentData => {
            const hbsCommentData = commentData.map(comment => comment.toJSON());
            for (let obj of hbsCommentData){
                let formattedDate = dayjs(obj.createdAt).format("YYYY/MM/DD");
                obj.createdAt = formattedDate;
            }
            response.render("comments", {
                userPost: hbsPostData,
                comments: hbsCommentData
            })
        })
    })
    .catch(error => {
        console.log(error);
    })
})


module.exports = router;



