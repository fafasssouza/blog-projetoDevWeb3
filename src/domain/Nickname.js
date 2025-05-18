export default class Nickname{
  #username;

  constructor(username) {
    this.#username = username;
  }

  get getNickname() {
    return this.#username;
  }

  nameIsNull() {
    currentName = this.#username;

    if(currentName.trim() === "")
      return true;
    else 
      return false;
  }
}
