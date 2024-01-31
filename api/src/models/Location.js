const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Location = sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Location;
};
