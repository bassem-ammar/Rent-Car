const Users =(connection,DataTypes)=>{
    return connection.define("users", {
   first_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   user_phOrEmail: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_password: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
 })
};

module.exports=Users;