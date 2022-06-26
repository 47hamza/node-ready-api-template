//--------------- Import ---------------
const express = require('express');
const server=express();
const bodyParser=require('body-parser');
const jsonParser=bodyParser.json;
const cors=require('cors')
const fileUpload=require('express-fileupload');

//--------------- Configure Env ---------------
require('dotenv').config();

//--------------- Middelware ---------------
server.use(express.static('public')) // set public directory
server.use('/images', express.static('public/assets/upload/ordered_tiles')); // route for accessing images
server.use(bodyParser.json({ limit: '50mb' })); // setting Request size
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // setting Request size
server.use(express.json());
// server.use(cors()) // allow cors
server.use(cors({    // allow cors from any region
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
}))
server.use(fileUpload({
    useTempFiles: false,
    tempFileDir: 'public'
}))

//--------------- Controller ---------------
const userController = require('./controllers/user');

//--------------- Database Connect, Authenticate & Sync Tables ---------------
require('./connection/authenticate_and_sync');




// User Routes
server.use(userController);




//--------------- PORT Setting ---------------
server.listen(process.env.PORT, console.log("Running at PORT: "+process.env.PORT));




