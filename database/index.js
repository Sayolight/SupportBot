const Sequelize = require('sequelize');

const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'sayo_support.sqlite',
});

module.exports = {
	Blacklist: require('./models/Blacklist')(sequelize),
	Messages: require('./models/Messages')(sequelize),
}

module.exports.Blacklist.sync();
module.exports.Messages.sync();
