export default class Nickname{
  username;

  constructor(username) {
    this.username = username;
  }

  get getUsername() {
    return this.username.username;
  }
   static nameIsNull() {
    let currentName = this.username;

    if(currentName.trim() === "")
      return true;
    else 
      return false;
  }
}
