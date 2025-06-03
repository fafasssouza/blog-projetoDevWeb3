import ArticleErrorCode from "../../../domain/ArticleErrorCode.js";

export default async function removeArticleRoute(express, articleController, jwt) {
  express.delete("/delete-article/:title", jwt.jwtAauthorization , async (req, res) => {
    try {
      const result = await articleController.handleRequest(req.params.title);

      if(result === ArticleErrorCode.THERE_IS_NO_ARTICLE) {
        res.send("Artigo não encontrado");
        return;
      }
      res.send("Artigo removido com sucesso");
    }catch(err) {
      throw new Error("Somenthing happened on AddArticleRoute: " + err); 
    }
  });
}
