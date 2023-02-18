const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.use("/", (request, response)=>{
    response.send("Works");
})

module.exports = router;