const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

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
            response.status(200).json(newUser);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) { 
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
})

module.exports = router;