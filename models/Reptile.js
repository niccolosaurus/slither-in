const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reptile extends Model {}

Reptile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
        type: DataType.STRING,
        allowNull: false,
    },
    species: {
        type: DataType.STRING,
        allowNull: false,
    },
    pattern: {
        type: DataType.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gravid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, 
    },
    forSale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deceased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reptile',
  }
);

module.exports = Reptile;
