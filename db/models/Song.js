const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Song;
