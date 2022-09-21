module.exports = async (ctx, next) => {
	if (ctx.chat.type !== 'private') return next()

	if (await ctx.db.Blacklist.findOne({where: {user_id: ctx.chat.id}})) return
	console.log(ctx)
	const support_message = await ctx.telegram.copyMessage
	(
		process.env.SUPPORT_CHAT_ID,
		ctx.chat.id,
		ctx.message.message_id,
		{
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: `${ctx.message.from.first_name} ${ctx.message.from.last_name ?
								ctx.message.from.last_name : ""}`,
							url: ctx.message.from.username ? `https://t.me/${ctx.message.from.username}`
								: "https://sayolight.tech/"
						}
					]
				]
			}
		}
	)

	await ctx.db.Messages.create
	(
		{
			original_id: ctx.message.message_id,
			support_id: support_message.message_id,
			user_id: ctx.message.chat.id
		}
	)
}
