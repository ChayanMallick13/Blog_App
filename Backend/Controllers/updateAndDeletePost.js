const Post = require('../Models/Post');


exports.deletePost= async(req,res) => {
    try{
        const {postid} = req.params;
        const value = await Post.findByIdAndDelete(postid);
        res.status(200).json(
            {
                success:true,
                post:value,
                message:"post deleted",
            }
        )
    }
    catch(err){
        res.status(404).json(
            {
                success:false,
                post:{},
                message:"post not deleted",
            }
        )
    }
}