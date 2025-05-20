import { Sequelize } from "sequelize";
import path from "path";
import sourcePath from "../../sourcePath.js";
import { User, defineUserModel } from "./models/User.js";
import { Role, defineRoleModel } from "./models/Role.js";
import { Auth, defineAuthModel } from "./models/Auth.js";

const sqlitePath = path.join(sourcePath(), '8bitsblog_database.db');

export default class DbContext {
  #sequelize;
  userModel;
  roleModel;
  authModel;

  async initiateContext() {
    try {
      this.#sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: sqlitePath
      });

      await this.#sequelize.authenticate();
      await this.#defineModels();
      await this.#syncModelWithTable();
    }catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async #defineModels() {
    if(this.#sequelize == null)
      throw "Cannot close with there is no connection";     
    
    defineUserModel(this.#sequelize);
    this.userModel = User;
    defineRoleModel(this.#sequelize);
    this.roleModel = Role;
    defineAuthModel(this.#sequelize);
    this.authModel = Auth;

    this.userModel.belongsToMany(this.roleModel, {through: this.authModel});
    this.roleModel.belongsToMany(this.userModel, {through: this.authModel}); 
  }

  async #syncModelWithTable() {
    if(this.#sequelize == null)
      return;
    
    try { 
      await this.#sequelize.sync({ force: false });
    } catch (err) {
      console.error(err);
    }
  }

  async closeConnection() {
    if(this.#sequelize == null)
      throw "Cannot close with there is no connection";     

    try {
      await this.#sequelize.close();
      console.log('Connection had been successfully closed');
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
