const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Agent = sequelize.define(
    "agent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Establece un valor predeterminado UUID utilizando UUIDV4
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Agent;
};
