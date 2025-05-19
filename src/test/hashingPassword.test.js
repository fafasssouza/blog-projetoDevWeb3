import Password from "../domain/Password";

test("Espero conseguir hashear minha senha", () => {
  const password = new Password('teste');
  const hashedPassword = password.hashPassword();

  console.log(hashedPassword);
});
