module.exports = async ctx => {
	const message = await ctx.db.Messages.findOne({where: {support_id: ctx.message.reply_to_message.message_id}})
	await ctx.db.Blacklist.create({user_id: message.user_id})

	await ctx.reply(ctx.i18n.t('ban_user'))
}
