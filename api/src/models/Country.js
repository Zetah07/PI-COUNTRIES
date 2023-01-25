const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
    }
  }, { timestamps: false });
};


//pdta: como hay paises que vienen con caracteres japoneses, hace que falle la consola de SQL shell,
//SET client_encoding TO 'UTF8';
//soluciona el error.