const Artist = require('./Artist');
const Song = require('./Song');
const Week = require('./Week');
const Country = require('./Country');
const Rank = require('./Rank');

Song.belongsTo(Artist);
Artist.hasMany(Song);

Country.belongsToMany(Rank, { through: 'countries_weeks' });
Week.belongsToMany(Country, { through: 'countries_weeks' });
// Country.hasMany(Week);

Song.belongsToMany(Week, { through: Rank });
Week.belongsToMany(Song, { through: Rank });
// Drink.belongsToMany(Category, { through: CategoryDrink });
// Category.belongsToMany(Drink, { through: CategoryDrink });

// Order.belongsTo(User);
// User.hasMany(Order);

// User.belongsTo(Address);
// Address.hasMany(User);

// Order.belongsTo(Address);
// Address.hasMany(Order);

// Drink.belongsToMany(Order, { through: Item });
// Order.belongsToMany(Drink, { through: Item });

module.exports = {
  Country,
  Song,
  Week,
  Artist,
  Rank,
};
