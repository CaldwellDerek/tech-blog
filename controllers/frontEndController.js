const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.use("/", (request, response)=>{
    response.send("Test");
})

module.exports = router;