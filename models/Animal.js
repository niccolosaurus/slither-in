const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
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
    type_name: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'type',
          key: 'name',
        },
    },
    species_name: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Species',
          key:'name',
        },
    },
    pattern: {
        type: DataTypes.STRING,
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
    modelName: 'animal',
  }
);

module.exports = Animal;