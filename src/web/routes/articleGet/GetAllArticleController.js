import { StringDecoder }  from 'node:string_decoder';
export default class GetAllArticleController {
  #articleRepository;

  constructor(articleRepository) {
    this.#articleRepository = articleRepository;
  }

  async handleRequest() {
    try {
      const rawArticles = await this.#articleRepository.getAll();   
      const articles = rawArticles.map(a => {
        const decoder = new StringDecoder('utf8');
        const obj = {title: a.title, content: decoder.write(a.content)};
        return obj;
      });

      return articles;
    } catch (error){
      throw new Error(error);
    }
  }
}
