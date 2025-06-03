import UserErrorCode from "../../../domain/UserErrorCode.js";
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

        const user = await this.#userRepository.getByName(userEntity.getNickname);

        if(user == UserErrorCode.THERE_IS_NO_USER)
          return null;
        return user;
    }
}
