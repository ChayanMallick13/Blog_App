const mongoose = require('mongoose');

if(!process.env.NODE_ENV){
    require('dotenv').config();
}

const dbConnect = async() => {
    await mongoose.connect(process.env.DB_URL).then(
        () => {
            console.log('DB Connection Successful');
        }
    ).catch(
        (err) => {
            console.error(err);
            console.log('DATABASE CONNECTION ERROR');
        }
    )
};

module.exports = dbConnect;