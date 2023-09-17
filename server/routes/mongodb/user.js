const express = requiere('express');
const router = express.router();

router.get('/', (req,res)=>{
    console.log("worked");
    res.send("worked")
})

module.exports = router;