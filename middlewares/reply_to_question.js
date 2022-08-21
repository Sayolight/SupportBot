module.exports = async (ctx, next) => {
	if (ctx.chat.id !== process.env.SUPPORT_CHAT_ID*1) return
	if (!ctx.message.reply_to_message) return
	if (ctx.message.reply_to_message.from.id !== (await ctx.telegram.getMe()).id) return
	return next()
}
