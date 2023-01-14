const Sequelize = require('sequelize');
const db = require('../db/db')

const Cars = db.define('cars', {
  carName: {
    type: Sequelize.STRING,
  },
  ownedBy: {
    type: Sequelize.STRING,
  },
  carModel: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
  }
});


module.exports = Cars