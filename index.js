class SortedList {
  constructor() {}
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {}
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b );
    this.length = this.items.length;
  }

  get(pos) {}
  get(pos) {
    if(pos < 0 || pos > this.items.length  ){
      throw new Error('OutOfBounds');
    } else
    return this.items[pos]
  }

  max() {}
  max() {
    if(this.items.length) {
      return this.items.reduce((acumulador, atual) => Math.max(acumulador, atual))
    } else{

      throw new Error('EmptySortedList');

    }
  }

  min() {}
  min() {
    if(this.items.length) {
      return this.items.reduce((acumulador, atual) => Math.min(acumulador, atual))
    } else{

      throw new Error('EmptySortedList');

    }
  }
  sum() {}
  sum() {

    return this.items.reduce((acumulador, atual) => (acumulador + atual), 0)

  }
  avg() {}
  avg() {
    if(this.items.length) {
      return this.sum() / this.items.length
    } else{

      throw new Error('EmptySortedList');

    }

  }
}

module.exports = SortedList;
