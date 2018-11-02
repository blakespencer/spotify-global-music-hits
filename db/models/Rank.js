const Sequelize = require('sequelize');
const db = require('../db');

const Rank = db.define('rank', {
  rank: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  streams: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Rank;
