module.exports = async ctx => {

	const original = await ctx.db.Messages.findOne
	(
		{where: {support_id: ctx.message.reply_to_message.message_id}}
	)


	await ctx.telegram.copyMessage
	(
		original.user_id,
		ctx.message.chat.id,
		ctx.message.message_id,
		{
			reply_to_message_id: original.original_id
		}
	)

}
