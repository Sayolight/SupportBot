import { Bot } from "grammy";
import { MyContext } from "../types";

import { composer as helpHandler } from "./help";
import { composer as banHandler } from "./ban";
import { composer as messageHandler } from "./message";
import { errorHandler } from "./error";

async function setup(bot: Bot<MyContext>): Promise<void> {
  bot.use(helpHandler);
  bot.use(banHandler);
  bot.use(messageHandler);

  bot.catch(errorHandler);
}

export default { setup };
