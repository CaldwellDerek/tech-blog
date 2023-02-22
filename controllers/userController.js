const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');
const bcrypt = require("bcrypt");

router.get("/", async (request, response)=>{
    try {
        const allUsers = await User.findAll();
        if (allUsers){
            response.status(200).json(allUsers);
        } else {
            response.status(404).json({msg: "An error occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error occurred."});
    }
})

router.post("/", async (request, response)=> {
    try {
        const newUser = await User.create({
            username: request.body.username,
            password: request.body.password
        });
        if (newUser){
            request.session.userID = newUser.id;
            request.session.username = newUser.username;
            response.status(200).json(newUser);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) { 
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
})

router.post("/login", async (request, response)=> {
    try {
        const findUser = await User.findOne({
            where: {
                username: request.body.username
            }
        });
        if (findUser && bcrypt.compareSync(request.body.password, findUser.password)){
            request.session.userID = findUser.id;
            request.session.username = findUser.username;
            response.status(200).json(findUser);
        } else {
            request.status(404).json({msg: "An error has occurred."});
        }
    } catch (error){
        console.log(error);
        request.status(500).json({msg: "An error has occurred."})
    }
})

router.get("/logout", (request, response)=> {
    request.session.destroy();
    response.send("Logged out!")
});

module.exports = router;