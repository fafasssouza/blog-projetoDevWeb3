export default class UserRepository {
  #dbcontext;
  constructor(dbcontext) {
    this.#dbcontext = dbcontext;
  }

  async add(entity) {
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
      return 0;
    }catch (error) {
      throw new Error("Something happend in UserRepository: " + error);
    }finally {
     }
  }
  // Delete();
  // Update();
  // Get();
  // GetAll();
}
