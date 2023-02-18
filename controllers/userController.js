const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.use("/", async (request, response)=>{
    try {
        const allUsers = await User.findAll();
        if (allUsers){
            response.status(200).json(allUsers);
        } else {
            response.status(404).json({msg: "An error occured."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error occured."});
    }
})

module.exports = router;