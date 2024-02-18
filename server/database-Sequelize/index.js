const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.js')

const connection = new Sequelize(config.database,config.user,config.password,{
    host: "127.0.0.1",
    dialect: "mysql",
    logging:false
  }
)
const car_rent={}
car_rent.connection=connection
car_rent.Sequelize=Sequelize
car_rent.Users = require ('./users.js')(connection,DataTypes)
car_rent.allcars = require ('./allcars.js')(connection,DataTypes)
car_rent.orders= connection.define('orders',{ 
 send:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue:false
}
,
pick_up: {
  type: DataTypes.DATE,
  allowNull: false,
},
drop_of: {
  type: DataTypes.DATE,
  allowNull: false,
},
})
car_rent.Favorite= connection.define('favorite',{},{timestamps:false})

car_rent.Users.belongsToMany(car_rent.allcars ,{ through: 'orders' })
car_rent.allcars.belongsToMany(car_rent.Users ,{ through: 'orders' })
car_rent.Users.belongsToMany(car_rent.allcars ,{ through: 'favorite' })
car_rent.allcars.belongsToMany(car_rent.Users ,{ through: 'favorite' })
car_rent.connection.authenticate()
car_rent.connection.sync({ force: false })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=car_rent
