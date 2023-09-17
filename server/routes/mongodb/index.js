const express = require('express');
const router = express.Router();

const userRoutes = require('./user.js');

router.get('/', (req,res)=>{
    res.send("Mongodb APIs")
})

router.use('/user', userRoutes);

module.exports = router;