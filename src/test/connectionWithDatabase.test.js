import DbContext from "../repository/Dbcontext";
import Nickname from "../domain/Nickname";
import Password from "../domain/Password";
import Role from "../domain/Role";
import User from "../domain/User";

test("Espero conseguir criar uma conexão segura com meu sqlite", async () => { 

  const context = new DbContext();
  await context.initiateContext();
  const password = new Password('1234567');
  const username = new Nickname('faxcinante');

  //Criando entidades
  const userAdmin = new User(username, password);
  const AdminRole = new Role("ADMIN");

  //Criando uma instancia de modelo
  try {
    const fax =  await context.userModel.create({
      id: userAdmin.getId,
      username:  userAdmin.getNickname,
      password: userAdmin.getPassword,
      Roles: [
        {
          id: AdminRole.getId,
          role_Number: AdminRole.getRoleNumber
        },
      ]
    }, {include: context.roleModel});
     
    await fax.save();
  } catch(e) {
    console.error(e);
  } finally {  
    await context.closeConnection();
  }
});
