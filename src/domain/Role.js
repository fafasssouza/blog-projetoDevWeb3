import Entity from "./primitives/Entity";

const ROLE_ENUM = Object.freeze({
  ADMIN: 1,
  WRITE: 2,
  READ: 3,
  READ_WRITE: 4,
});

export default class Role extends Entity {
  #roleNumber;

  constructor(role) {
    super();
    this.#roleNumber = ROLE_ENUM[role];
  }

  get getRoleNumber() {
    return this.#roleNumber;
  }
}
