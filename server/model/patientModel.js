var db = require ("../config/dbConfig.js");
var user=db.sequelize.define("report",{
    //attributes
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    pPhone:{
        type:db.Sequelize.BIGINT,
        allowNull:false
    },
    report:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    uplodedBY:{
        type:db.Sequelize.BIGINT,
        allowNull:false
    }
    
},{
    freezeTableName:true,
    tablesName:"report"

});
user.sync({force:false})
.then(function(){

})
.catch(function(err){
    console.log(err);
});


module.exports=user;