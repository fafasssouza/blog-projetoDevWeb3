export default class RoleRepository {
    #dbcontext;
    constructor(dbcontext) {
      this.#dbcontext = dbcontext;
    }
  
    async add(entity) {
      try {
        await this.#dbcontext.initiateContext();
  
        const thereis = await this.#dbcontext.roleModel.findOne({where: {id: entity.getId}});
        if(thereis != null) {
          console.log(thereis);
          return -1;
        }

        console.log(entity.getRoleNumber);
  
        const newRole = this.#dbcontext.roleModel.build({
          id: entity.getId,
          role_Number: entity.getRoleNumber,
        });
  
        await newRole.save(); 
        return [0, newRole];
      }catch (error) {
        throw new Error("Something happend in RoleRepository: " + error);
      }
    }
    // Delete();
    // Update();
    // Get();
    // GetAll();
  }
  