const db = require("../database");
module.exports = async (ctx, next) => {
	if (ctx.chat.type !== 'private') return next()
	if (await db.Blacklist.get(db.Database, ctx.chat.id)) return
	const support_message = await ctx.telegram.forwardMessage
	(
		process.env.SUPPORT_CHAT_ID,
		ctx.chat.id,
		ctx.message.message_id
	)

	await db.Messages.save
	(
		db.Database,
		ctx.message.message_id,
		support_message.message_id,
		ctx.message.chat.id
	)
}
