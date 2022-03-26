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
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
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
    species: {
      type: DataTypes.TEXT,
      defaultValue: JSON.stringify({
        "Lizard": [ "Bearded Dragon", "Leopard Gecko", "Skink", "Crested Gecko"],
        "Snake": [ "Ball Python", "Boa Constrictor","Kingsnake", "Hognose Snake", "Reticulated Python"],
        "Turtle": ["Spurred Tortoise", "Leopard Tortoise", "Greek Tortoise", "Red-Footed Tortoise"]
      })
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: JSON.stringify({ "Lizard" : "Bearded Dragon"}, {"Lizard" : "Leopard Gecko"}, {"Lizard" : "Skink"}, {"Lizard" : "Created Gecko"}, {"Snake" : "Ball Python"},{"Snake" : "Boa Constrictor"}, {"Snake" : "Kingsnake"}, {"Snake" : "Hognose Snake"}, {"Snake" : "Reticulated Python"}, {"Turtle" : "Spurred Tortoise"}, {"Turtle" : "Leopard Tortoise"}, {"Turtle" : "Greek Tortoise"},{"Turtle" : "Red-Footed Tortoise"})
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