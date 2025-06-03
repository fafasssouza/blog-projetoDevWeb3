import { StringDecoder }  from 'node:string_decoder';
import ArticleErrorCode from '../../../domain/ArticleErrorCode.js';
export default class GetArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest(title) {
    try {
      const rawArticle = await this.#articleRepository.get(title);   
      if(rawArticle == ArticleErrorCode.THERE_IS_NO_ARTICLE)
        return null;
      const decoder = new StringDecoder('utf8');
      const article = {title: rawArticle.title, content: decoder.write(rawArticle.content)};
      return article;

    } catch (error){
      throw new Error(error);
    }
  }
}
