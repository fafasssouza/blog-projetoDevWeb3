import Entity from "./primitives/Entity";

export default class Auth extends Entity {
  roleId;
  userId;

  constructor(uId, rId) {
    super();

    this.userId = uId;
    this.roleId = rId;
  }
}
