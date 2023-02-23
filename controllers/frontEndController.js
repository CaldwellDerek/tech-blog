const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');
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

<<<<<<< HEAD
router.get("/comment", (request, response)=> {
    Post.findOne({
        where: {
            id: request.body.id
=======
router.get("/:id", (request, response)=> {
    Post.findOne({
        where: {
            id: request.params.id
>>>>>>> e9731c5cb4565f5d00ff06c19ca6bd9470faea74
        }
    })
    .then(postData => {
        const hbsData = postData.toJSON();
<<<<<<< HEAD
        hbsData.createdAt = dayjs(hbsData.createdAt).format("YYYY/MM/DD");
        response.send(hbsData);
=======
        let formattedDate = dayjs(postData.createdAt).format("YYYY/MM/DD");
        hbsData.createdAt = formattedDate;
        response.render("comments", {
            userPost: hbsData
        })
>>>>>>> e9731c5cb4565f5d00ff06c19ca6bd9470faea74
    })
    .catch(error => {
        console.log(error);
    })
})

<<<<<<< HEAD
=======

>>>>>>> e9731c5cb4565f5d00ff06c19ca6bd9470faea74
router.get("/sessions", (request, response)=> {
    response.json(request.session);
})


module.exports = router;



