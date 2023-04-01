import { Composer } from "grammy";
import { MyContext } from "../types";

export const composer = new Composer<MyContext>();
const helpPrivate = composer.chatType("private");
helpPrivate.command(["start", "help"], async (ctx: MyContext) => {
  await ctx.reply(ctx.t("help.dm", { name: ctx?.from?.first_name ?? "User" }));
});

const helpGroup = composer.chatType(["group", "supergroup"]);
helpGroup.command(["start", "help"], async (ctx: MyContext) => {
  await ctx.reply(ctx.t("help.group"));
});
