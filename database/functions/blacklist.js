module.exports = {
	save: async function (db, user_id) {
		return await db.prepare(`INSERT INTO blacklist VALUES (@user_id)`)
			.run({user_id: user_id})
	},
	get: async function (db, user_id) {
		return await db.prepare(`SELECT user_id FROM blacklist WHERE user_id = ${user_id}`).get()
	},
	remove: async function (db, user_id) {
		return await db.prepare(`DELETE FROM blacklist WHERE user_id = ${user_id}`)
			.run({user_id: user_id})
	},
}
