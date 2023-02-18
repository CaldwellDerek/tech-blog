const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

router.use("/api/posts", (request, response)=>{
    response.send("Works");
})


module.exports = router;