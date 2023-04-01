import { Model } from "sequelize";
interface BlacklistAttributes {
  telegram_id: number;
}

export class Blacklist extends Model<BlacklistAttributes> {
  declare telegram_id: number;
}
