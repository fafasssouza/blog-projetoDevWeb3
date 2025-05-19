import bcrypt from "bcrypt";

export default class Password {
  password;

  constructor(password) { 
    this.password = password; 
  }

  get getPassoword() {
    return this.password.password;
  }

  static passwordIsNull(currentPassword) {
    if(currentPassword.trim() === "")
      return true;
    else 
      return false;
  }  

  hashPassword() {
    const saltRounds = 10;
    const salt =  bcrypt.genSaltSync(saltRounds);

    return  bcrypt.hashSync(this.password, salt);
  }
 }
