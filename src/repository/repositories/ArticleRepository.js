export default class ArticleRepository {
  #dbcontext;
  constructor(dbcontext) {
    this.#dbcontext = dbcontext;
  }

  async add(entity, user) {
    try {
      await this.#dbcontext.initiateContext();

      const newArticle =  this.#dbcontext.articleModel.build({
        id: entity.getId,
        title:  entity.title,
        content: await entity.content.text(),
        UserId: user.id
      }); 

      await newArticle.save();
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }
  // Delete();
  // Update();
  async get(title) {
    try {
      await this.#dbcontext.initiateContext();

      const article = await this.#dbcontext.articleModel.findOne({
        where: {title: title}});

      if(!article)
        return null;

      const res = {title: article.title, content: article.content};
      return res;
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }

  async getAll() {
    try { 
      await this.#dbcontext.initiateContext();
      const articles = await this.#dbcontext.articleModel.findAll();
      const mappedArticles = articles.map(e => e.dataValues);  
      return mappedArticles;
    } catch(error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  };
}
