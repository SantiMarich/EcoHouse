const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Location = sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
