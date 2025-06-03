import UserErrorCode from "../../domain/UserErrorCode.js";
import { Role } from "../../repository/models/Role.js";
 
export default class UserRepository {
  #dbcontext;
  constructor(dbcontext) {
    this.#dbcontext = dbcontext;
  }

  async add(entity, newRole) {
    try {
      await this.#dbcontext.initiateContext();

      const thereis = await this.#dbcontext.userModel.findOne({where: {username: entity.getNickname}});
      if(thereis) 
        return UserErrorCode.THERE_IS_USER;

      const newUser = this.#dbcontext.userModel.build({
        id: entity.getId,
        username:  entity.getNickname,
        password: entity.getPassword,
      });

      await newUser.save();
      
      await newUser.addRole(newRole, { through: { selfGranted: false } }); 
      return true;
    }catch (error) {
      throw new Error("Something happend in UserRepository: " + error);
    }
  }
  // Delete();
  // Update();
  async getByName(name) {
    try {
      await this.#dbcontext.initiateContext();

      const user = await this.#dbcontext.userModel.findOne({
        where: {username: name},
        include: Role});

      if(!user)
        return UserErrorCode.THERE_IS_NO_USER;

      const res = 
        {id: user.id,
        username: user.username, 
        password: user.password, 
        role: user.Roles[0].dataValues};

      return res;
    }catch (error) {
      throw new Error("Something happend in UserRepository: " + error);
    }
  }
  // GetAll();
}
