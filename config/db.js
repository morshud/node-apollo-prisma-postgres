const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://morshud:Gooday@23@localhost:5432/unagarage');

module.exports = sequelize;