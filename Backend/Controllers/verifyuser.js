const UserData = require('../Models/UserData');


exports.verifyUser = async(req,res) => {
    try{
        const {userName,Password} = req.body;
        const user = await UserData.find({username:userName,password:Password});
        if(user.length===0){
            return res.status(404).json(
                {
                    verified:false,
                    message:"User Not Registered",
                }
            )
        }
        else{
            return res.status(200).json(
                {
                    verified:true,
                    message:"User Found",
                    userinfo:user[0],
                }
            )
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json(
            {
                verified:false,
                message:"Error Occured",
            }
        )
    }
};

