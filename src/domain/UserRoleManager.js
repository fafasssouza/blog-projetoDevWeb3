import Auth from "./Auth.js";

//Gerencia as relações entre usuários e papeis
export default class UserRolesManager{
  #user;
  #roles;
  #auth;


  constructor() {
    this.#roles = new Map()
    this.#auth = []; // Guarda a relação entre usuários e papeis;
  }
 

  addRole(role) {
    this.#roles.set(
      role.getId, 
      role);
  }

  authorize(uId, rId) {
    this.#auth.push(
      new Auth(uId, rId)
    );
  }

  userHasAuthorization(uId, r) {
    return this.#auth.some(auth => {
      const role = this.#roles.get(auth.roleId);
      return auth.userId === uId && role.getRoleNumber === r;
    }) 
  }
}
