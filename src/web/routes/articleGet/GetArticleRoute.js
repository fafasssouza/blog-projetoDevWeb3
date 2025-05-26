export default async function GetArticleRoute(express, getAllarticleController, getArticleController) {
  express.get("/getAllArticles", async (req, res) => {
    try {
      const articles = await getAllarticleController.handleRequest(); 
      if(!articles)
        throw "Artigos vazios";
      res.send(JSON.stringify(articles));
    }catch(err) {
      throw new Error("Somenthing happened on AddArticleRoute: " + err); 
    }
  });

  express.get("/getArticle/:title", async (req, res) => {
    try {
      const article = await getArticleController.handleRequest(req.params.title); 
      if(!article)
        throw "Artigo não existe";
      res.send(JSON.stringify(article));
    }catch(err) {
      throw new Error("Somenthing happened on AddArticleRoute: " + err); 
    }
  });
}
