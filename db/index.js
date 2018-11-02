const db = require('./db');
require('./models');

db.sync({ force: true });

module.exports = db;
