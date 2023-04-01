import { Bot } from "grammy";

import i18n from "./i18n";
import { logging } from "./logging";
import { ratelimiter } from "./ratelimiter";
import { MyContext } from "../types";
import { middleware as database } from "../database";

async function setup(bot: Bot<MyContext>): Promise<void> {
  bot.use(i18n);
  bot.use(logging);
  bot.use(database);
  bot.use(ratelimiter);
}

export default { setup };
