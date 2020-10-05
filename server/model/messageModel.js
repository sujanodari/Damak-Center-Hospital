var db = require ("../config/dbConfig.js");
var user=db.sequelize.define("message",{
    //attributes
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    dPhone:{
        type:db.Sequelize.BIGINT,
        allowNull:false
    },
    pPhone:{
        type:db.Sequelize.BIGINT,
        allowNull:false
    },
    message:{
        type:db.Sequelize.TEXT,
        allowNull:false
    }
    
},{
    freezeTableName:true,
    tablesName:"message"

});
user.sync({force:false})
.then(function(){

})
.catch(function(err){
    console.log(err);
});


module.exports=user;