import { DataTypes, Model } from "sequelize";

export class User extends Model {}

export function defineUserModel(sequelize) {
  User.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    }
  }, 
  {
    sequelize,
    modelName: 'Users',
  });
}
