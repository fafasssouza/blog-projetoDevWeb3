import { randomUUID } from "crypto";

export default class Entity {
  #id;
  constructor() {
    this.#id = randomUUID();
  }  

  get getId() {
    return this.#id;
  }
}
