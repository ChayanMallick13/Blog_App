const UserData = require('../Models/UserData');



exports.newUserEntry = async(req,res) => {
    try{
        const {userName,Password,Name} = req.body;
        const finduser = await UserData.find({username:userName});
        if(finduser.length){
            return res.status(404).json(
                {
                    status:1,
                    message:"User Already Present",
                }
            )
        }
        else{
            const newData = new UserData(
                {
                    username:userName,
                    password:Password,
                    name:Name,
                }
            );
            const final_data = await newData.save();
            return res.status(200).json(
                {
                    status:2,
                    message:"User Registered",
                    userdata:final_data,
                }
            )
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json(
            {
                status:0,
                message:"Internal Error Occured",
            }
        )
    }

}