import Password from "../domain/Password";

test("Espero conseguir hashear minha senha", () => {
  const password = new Password('teste');

  console.log(password.password);
});
