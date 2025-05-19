import { DataTypes, Model } from "sequelize";

export class Role extends Model {}

export function defineRoleModel(sequelize) {
  Role.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    role_Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    
  }, 
  {
    sequelize,
    modelName: 'Roles',
  });
}
