module.exports = db => {
	db.prepare(
		`CREATE TABLE IF NOT EXISTS blacklist (
		user_id INTEGER UNIQUE
		)`
	).run()
}
