// export default class RegisterRoute {
//   #userController
//
//   constructor(app, userController) {
//     this.#userController = userController;
//   }
//
//   post() {
//     this.#app.post("/user", async (req, res) => {
//       const {username, password} = req.body;
//
//       const model = new UserModel(username, password)
//       await this.#userController.handleRequest(model); 
//     });
//   }
// }
