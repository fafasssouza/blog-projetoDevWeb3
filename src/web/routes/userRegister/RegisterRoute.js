import UserModel from "./UserModel.js";

 export default async function RegisterRoute(app, userController) {
   app.post("/register-user", async (req, res) => {
    try {
        const {username, password, role} = req.body;
        const model = new UserModel(
            username, 
            password,
            role != null ? role : "READ");
        const result = await userController.handleRequest(model); 
    
        if(!result) {
          res.status(403).send("Usuário já existe");
          return;
        } 
          
        res.status(201).send("Usuário criado com sucesso");
      }catch(e) {
        console.error(e);
        res.status(500).send("Problema no servidor");
      }
   });
}
