import passwordValidation from "./passwordValidation.js";
import UserModel from "../userRegister/UserModel.js";

export default async function LoginRoute(app, userController, jwt) {
   app.post("/login-user", async (req, res) => {
    try {
        //Ignore role ele não é utilizado aq
        const {username, password, role} = req.body;
        const model = new UserModel(
            username, 
            password,
            role != null ? role : "READ");
        const result = await userController.handleRequest(model); 
        
        if(result == null) {
          res.status(403).send("Usuário não existe");
          return;
        } 
        
        const validation =  passwordValidation(password, result.password);

        if(validation) {
            const payload = jwt.generatePayload({username: username, password: password});
            res.send(payload);
        } else {
            res.status(403).send("Senha incorreta");
        }
        
      }catch(e) {
        console.error(e);
        res.status(500).send("Problema no servidor");
      }
   });
}
