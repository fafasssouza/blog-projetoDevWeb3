import Nickname from "../../../domain/Nickname.js";
import Password from "../../../domain/Password.js";
import User from "../../../domain/User.js";

export default class UserMapper{
  mapModelToEntity(username, password, role = 2) {
    // if(Nickname.nameIsNull(username))
    //   throw new Error("Nome inválido");
    const nickname = new Nickname(username);

    // if(Password.passwordIsNull(password))
    //   throw new Error("Senha inválida");
    const hashedPassword = new Password(password);

    return new User(nickname, hashedPassword);
  } 

  mapEntityToModel(entity) {
  } 
}
