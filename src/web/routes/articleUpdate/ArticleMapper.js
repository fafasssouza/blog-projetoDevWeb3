export default class ArticleMapper {
  mapModelToEntity(model) {
    const {title, content} = model;
    const blobContent = new Blob([content], {type: "text/plain"});
    return {title: title, content: blobContent};
  }
}
