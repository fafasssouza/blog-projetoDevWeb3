import { Sequelize } from "sequelize";
import path from "path";
import sourcePath from "../../sourcePath";
import { User, defineUserModel } from "./models/User";
import { Role, defineRoleModel } from "./models/Role";
import { Auth, defineAuthModel } from "./models/Auth";

const sqlitePath = path.join(sourcePath(), '8bitsblog_database.db');

export default class DbContext {
  #sequelize;
  userModel = User;
  roleModel = Role;
  authModel = Auth;

  async authenticateSequelize() {
    try {
      this.#sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: sqlitePath
      });

      await this.#sequelize.authenticate();
 
      console.log('Connection has been established successfully.');
    }catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async defineModels() {
    if(this.#sequelize == null)
      throw "Cannot close with there is no connection";     
    
    defineUserModel(this.#sequelize);
    defineRoleModel(this.#sequelize);
    defineAuthModel(this.#sequelize);

    this.userModel.belongsToMany(this.roleModel, {through: this.authModel});
    this.roleModel.belongsToMany(this.userModel, {through: this.authModel}); 
  }

  async syncModelWithTable() {
    if(this.#sequelize == null)
      return;
    
    try {
      await this.#sequelize.sync({ force: true });
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
