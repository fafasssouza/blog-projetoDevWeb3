import Role from "../../../domain/Role.js"

export default class RoleMapper {
    mapModelToEntity(roleNumber) {
        const newRole = new Role(roleNumber);
        return newRole;
    }

    mapEntityToModel() {

    }
}
