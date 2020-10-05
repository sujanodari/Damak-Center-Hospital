var patient = require("../model/patientModel.js");
  function setReport(req,res,next){
            const usertoken = req.headers.authorization;
            const token = usertoken.split(' ');
            const decoded = jwt.verify(token[1], 'thisIsSecreatKey');
            var uplodedBY;
            var pPhone;
            if(req.body.type==='doctor'){
                uplodedBY=decoded.username,
                pPhone=req.body.phone
            }
            else{
                uplodedBY=decoded.username,
                pPhone=decoded.username
            }
            patient.create({pPhone:pPhone,
                    uplodedBY:uplodedBY,
                    report:req.body.report
                }
                )
                .then(function(result){
                    res.status(201);
                    res.json({
                        code:201,
                        status:"success",
                        messsage:"Report is added"
                    });
                    })
                    .catch(function(err){
                        next(err);
                    });
            }   

            function getReport(req,res,next){
                const usertoken = req.headers.authorization;
                const token = usertoken.split(' ');
                const decoded = jwt.verify(token[1], 'thisIsSecreatKey');
                var pPhone;
                if(req.body.type==='patient'){
                    pPhone=decoded.username;
                }
                else{
                    pPhone=req.body.phone
                }
               
                patient.findAll({where:{
                    pPhone:pPhone}})
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
            module.exports={getReport,setReport}