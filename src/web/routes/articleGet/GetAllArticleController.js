import { StringDecoder }  from 'node:string_decoder';
import ArticleErrorCode from '../../../domain/ArticleErrorCode.js';
export default class GetAllArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest() {
    try {
      const rawArticles = await this.#articleRepository.getAll();   

      if(rawArticles == ArticleErrorCode.THERE_IS_NO_ARTICLES) 
        return null;
      const articles = rawArticles.map(a => {
        const decoder = new StringDecoder('utf8');
        const article = {title: a.title, content: decoder.write(a.content)};
        return article;
      });

      return articles;
    } catch (error){
      throw new Error(error);
    }
  }
}
