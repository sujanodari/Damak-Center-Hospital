var db = require ("../config/dbConfig.js");
var user=db.sequelize.define("member",{
    //attributes
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    username:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    gender:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    phone:{
        type:db.Sequelize.BIGINT,
        allowNull:false
    },
    email:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    address:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    password:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    age:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    type:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    profileImage:{
        type:db.Sequelize.TEXT,
        allowNull:true
    }
    
},{
    freezeTableName:true,
    tablesName:"member"

});
user.sync({force:false})
.then(function(){

})
.catch(function(err){
    console.log(err);
});


module.exports=user;