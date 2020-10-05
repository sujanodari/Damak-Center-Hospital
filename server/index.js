
"use strict";
const http = require('http');
const socket = require('./lib/socket');
var express = require("express");
var bodyParser = require("body-parser");
var userController = require("./controller/userController.js");
var messageController = require("./controller/messageController.js");
var patientController = require("./controller/patientController.js");
var cors = require("cors");
// const morgan=require("morgan");
const config = require('../config.js');
var app = express();
app.use(cors());
// app.use(morgan("tiny"));
const server = http.createServer(app);
app.use(bodyParser.json('application/json'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


app.post("/api/v1/users/signin",userController.loginValidator,userController.chkLogin,userController.jwtTokenGen,userController.login);
app.post('/api/v1/users/signup',userController.registrationValidation,userController.hashPassword,userController.registerUser);
app.get("/api/v1/me",userController.verifyToken,userController.getUser);
app.get("/api/v1/user",userController.verifyToken,userController.getUserByPhone);
app.get("/api/v1/doctor",userController.verifyToken,userController.getAllDoctor);
app.get("/api/v1/patient",userController.verifyToken,userController.getAllPatient);


app.post("/api/v1/message",userController.verifyToken,messageController.setMessage);
app.get("/api/v1/message",userController.verifyToken,messageController.getMessage);

app.post("/api/v1/report",userController.verifyToken,patientController.setReport);
app.get("/api/v1/report",userController.verifyToken,patientController.getReport);




app.use(function(err,req,res,next){
    res.status(500);
    res.json({
    status:500,
    message:err.message
    });
  
    });

    app.use(express.static(__dirname+ "/public"))

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});

module.exports = app
