const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db')

const User = db.define('user', {
    // Model attributes are defined here
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  

module.exports = User;