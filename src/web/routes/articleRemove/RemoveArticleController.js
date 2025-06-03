import ArticleErrorCode from "../../../domain/ArticleErrorCode.js";

export default class RemoveArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest(title) {
    try {
      const article = await this.#articleRepository.get(title); 
      if(!article) {
        return ArticleErrorCode.THERE_IS_NO_ARTICLE;
      }

      return await this.#articleRepository.delete(article.id); 
    } catch(error){
      throw new Error('Something wrong with RemoveArticleController: ' + error);
    }
  }
}
