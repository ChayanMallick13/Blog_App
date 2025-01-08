const UserData = require('../Models/UserData');
const Post = require('../Models/Post');




exports.createPost = async(req,res) => {
    try {
        const {title,body,username} = req.body;
        const userdetails = await UserData.findOne({username:username});
        const name = userdetails.name;
        const date = new Date();
        const cdate = date.toLocaleString();
        const post = await Post.create(
            {
                title:title,
                body:body,
                user:name,
                createdAt:cdate,
                username:username,
            }
        );
        return res.status(200).json(
            {
                success:true,
                post:post,
                message:"Post Created",
            }
        )
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json(
            {
                success:false,
                message:"Error Occurred",
            }
        );
    }
}

exports.getallPosts = async(req,res) => {
    try{
        const allPosts = await Post.find();
        res.status(200).json(
            {
                message:"Posts Fetched",
                posts:allPosts,
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                message:"Error in Fetching Posts",
                posts:[],
            }
        )
    }
};

exports.getallUserNames = async(req,res) => {
    try{
        const allusers = await UserData.find();
        res.status(200).json(
            {
                users:allusers,
                message:"All Users Fetched",
                success:true,
            }
        ) 
    }
    catch(err){
        res.status(500).json(
            {
                users:[],
                message:"No Users Fetched",
                success:false,
            }
        ) 
    }
};

exports.getUserPosts = async(req,res) => {
    try{
        const {username} = req.params;
        const userposts = await Post.find({username:username});
        res.status(200).json(
            {
                success:true,
                message:"Data Found",
                posts:userposts
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(404).json(
            {
                success:false,
                message:"Data Not Found",
                posts:[]
            }
        )
    }
};