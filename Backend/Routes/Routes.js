const express = require('express');


const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`
        <style>body{background-color:black;color:white;font-size:40px;}</style>
        <h1>WELCOME TO HOMEPAGE OF API</h1>
    `);
})


const {newUserEntry} = require('../Controllers/newUserEntry');

const {verifyUser} = require('../Controllers/verifyuser');

const {createPost,getallPosts,getallUserNames,getUserPosts} = require('../Controllers/fetchdata');

const {deletePost} = require('../Controllers/updateAndDeletePost');


router.post('/newuser',newUserEntry);

router.post('/auth',verifyUser);

router.post('/create/post',createPost);

router.get('/get/posts',getallPosts);

router.get('/allusers',getallUserNames);

router.get('/posts/:username',getUserPosts);

router.get('/deletepost/:postid',deletePost);


module.exports = router;