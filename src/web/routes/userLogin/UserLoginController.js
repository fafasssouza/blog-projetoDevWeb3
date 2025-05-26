import UserMapper from "../userRegister/UserMapper.js";

export default class UserLoginController {
  #userRepository;


  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  //Post para recuperar o login
  async handleRequest(model) {
        const userMapper = new UserMapper();
        const {username, password} = model;

        const userEntity = userMapper.mapModelToEntity(username, password);

        const user = await this.#userRepository.get(userEntity);

        return user;
    }
}