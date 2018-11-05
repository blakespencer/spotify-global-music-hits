const Sequelize = require('sequelize');
const db = require('../db');

const Stream = db.define('stream', {
  rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  streams: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  songId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weekId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  countryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Stream;
