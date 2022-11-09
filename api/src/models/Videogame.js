const { DataTypes, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    'videogame',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      background_image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
