const Sequelize = require('sequelize');
const db = require('../db');

const Artist = db.define('artist', {
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Artist;
