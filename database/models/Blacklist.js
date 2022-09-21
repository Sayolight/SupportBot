const Sequelize = require("sequelize");

module.exports = (sequelize) => {
	return sequelize.define('blacklist', {
		user_id: {
			type: Sequelize.BIGINT,
			unique: true,
			allowNull: false,
		},
	})
}
