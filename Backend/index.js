const version = '0.1';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());  // Enables CORS

if(!process.env.NODE_ENV){
    require('dotenv').config();
}

app.use(express.json());

const router = require('./Routes/Routes');

app.use(`/api/v${version}`,router);

const dbConnect = require('./Config/dbConnect');

dbConnect();

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log('Server Started at PORT '+PORT);
});

