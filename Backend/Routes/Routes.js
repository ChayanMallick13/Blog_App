const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`
        <style>body{background-color:black;color:white;font-size:40px;}</style>
        <h1>WELCOME TO HOMEPAGE OF API</h1>
    `);
})


module.exports = router;