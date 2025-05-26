import Entity from "./primitives/Entity.js";

export default class Article extends Entity {
  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
  }
} 
