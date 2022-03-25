const User = require('./User')
const Animal= require('./Animal')
const Type = require('./Type')
const Species= require('./Species')


User.hasMany(Animal,{
    foreignKey: 'user_id',
})
Animal.belongsTo(User, {
    foreignKey: 'user_id'
})
Species.hasMany(Animal, {
    foreignKey: 'species_name'
})
Type.hasMany(Species, {
    foreignKey: 'animal_type'
})
Type.hasMany(Animal, {
    foreignKey: 'animal_type'
})
Species.hasMany(Animal, {
    foreignKey: 'animal_species'
})


module.exports = { User, Animal, Type, Species };