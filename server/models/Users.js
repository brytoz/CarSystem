const Sequelize = require('sequelize');
const db = require('../db/db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  fullname: {
    type: Sequelize.STRING,
    unique: true
  },
  phone: {
    type: Sequelize.BIGINT,
    unique: true
  },
  nin: {
    type: Sequelize.BIGINT,
  }, 
  password: {
    type: Sequelize.STRING,
  }
});


module.exports = User