import Entity from "./primitives/Entity.js";

export default class Auth extends Entity {
  roleId;
  userId;

  constructor(uId, rId) {
    super();

    this.userId = uId;
    this.roleId = rId;
  }
}
