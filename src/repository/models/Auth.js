import {  Model } from "sequelize";

export class Auth extends Model {}

export function defineAuthModel(sequelize) {
  Auth.init({},
    { 
    sequelize,
    modelName: 'Auth',
    /*
      Tabela intermediária entre User e Role
      Sequelize automaticamente gera as duas foreign keys roleId e useId
     */
  });
}
