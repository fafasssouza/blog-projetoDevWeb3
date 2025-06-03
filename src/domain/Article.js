import Entity from "./primitives/Entity.js";

export default class Article extends Entity {
  constructor(title, content, id = null) {
    super();
    if(id) 
      this.setId = id;
    this.title = title;
    this.content = content;
  }
} 
