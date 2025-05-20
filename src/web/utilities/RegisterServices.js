import DbContext from "../../repository/Dbcontext.js";
import UserRepository from "../../repository/reporitories/UserRepository.js";
import UserController from "../routes/userRegister/UserController.js";

export default function registerServices(container) {
  container.register('dbcontext', DbContext);
  container.register('userRepository', UserRepository, ['dbcontext'] );
  container.register('userController', UserController, ['userRepository']);
}
