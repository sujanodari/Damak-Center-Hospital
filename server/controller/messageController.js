var message = require("../model/messageModel.js");
  function getMessage(req,res,next){
            const usertoken = req.headers.authorization;
            const token = usertoken.split(' ');
            const decoded = jwt.verify(token[1], 'thisIsSecreatKey');
            var pPhone;
            var dPhone;
            if(req.body.type==='doctor'){
                pPhone=req.body.phone;
                dPhone=decoded.username
            }
            else{
                dPhone=req.body.phone;
                pPhone=decoded.username  
            }
            message.findAll({
                where:{pPhone:pPhone,
                dPhone:dPhone}
                })
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

            function setMessage(req,res,next){
                const usertoken = req.headers.authorization;
                const token = usertoken.split(' ');
                const decoded = jwt.verify(token[1], 'thisIsSecreatKey');
                var pPhone;
                var dPhone;
                if(req.body.type==='doctor'){
                    pPhone=req.body.phone;
                    dPhone=decoded.username
                }
                else{
                    dPhone=req.body.phone;
                    pPhone=decoded.username  
                }
               
                message.create({
                    pPhone:pPhone,
                    dPhone:dPhone,
                    message:req.body.message,
                })
                .then(function(result){
                res.status(201);
                res.json({
                    code:201,
                    status:"success",
                    messsage:"Message is send"
                });
                })
                .catch(function(err){
                    next(err);
                });

                }
            module.exports={getMessage,setMessage}