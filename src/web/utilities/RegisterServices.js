import DbContext from "../../repository/Dbcontext.js";
import RoleRepository from "../../repository/repositories/RoleRepository.js";
import UserRepository from "../../repository/repositories/UserRepository.js";
import UserLoginController from "../routes/userLogin/UserLoginController.js";
import UserRegisterController from "../routes/userRegister/UserRegisterController.js";

export default function registerServices(container) {
  container.register('dbcontext', DbContext);
  container.register('userRepository', UserRepository, ['dbcontext'] );
  container.register('roleRepository', RoleRepository, ['dbcontext']);
  container.register('userRegisterController', UserRegisterController, ['userRepository', 'roleRepository']);
  container.register('userLoginController', UserLoginController, ['userRepository']);
}
