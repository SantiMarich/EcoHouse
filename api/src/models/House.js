const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const House = sequelize.define(
    "house",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      imagePortada: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bedrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bathrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surface: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      moneda: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      monedatext: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transaction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return House;
};
