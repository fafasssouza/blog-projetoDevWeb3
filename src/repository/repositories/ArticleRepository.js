import ArticleErrorCode from "../../domain/ArticleErrorCode.js";

export default class ArticleRepository {
  #dbcontext;
  constructor(dbcontext) {
    this.#dbcontext = dbcontext;
  }

  async add(entity, user) {
    try {
      await this.#dbcontext.initiateContext();

      const article = await this.#dbcontext.articleModel.findOne({
        where: {title: entity.title}});

      if(article) 
        return ArticleErrorCode.THERE_IS_ARTICLE;

      const newArticle =  this.#dbcontext.articleModel.build({
        id: entity.getId,
        title:  entity.title,
        content: await entity.content.text(),
        UserId: user.id
      }); 

      await newArticle.save();
      return true;
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }

  async delete(id) {
    try {
      await this.#dbcontext.initiateContext();

      const article = await this.#dbcontext.articleModel.findOne({
        where: {id: id}});

      if(!article) {
        return ArticleErrorCode.THERE_IS_NO_ARTICLE;
      }
        

      await this.#dbcontext.articleModel.destroy({where: {
        id: id
      }});
      return true;
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }
  async update(model) {
    try {
      await this.#dbcontext.initiateContext();

      const article = await this.#dbcontext.articleModel.findOne({
        where: {title: model.oldTitle}});

      if(!article)
        return ArticleErrorCode.THERE_IS_NO_ARTICLE;

      console.log(model);

      await this.#dbcontext.articleModel.update({title: model.title, content: await model.content.text()}, {
        where: {
          id: article.dataValues.id,
        },
      });
      return true;
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }

  async get(title) {
    try {
      await this.#dbcontext.initiateContext();

      const article = await this.#dbcontext.articleModel.findOne({
        where: {title: title}});

      if(!article)
        return ArticleErrorCode.THERE_IS_NO_ARTICLE;

        const res = {
        title : article.title, 
        content: article.content,
        id: article.id};
      return res;
    }catch (error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  }

  async getAll() {
    try { 
      await this.#dbcontext.initiateContext();
      const articles = await this.#dbcontext.articleModel.findAll();
      if(articles.lenght == 0) {
        return ArticleErrorCode.THERE_IS_NO_ARTICLES;
      }
      const mappedArticles = articles.map(e => e.dataValues);  
      return mappedArticles;
    } catch(error) {
      throw new Error("Something happend in ArticleRepository: " + error);
    }
  };
}
