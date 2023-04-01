/* eslint-disable @typescript-eslint/no-floating-promises */
import bot from "./bot";
import { parseMode } from "@grammyjs/parse-mode";
import commands from "./helpers/bot-commands";
import middlewares from "./middlewares";
import handlers from "./handlers";
import { logger } from "./helpers/logger";
import { setup } from "./database";

middlewares.setup(bot);
handlers.setup(bot);
commands.setup(bot);

setup();

bot.api.config.use(parseMode("HTML"));

bot.start();

logger.info("bot started");
