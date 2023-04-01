import { BotError, GrammyError, HttpError } from "grammy";
import { MyContext } from "../types";
import { logger } from "../helpers/logger";

async function errorHandler(err: BotError<MyContext>): Promise<void> {
  const ctx: MyContext = err.ctx;
  logger.error(`[!] Update ${ctx.update.update_id} by ${ctx.from?.id} failed!`);
  const e = err.error;
  if (e instanceof BotError) {
    logger.error(`> BotError: ${e.ctx}`);
  } else if (e instanceof GrammyError) {
    logger.error(`> GrammyError: ${e.description}`);
  } else if (e instanceof HttpError) {
    logger.error(`> HttpError: ${e}`);
  } else {
    logger.error(`> Error: ${e}`);
  }

  await ctx.reply(ctx.t("error.unknown"));
}

export { errorHandler };
