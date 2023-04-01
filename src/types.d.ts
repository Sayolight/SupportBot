import { Api, Context } from "grammy";
import { I18nFlavor } from "@grammyjs/i18n";

import { ModelStatic } from "sequelize";
import { Messages } from "./database/models/messages";
import { Blacklist } from "./database/models/blacklist";

interface DbFlavor {
  db: {
    Messages: ModelStatic<Messages>;
    Blacklist: ModelStatic<Blacklist>;
  };
}

type MyContext = Context & I18nFlavor & DbFlavor;
type MyApi = Api;
export { MyContext, MyApi };
