import {  Model, DataTypes } from "sequelize";

export class Article extends Model {}

export function defineArticleModel(sequelize) {
  Article.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.BLOB,
      allowNull: true,
    }
    /*
     * Ah chave estrangeira será criada automaticamente pelo sequelize, 
     * quando o método defineModels for chamado.
     */
  }, {sequelize, modelName: 'Articles'});
}
