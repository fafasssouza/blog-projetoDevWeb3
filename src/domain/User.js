import Nickname from "./Nickname.js";
import Password from "./Password.js";
import Entity from "./primitives/Entity.js";

export default class User extends Entity {
  #nickname;
  #password;
  constructor(username, password) {
    super();

    this.#nickname = new Nickname(username);
    this.#password = new Password(password);
  }  

  get getNickname() {
    return this.#nickname.getUsername;
  }

  get getPassword() {
    return this.#password.getPassoword;
  }
}
