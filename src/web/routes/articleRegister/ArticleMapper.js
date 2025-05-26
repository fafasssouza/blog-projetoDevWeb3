import Article from "../../../domain/Article.js";

export default class ArticleMapper {
  mapModelToEntity(model) {
    const {title, content} = model;
    const blobContent = new Blob([content], {type: "text/plain"});

    //Adcionar validações
    return new Article(title, blobContent);
  }
}
