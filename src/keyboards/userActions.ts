import { Menu } from "@grammyjs/menu";
import { MyContext } from "../types";
import { Keyboard } from "grammy";

export const actionsMenu = new Menu<MyContext>("actionsMenu").text(
  async (ctx: MyContext) =>
    ctx.from?.first_name + " " + (ctx.from?.last_name ?? ""),
  async (ctx: MyContext) => {
    await ctx.reply(
      ctx.t("user.info", {
        userFullName: ctx.from?.first_name + " " + (ctx.from?.last_name ?? ""),
        username: ctx.from?.username ?? "-",
        userLanguage: ctx.from?.language_code ?? "-",
      })
    );
  }
);
