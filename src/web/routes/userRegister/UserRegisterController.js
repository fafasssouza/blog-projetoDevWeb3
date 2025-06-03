import UserMapper from "./UserMapper.js";
import RoleMapper from "./RoleMapper.js";
import UserErrorCode from "../../../domain/UserErrorCode.js";

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
    if(userRes === UserErrorCode.THERE_IS_USER)
      return null;
    
    return userRes;
  } 
}
