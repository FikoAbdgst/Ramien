const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('rameon', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize  