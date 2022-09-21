module.exports = async ctx => {
	const original = await ctx.db.Messages.findOne
	(
		{where: {support_id: ctx.message.reply_to_message.message_id}}
	)

	await ctx.db.Blacklist.destroy(
		{where: {user_id: original.user_id}}
	)

	await ctx.reply(ctx.i18n.t('pardon_user'))
}
