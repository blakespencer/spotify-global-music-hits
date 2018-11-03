const Sequelize = require('sequelize');
const db = require('../db');

const Rank = db.define('rank', {
  rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  streams: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Rank;
