import { Bot } from "grammy";
import { MyContext, MyApi } from "./types";

export default new Bot<MyContext, MyApi>(process.env.BOT_TOKEN ?? "");
