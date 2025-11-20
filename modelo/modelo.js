// Modelo simple para gestionar una lista de items
export default class Model {
  constructor(items = []) {
    this.items = items;
    this.onChange = null;
  }

  subscribe(callback) {
    this.onChange = callback;
  }

  _commit(items) {
    this.items = items;
    if (this.onChange) this.onChange(this.items);
  }

  addItem(item) {
    this._commit([...this.items, item]);
  }

  removeItem(index) {
    this._commit(this.items.filter((_, i) => i !== index));
  }

  getItems() {
    return this.items;
  }
}
