export default class ArrayBufferConverter {
  load(buffer) {
    this.view = new Uint16Array(buffer);
    return this.view;
  }

  toString() {
    const tempArr = [];
    for (let i = 0; i < this.view.length; i += 1) {
      tempArr.push(String.fromCharCode(this.view[i]));
    }
    return tempArr.join('');
  }
}
