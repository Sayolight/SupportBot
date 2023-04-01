import { Composer } from "grammy";
import { MyContext } from "../types";
import { actionsMenu } from "../keyboards/userActions";
import bot from "../bot";

if (process.env.SUPPORT_CHAT_ID === undefined) {
  throw Error("No SUPPORT_CHAT_ID provided!");
}

export const composer = new Composer<MyContext>();
const messageToSupport = composer.chatType("private");
messageToSupport.use(actionsMenu);
messageToSupport.on(["message"], async (ctx: MyContext) => {
  if (await ctx.db.Blacklist.findOne({ where: { telegram_id: ctx.chat?.id } }))
    return;

  const support_message = await ctx.api.copyMessage(
    process.env.SUPPORT_CHAT_ID!,
    ctx.chat!.id,
    ctx.message!.message_id,
    { reply_markup: actionsMenu }
  );

  await ctx.db.Messages.create({
    original_id: ctx.message!.message_id,
    support_id: support_message.message_id,
    user_id: ctx.message!.chat.id,
  });
});

const messageToUser = composer.chatType(["group", "supergroup"]);
messageToUser.use(actionsMenu);
messageToUser.on(["message"], async (ctx: MyContext) => {
  if (ctx.message?.reply_to_message?.from?.id !== (await bot.api.getMe()).id)
    return;

  const original = await ctx.db.Messages.findOne({
    where: { support_id: ctx.message?.reply_to_message?.message_id },
  });

  if (!original) {
    return await ctx.reply(ctx.t("ban.not_found"));
  }

  await ctx.api.copyMessage(
    original.user_id,
    ctx.message.chat.id,
    ctx.message.message_id,
    {
      reply_to_message_id: original.original_id,
    }
  );
});
