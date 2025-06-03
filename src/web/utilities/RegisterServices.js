import DbContext from "../../repository/Dbcontext.js";
import RoleRepository from "../../repository/repositories/RoleRepository.js";
import UserRepository from "../../repository/repositories/UserRepository.js";
import UserLoginController from "../routes/userLogin/UserLoginController.js";
import UserRegisterController from "../routes/userRegister/UserRegisterController.js";
import ArticleRepository from "../../repository/repositories/ArticleRepository.js"
import AddArticleController from "../routes/articleRegister/AddArticleController.js";
import GetAllArticleController from "../routes/articleGet/GetAllArticleController.js";
import GetArticleController from "../routes/articleGet/GetArticleController.js";
import RemoveArticleController from "../routes/articleRemove/RemoveArticleController.js"
import UpdateArticleController from "../routes/articleUpdate/UpdateArticleController.js";
import JwtAuth from "./JsonWebTokenAuth.js";

export default function registerServices(container) {
  container.register('dbcontext', DbContext);
  container.register('userRepository', UserRepository, ['dbcontext'] );
  container.register('roleRepository', RoleRepository, ['dbcontext']);
  container.register('articleRepository', ArticleRepository, ['dbcontext']);
  container.register('userRegisterController', UserRegisterController, ['userRepository', 'roleRepository']);
  container.register('userLoginController', UserLoginController, ['userRepository']);
  container.register('addArticleController', AddArticleController, ['articleRepository'] );
  container.register('removeArticleController', RemoveArticleController, ['articleRepository'] );
  container.register('updateArticleController', UpdateArticleController, ['articleRepository']);
  container.register('getAllArticleController', GetAllArticleController, ['articleRepository'] );
  container.register('getArticleController', GetArticleController, ['articleRepository'] );
  container.register('jwt', JwtAuth, ['userRepository']);   //JWT
}
