const Sequelize = require("sequelize");

module.exports = (sequelize) => {
	return sequelize.define('messages', {
		original_id: {
			type: Sequelize.BIGINT,
			unique: true,
			allowNull: false,
		},
		support_id: {
			type: Sequelize.BIGINT,
			unique: true,
			allowNull: false,
		},
		user_id: {
			type: Sequelize.BIGINT,
			unique: false,
			allowNull: false,
		},
	})
}
