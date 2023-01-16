const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate:{
          min: 1,
          max: 5,
        }
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      },
      // country: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   allowNull: false,
      // },
    },
    { timestamps: false }
  );
};
