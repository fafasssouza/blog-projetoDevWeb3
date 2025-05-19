import {  Model } from "sequelize";

export class Auth extends Model {}

export function defineAuthModel(sequelize) {
  Auth.init({},
    { 
    sequelize,
    modelName: 'Auth',
  });
}
