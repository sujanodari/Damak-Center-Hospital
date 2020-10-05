var user = require("../model/userModel.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
function loginValidator(req,res,next){
    if(req.body.phone===null){
        res.send("Phone Number cannot be null");
    }
    if(req.body.password===null){
        res.send("password cannot be null");
    }
    user.findOne({
        where:{phone:req.body.phone}
    })
    .then(function(result){
        if(result===null){
            res.status(204);
            res.json({
            status:"Unsuccessfull",
            code:"204",
            message:"You have not registered, please register first"}); 
        }
        else{
            //console.log(result);
            req.passwordFromDB=result.dataValues.password;
            req.type=result.dataValues.type;
            next();
        }
    }).catch(function(err){
        next(err);
    });
}

function chkLogin(req,res,next){
    if(req.passwordFromDB){
        const isMatchPassword = bcrypt.compareSync(req.body.password, req.passwordFromDB);
        if (isMatchPassword) {
            next();  
        }
        else{
            res.status(401);
            res.json({
                status:"Password doesnot match",
                code:"401"
                    });  
        }
    } else{
         res.status(401);
        res.json({
            status:"Unsuccessfull",
            code:"401",
        });
    }

}

function jwtTokenGen(req,res,next){
    var payloadd={
        username:req.body.phone,
        userlevel:"superadmin"
    }

jwt.sign(payloadd,"thisIsSecreatKey",{expiresIn:"10h"},
function(err,resultToken){
    req.token=resultToken;
    next();
});
}



function login(req,res,next){
   // console.log(req.token);
    if(req.token !== null){
        
res.status(202);
    res.json({
        status:"Success",
        type:req.type,
        token:req.token});
    }
}

function registrationValidation(req,res,next){
   
    if(req.body.username === null)
    {
        res.send("Username cannot be empty");
    }
    if(req.body.profileImage === null)
    {
        res.send("Image cannot be empty");
    }
    if(req.body.password === null)
    {
        res.send("Password cannot be empty");
    }
    if(req.body.type === null)
    {
        res.send("Type cannot be empty");
    }
    if(req.body.gender === null)
    {
        res.send("Gender cannot be empty");
    }
    if(req.body.cPassword === null)
    {
        res.send("Please comform password");
    }
    if(req.body.address === null)
    {
        res.send("Address cannot be empty");
    }
    if(req.body.age === null)
    {
        res.send("age cannot be empty");
    }
    if(req.body.phone === null)
    {
        res.send("PhoneNumber cannot be empty");
    }
    if(req.body.email === null)
    {
        res.send("Email cannot be empty");
    }
    user.findOne({
    where:{phone:req.body.phone}
    })
    .then(function(result){
    if(result=== null){
        next();
    }
    else{
        res.status(409);
        res.json({
            code:409,
            status:"error",
            message:"User already exist"
        });
    }
    
    })
    .catch(function(err){
        console.log(err);
    });
    }
    
    function hashPassword(req,res,next){
        const saltRounds = 10;
        bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
            // Store hash in your password DB.
            req.hashedPassword=hash;
            next();
        }).catch(function(err){
            next("Hassing error");
        });
    }

    function registerUser(req,res,next){
        user.create({
            username:req.body.username,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            gender:req.body.gender,
            type:req.body.type,
            age:req.body.age,
            password:req.hashedPassword,
            profileImage:req.body.profileImage
        })
        .then(function(result){
        res.status(201);
        res.json({
            code:201,
            status:"success",
            messsage:"User is Registered"
        });
        })
        .catch(function(err){
            next(err);
        });
        }


       

        function verifyToken(req,res,next){
            token=req.headers.authorization;
            if(token===null||undefined){
                res.json({status:400,message:'Token is not Provided'});
                return  res.status(400);
            }
            if (token.startsWith('Bearer ')) {
               // Remove Bearer from string
          token = token.slice(7, token.length).trimLeft();
        } 
        if (token) {
            jwt.verify(token,'thisIsSecreatKey',function(err,result){
        
                if (err) {
                    res.status(403);
                    res.json({
                        code:403,
                        status:"unauthorized",
                        message: 'Token is not authorized'
                      });
                    res.status(403);
                    
                  } else {
                    req.result = result;
                    next();
                  }    
            });
            
         } 
        }

        function getUser(req,res,next){
            const usertoken = req.headers.authorization;
            const token = usertoken.split(' ');
            const decoded = jwt.verify(token[1], 'thisIsSecreatKey');
            user.findOne({
                where:{phone:decoded.username}
                })
                .then(function(result){
                if(result=== null){
                    next(err);
                }
                else{
                    res.status(200);
                    res.json({
                        code:200,
                        status:"success",
                        username:result.dataValues.username,
                        phone:result.dataValues.phone,
                        address:result.dataValues.address,
                        email:result.dataValues.email,
                        gender:result.dataValues.gender,
                        profileImage:result.dataValues.profileImage,
                        type:result.dataValues.type
                    });
                }  
                })
                .catch(function(err){
                    console.log(err);
                });
            }


            function getAllDoctor(req,res,next){
                user.findAll({where:{type:'doctor'}})
                    .then(function(result){
                    if(result=== null){
                        next(err);
                    }
                    else{
                        res.status(200);
                        res.json(result);
                    }  
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                }

                function getAllPatient(req,res,next){
                    user.findAll({where:{type:'patient'}})
                        .then(function(result){
                        if(result=== null){
                            next(err);
                        }
                        else{
                            res.status(200);
                            res.json(result);
                        }  
                        })
                        .catch(function(err){
                            console.log(err);
                        });
                    }



                    function getUserByPhone(req,res,next){
                        user.findOnel({where:{phone:req.body.phone}})
                            .then(function(result){
                            if(result=== null){
                                next(err);
                            }
                            else{
                                res.status(200);
                                res.json(result);
                            }  
                            })
                            .catch(function(err){
                                console.log(err);
                            });
                        }
        module.exports={loginValidator,
            chkLogin,jwtTokenGen,login,registerUser,registrationValidation,hashPassword,verifyToken,getUser,getAllDoctor,getAllPatient,getUserByPhone};

