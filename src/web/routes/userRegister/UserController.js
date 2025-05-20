import UserMapper from "./UserMapper.js";

export default class UserController {
  #userRepository;

  constructor(userContext) {
    this.#userRepository = userContext;
  }

  async handleRequest(model) {
    const mapper = new UserMapper();
    const {username, password} = model;

    const entity = mapper.mapModelToEntity(username, password);
    const result = await this.#userRepository.add(entity);
    return result;
  } 
}
