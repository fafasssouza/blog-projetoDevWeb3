import Nickname from "../domain/Nickname";
import Password from "../domain/Password";
import Role from "../domain/Role";
import User from "../domain/User";
import UserRolesManager from "../domain/UserRoleManager";

test("Esperado que usuário tenha autoriação", () => {
  const manager = new UserRolesManager();

  const password = new Password('1234567');
  const username = new Nickname('faxcinante');

  //Criando entidades
  const userAdmin = new User(username, password);
  const AdminRole = new Role("ADMIN");
  const RWRole = new Role("READ_WRITE");

  manager.addRole(AdminRole);
  manager.addRole(RWRole);

  //Criar autorizações
  manager.authorize(
    userAdmin.getId, AdminRole.getId
  );
  manager.authorize(
    userAdmin.getId, RWRole.getId   
  );

  //Testando funcionalidade
  expect(
    manager.userHasAuthorization(userAdmin.getId, 1)
  ).toBe(true);

  expect(
    manager.userHasAuthorization(userAdmin.getId, 4)
  ).toBe(true);

  expect(
    manager.userHasAuthorization(userAdmin.getId, 2)
  ).toBe(false);

  expect(
    manager.userHasAuthorization(userAdmin.getId, 3)
  ).toBe(false);
});
