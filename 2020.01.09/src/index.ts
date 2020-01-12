const fs = require('fs');
const data = require('../data/database.json');

type structure = { entities: {}[], lastId: number };

abstract class Base {
  constructor(public filename: String) {

  }
  abstract add(obj: structure): void;
  abstract remove(id: number): void;
  abstract find(id: number): {};
}


class Model extends Base {
  constructor(public filename: String, obj: structure) {
    super(filename);

  }
  add(obj: structure) {
    const newId = +data.lastId + 1;
    const newEntity = {}
    return new Promise((resolve, reject) => {
      fs.writeFile('../data/database.json', obj)
    }

    // const newIndex = ++this.data.lastIndex;
    //     newCube = { id: newIndex, ...newCube };
    //     const newData = {
    //         lastIndex: newIndex,
    //         entities: this.data.entities.concat(newCube)
    //     };
    //     return this._write(newData, newCube);
  }
  remove(id: number) {

  }
  find(id: number) {
    return this.filename;
  }
}