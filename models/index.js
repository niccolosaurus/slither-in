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
    foreignKey: 'species_id'
})
Type.hasMany(Species, {
    foreignKey: 'type_id'
})




module.exports = { User, Animal, Type, Species };