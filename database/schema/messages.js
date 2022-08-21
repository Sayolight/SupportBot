module.exports = db => {
	db.prepare(
		`CREATE TABLE IF NOT EXISTS messages (
		original_id 	INTEGER,
		support_id 		INTEGER,
		user_id 		INTEGER
		)`
	).run()
}
