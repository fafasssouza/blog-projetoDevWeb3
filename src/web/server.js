import express  from "express";
import dotenv from "dotenv";
import cors from "cors";


import Container from "../web/utilities/Container.js";
import registerServices from "../web/utilities/RegisterServices.js";
import RegisterRoute from "./routes/userRegister/RegisterRoute.js";
import LoginRoute from "./routes/userLogin/LoginRoute.js";

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

//POST da rota de registro de usuário
await RegisterRoute(app, container.get('userRegisterController'));
await LoginRoute(app, container.get('userLoginController'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
