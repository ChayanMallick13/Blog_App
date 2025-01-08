const mongoose = require('mongoose');


const userdataSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },

        name:{
            type:String,
            required:true,
        },

        password:{
            type:String,
            required:true,
        }
    }
);

module.exports = mongoose.model("UserData",userdataSchema);