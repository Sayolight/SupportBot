const db = require("../database");
module.exports = async ctx => {
	const original = await db.Messages.get
	(
		db.Database,
		ctx.message.reply_to_message.message_id
	)

	try {
		await db.Blacklist.save(
			db.Database,
			original.user_id
		)
	} catch (e) {
		if (e.code === "SQLITE_CONSTRAINT_UNIQUE") return ctx.reply(ctx.i18n.t('ban_user_already'));
	}

	await ctx.reply(ctx.i18n.t('ban_user'))
}
