import express  from "express";
import dotenv from "dotenv";
import cors from "cors";


import Container from "../web/utilities/Container.js";
import registerServices from "../web/utilities/RegisterServices.js";
import UserModel from "./routes/userRegister/UserModel.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT | 7777;

const container = new Container();
registerServices(container);

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  //allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.post("/user", async (req, res) => {
  try {
    const {username, password} = req.body;

    const model = new UserModel(username, password)
    const controller =  container.get('userController');
    const result = await controller.handleRequest(model); 

    if(result < 0) {
      res.status(403).send("Usuário já existe");
      return;
    } 
      
    res.status(201).send("Usuário criado com sucesso");
  }catch(e) {
    console.error(e);
    res.status(500).send("Problema no servidor");
  }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
