const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config');

const connection = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
  port: config.port,
  logging: false
});

const car_rent = {};
car_rent.connection = connection;
car_rent.Sequelize = Sequelize;
car_rent.users = require('./users')(connection, DataTypes);
car_rent.allcars = require('./allcars')(connection, DataTypes);

car_rent.orders = connection.define('orders', {
  send: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  pickTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dropTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

car_rent.Favorite = connection.define('favorite', {}, { timestamps: false });
car_rent.orders.belongsTo(car_rent.users);

async function initializeDatabase() {
  try {
    await connection.authenticate();
    console.log('Database connection has been established successfully.');
    await connection.sync({ force: false, alter: true });
    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Unable to create table:', error);
  }
}

initializeDatabase();

module.exports = car_rent;
