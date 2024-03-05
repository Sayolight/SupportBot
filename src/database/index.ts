import { DataTypes, Sequelize } from "sequelize";
import { Messages } from "./models/messages";
import { Blacklist } from "./models/blacklist";
import { MyContext } from "../types";
import { NextFunction } from "grammy";

if (
  process.env.DB_NAME === undefined ||
  process.env.DB_USERNAME === undefined ||
  process.env.DB_PASSWORD === undefined ||
  process.env.DB_HOST === undefined
) {
  throw Error("No DB provided");
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    dialect: "mysql",
    logging: process.env.log === "debug",
  }
);

Messages.init(
  {
    original_id: DataTypes.BIGINT,
    support_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
  },
  {
    sequelize,
    tableName: "messages",
  }
);

Blacklist.init(
  {
    telegram_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "blacklist",
  }
);

export async function setup(): Promise<void> {
  await sequelize.sync();
}

export async function middleware(
  ctx: MyContext,
  next: NextFunction
): Promise<void> {
  ctx.db = {
    Messages: Messages,
    Blacklist: Blacklist,
  };

  return await next();
}
