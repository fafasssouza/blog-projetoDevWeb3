import Nickname from "../domain/Nickname";
import Password from "../domain/Password";
import User from "../domain/User";

test("Espero que eu consiga criar e acessar as propriedades de User", () => {
  const password = new Password('1234567');
  password.password = password.hashPassword();
  const username = new Nickname('faxcinante');

  //Criando entidades
  const userAdmin = new User(username, password);
  console.log(userAdmin.getNickname);
  console.log(userAdmin.getPassword);
  
});
