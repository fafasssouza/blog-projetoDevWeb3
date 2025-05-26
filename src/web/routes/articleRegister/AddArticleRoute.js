export default async function AddArticleRoute(express, articleController, userRepository) {
  express.post("/add-article", async (req, res) => {
    try {
      const model = {title: req.body.title, content: req.body.content};
      const user = await userRepository.getByName(req.body.owner);

      await articleController.handleRequest(model, user);
      res.send("Artigo criado com sucesso");
    }catch(err) {
      throw new Error("Somenthing happened on AddArticleRoute: " + err); 
    }
  });
}
