const mongoose = require('mongoose');

const date = new Date();
const PostSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },

        body: {
            type:String,
            required:true,
        },

        user: {
            type:String,
            required:true,
        },

        username: {
            type:String,
            required:true,
        },

        lastUpdated: {
            type:String,
        },

        createdAt: {
            type: String,
            required:true,
            default:date.toLocaleString(),
        },

    }
);
module.exports = mongoose.model("Post",PostSchema);