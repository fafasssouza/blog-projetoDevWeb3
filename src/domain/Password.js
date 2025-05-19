import bcrypt from "bcrypt";

export default class Password {
  password;

  constructor(p) {
    this.password = this.#hashPassword(p);
  }
  get getPassoword() {
    return this.password;
  }

  static passwordIsNull(currentPassword) {
    if(currentPassword.trim() === "")
      return true;
    else 
      return false;
  }  

  #hashPassword(p) {
    const saltRounds = 10;
    const salt =  bcrypt.genSaltSync(saltRounds);

    //Tive que passar p como uma template string pq eu acho que por ser fracamente tipado a função hashSync não sabe oque estamos passando
    return  bcrypt.hashSync(`${p}`, salt); 
  }
 }
