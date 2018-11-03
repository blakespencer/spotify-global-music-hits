const Artist = require('./Artist');
const Song = require('./Song');
const Week = require('./Week');
const Country = require('./Country');
const Rank = require('./Rank');

Song.belongsTo(Artist);
Artist.hasMany(Song);

// Country.belongsToMany(Week, { through: 'countries_weeks' });
// Week.belongsToMany(Country, { through: 'countries_weeks' });

// Country.belongsToMany(Song, { through: 'songs_countries' });
// Song.belongsToMany(Country, { through: 'songs_countries' });

// Country.hasMany(Week);

Song.belongsToMany(Week, { through: Rank });
Week.belongsToMany(Song, { through: Rank });

Rank.belongsTo(Song);
Song.hasMany(Rank);
Rank.belongsTo(Week);
Week.hasMany(Rank);

module.exports = {
  Country,
  Song,
  Week,
  Artist,
  Rank,
};
