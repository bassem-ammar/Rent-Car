const Product =(connection,DataTypes)=>{
    return connection.define("allcars", {
      Model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rent_per_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mark:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      doors:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      transmission:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      fuel:{
        type: DataTypes.STRING,
        allowNull: true,
      },
  })};
module.exports=Product;
