const db = require("../database");
module.exports = async ctx => {
	const original = await db.Messages.get
	(
		db.Database,
		ctx.message.reply_to_message.message_id
	)

	await db.Blacklist.remove(
		db.Database,
		original.user_id
	)

	await ctx.reply(ctx.i18n.t('pardon_user'))
}
