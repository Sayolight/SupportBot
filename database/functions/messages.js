module.exports = {
	save: async function (db, original_id, support_id, user_id) {
		return await db.prepare(`INSERT INTO messages VALUES (@original_id, @support_id, @user_id)`)
			.run({original_id: original_id, support_id: support_id, user_id: user_id})
	},
	get: async function (db, support_id) {
		return await db.prepare(`SELECT original_id, user_id FROM messages WHERE support_id = ${support_id}`).get()
	}
}
