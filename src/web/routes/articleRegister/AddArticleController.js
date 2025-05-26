import ArticleMapper from "./ArticleMapper.js";

export default class AddArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest(article, user) {
    try {
      const mapper = new ArticleMapper();  
      const entity = mapper.mapModelToEntity(article);

      await this.#articleRepository.add(entity, user); 
    } catch(error){
      throw new Error('Something wrong with AddArticleController: ' + error);
    }
  }
}
