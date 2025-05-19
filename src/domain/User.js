import Nickname from "./Nickname";
import Password from "./Password";
import Entity from "./primitives/Entity";

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
