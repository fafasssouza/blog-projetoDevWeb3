export default class Password {
  #password;

  constructor(password) {
    this.#password = password;
  }

  passwordIsNull() {
    currentPassword = this.#password;

    if(currentPassword.trim() === "")
      return true;
    else 
      return false;
  }  
}
