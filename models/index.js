const User = require('./User')
const Animal= require('./Animal')

User.hasMany(Animal,{
    foreignKey: 'user_id',
})
Animal.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports(User, Animal)