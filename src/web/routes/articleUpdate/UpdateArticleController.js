import ArticleMapper from "./ArticleMapper.js";

export default class UpdateArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest(article) {
    try {
      const mapper = new ArticleMapper();
      const entity = mapper.mapModelToEntity(article);


      const result = await this.#articleRepository.update({
        oldTitle: article.oldTitle,
        title: article.title, 
        content: entity.content
      }); 

      return result;
    } catch(error){
      throw new Error('Something wrong with UpdateArticleController: ' + error);
    }
  }
}
