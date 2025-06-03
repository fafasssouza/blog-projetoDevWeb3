import ArticleErrorCode from "../../../domain/ArticleErrorCode.js";

export default async function AddArticleRoute(express, articleController, userRepository, jwt) {
  express.post("/add-article", jwt.jwtAauthorization, async (req, res) => {
    try {
      const {title, content, owner} = req.body;
      
      const user = await userRepository.getByName(owner);
      
      const result = await articleController.handleRequest({title: title, content: content}, user);
      if(result == ArticleErrorCode)
        res.status(403).send("Arquivo já registrado");
      else
        res.send("Artigo criado com sucesso");
    }catch(err) {
      throw new Error("Somenthing happened on AddArticleRoute: " + err); 
    }
  });
}
