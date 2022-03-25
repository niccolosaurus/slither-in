const sequelize = require('../config/connection');
const { User, Animal, Type, Species } = require('../models');

const userData = require('../seeds/userData.json');
const animalData = require('../seeds/animalData.json');
const typeData = require('../seeds/typeData.json');
const speciesData = require('../seeds/speciesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const types = await Type.bulkCreate(typeData, {
    individualHooks: true,
    returning: true,
  });

  const species = await Species.bulkCreate(speciesData, {
    individualHooks: true,
    returning: true,
  })

  for (const animal of animalData) {
    await Animal.create({
      ...animal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
