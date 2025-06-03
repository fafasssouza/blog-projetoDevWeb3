import ArticleErrorCode from "../../../domain/ArticleErrorCode.js";

export default async function UpdateArticleRoute(express, articleController, jwt) {
  express.put("/update-article", jwt.jwtAauthorization, async (req, res) => {
    try {
      const model = {
        oldTitle: req.body.oldTitle, 
        title: req.body.title, 
        content: req.body.content
      };

      const result = await articleController.handleRequest({
        oldTitle: model.oldTitle,
        title: model.title, 
        content: model.content
      });

      if(result == ArticleErrorCode.THERE_IS_NO_ARTICLE) {
          res.send("Artigo não existe");
          return;
      }
      res.send("Artigo atualizado com sucesso");
    }catch(err) {
      throw new Error("Somenthing happened on UpdateArticleRoute: " + err); 
    }
  });
}
