const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("user test api")
})

module.exports = router;