import express  from "express";
import dotenv from "dotenv";
import cors from "cors";

//DI Container
import Container from "../web/utilities/Container.js";
import registerServices from "../web/utilities/RegisterServices.js";

//Rotas
import RegisterRoute from "./routes/userRegister/RegisterRoute.js";
import LoginRoute from "./routes/userLogin/LoginRoute.js";
import AddArticleRoute from "./routes/articleRegister/AddArticleRoute.js";
import GetArticleRoute from "./routes/articleGet/GetArticleRoute.js";
import RemoveArticleRoute from "./routes/articleRemove/RemoveArticleRoute.js";
import UpdateArticleRoute from "./routes/articleUpdate/UpdateArticleRoute.js";

const app = express();
const router = app.router;
dotenv.config();

const PORT = process.env.PORT | 7777;

const container = new Container();
registerServices(container);

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'authorization'],
}));

app.use(express.json());
app.use('/api', router);

//Rotas
await RegisterRoute(app, container.get('userRegisterController'));
await LoginRoute(app, container.get('userLoginController'), container.get('jwt'));
await AddArticleRoute(app, container.get('addArticleController'), container.get('userRepository'), container.get('jwt'));
await GetArticleRoute(app,container.get('getAllArticleController'), container.get('getArticleController'));
await RemoveArticleRoute(app, container.get('removeArticleController'), container.get('jwt'));
await UpdateArticleRoute(app, container.get('updateArticleController'), container.get('jwt'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
