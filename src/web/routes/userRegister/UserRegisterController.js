import UserMapper from "./UserMapper.js";
import RoleMapper from "./RoleMapper.js";

export default class UserController {
  #userRepository;
  #roleRepository;

  constructor(userRepository, roleRepository) {
    this.#userRepository = userRepository;
    this.#roleRepository = roleRepository;
  }

  async handleRequest(model) {
    const userMapper = new UserMapper();
    const roleMapper = new RoleMapper();
    const {username, password, role} = model;

    const roleEntity = roleMapper.mapModelToEntity(role);
    const userEntity = userMapper.mapModelToEntity(username, password);
    const [roleRes, newRole] = await this.#roleRepository.add(roleEntity);

    const userRes = await this.#userRepository.add(userEntity, newRole);
    

    
    //Depende do resultado da soma de userRes + roleRes
    //Cada uma retorna um valor (ou -1 ou 0) 0 significa q foi sucesso -1 significa proibido 
    let result = userRes + roleRes;
    switch(result) {
      case -2, -1:
        return -1;
      default:
        return 0;
    }
  } 
}
