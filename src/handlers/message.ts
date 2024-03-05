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
    if (
        await ctx.db.Blacklist.findOne({ where: { telegram_id: ctx.chat?.id } })
    ) {
        return;
    }

    const support_message = await ctx.copyMessage(
        process.env.SUPPORT_CHAT_ID!,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: `${ctx.message?.from.first_name} ${
                                ctx.message?.from.last_name ?? ""
                            }`,
                            url: ctx.message?.from.username
                                ? `https://t.me/${ctx.message?.from.username}`
                                : "https://t.me/artsayo",
                        },
                    ],
                ],
            },
        }
    );
    await ctx.db.Messages.create({
        original_id: ctx.message!.message_id,
        support_id: support_message.message_id,
        user_id: ctx.message!.chat.id,
    });

    await ctx.react("💯");
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
        return await ctx.reply(ctx.t("error.not_found"));
    }

    try {
        await ctx.copyMessage(original.user_id, {
            reply_parameters: { message_id: original.original_id },
        });
    } catch (e) {
        await ctx.reply(ctx.t("error.blocked"));
    }
});
