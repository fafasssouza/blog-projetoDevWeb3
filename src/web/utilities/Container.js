export default class Container {
  constructor() {
    this.services = new Map();
    this.singletons = new Map()
  }

  register(name, Classdef, dependencies = []) {
    this.services.set(name, {Classdef, dependencies});
  }

  get(name, isSingle = false) {
    if(this.singletons.has(name) && isSingle)
      return this.singletons.get(name);

    const service = this.services.get(name);
    if(!service)
      throw new Error(`Service ${name} not registered`);

    const {Classdef, dependencies} = service;
    const deps = dependencies.map(dep => this.get(dep));
    const instance = new Classdef(...deps);

    if(isSingle) {
      this.singletons.set(name, instance); 
    }

    return instance;
  }
}
