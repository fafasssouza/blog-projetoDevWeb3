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
      if(thereis != null) {
        console.log(thereis);
        return -1;
      }

      const newUser = this.#dbcontext.userModel.build({
        id: entity.getId,
        username:  entity.getNickname,
        password: entity.getPassword,
      });

      await newUser.save();
      
      await newUser.addRole(newRole, { through: { selfGranted: false } }); 
      return 0;
    }catch (error) {
      throw new Error("Something happend in UserRepository: " + error);
    }
  }
  // Delete();
  // Update();
  async get(entity) {
    try {
      await this.#dbcontext.initiateContext();

      const user = await this.#dbcontext.userModel.findOne({
        where: {username: entity.getNickname},
        include: Role});

      const res = 
        {username: user.username, 
        password: user.password, 
        role: user.Roles[0].dataValues};

      return res;
    }catch (error) {
      throw new Error("Something happend in UserRepository: " + error);
    }
  }
  // GetAll();
}
