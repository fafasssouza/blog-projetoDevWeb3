import dotenv from "dotenv";

test("Esperado conseguir se conectar com server.js", () => {
  dotenv.config();
  fetch(`http://127.0.0.1:${process.env.PORT | 7777}`)
    .catch(err => console.error(err));  
});
