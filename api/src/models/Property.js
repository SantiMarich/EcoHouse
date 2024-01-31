const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Property = sequelize.define(
    "agent",
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
  return Property;
};
