module.exports = async (ctx, next) => {
	if (ctx.chat.type !== 'private') return
	return next()
}
