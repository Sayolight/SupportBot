require('dotenv').config()
const { Telegraf } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const path = require("path");

const handlers = require('./handlers')
const middleware = require('./middlewares')

const bot = new Telegraf(process.env.BOT_TOKEN)
const i18n = new TelegrafI18n({
	directory: path.resolve(__dirname, 'locales'),
	defaultLanguage: 'en'
})

bot.context.db = require('./database');

bot.use(i18n.middleware())
bot.use(async (ctx, next) => {
	next().catch(async (error) => {
		await ctx.replyWithHTML(`Ошибка!\n\n<pre>${error}</pre>`)
	})
	return true
})

bot.start(handlers.Help)
bot.command('help', handlers.Help)
bot.command('ban', middleware.ReplyToQuestion, handlers.BanUser)
bot.command('pardon', middleware.ReplyToQuestion, handlers.PardonUser)
bot.on('message', handlers.MessageToSupport, middleware.ReplyToQuestion, handlers.MessageToUser)


bot.launch()
