module.exports = async ctx => {
	await ctx.replyWithHTML(ctx.i18n.t('help', {name: ctx.message.from.first_name}))
}
