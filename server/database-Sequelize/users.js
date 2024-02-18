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
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  adress: {
   type: DataTypes.STRING,
   allowNull: false,
 },
 
   city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 })
};

module.exports=Users;