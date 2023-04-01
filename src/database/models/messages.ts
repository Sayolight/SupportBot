import { Model } from "sequelize";
interface MessagesAttributes {
  original_id: number;
  support_id: number;
  user_id: number;
}

export class Messages extends Model<MessagesAttributes> {
  declare original_id: number;
  declare support_id: number;
  declare user_id: number;
}
