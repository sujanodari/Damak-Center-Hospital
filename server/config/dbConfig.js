require("dotenv").config();
var Sequelize = require("sequelize");
//using dot env for database credintals
var sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
	host: process.env.DB_HOST,
    dialect: "mysql",
    logging:false
});

sequelize.authenticate().then(
	function(){
//authenticate
})
.catch(
	function(err){
		next(err);
});

module.exports={
    Sequelize,sequelize
}
