import Model from '../modelo/modelo.js';
import View from '../vista/vista.js';

export default class Controller {
  constructor(root = document.body, initialItems = []) {
    this.model = new Model(initialItems);
    this.view = new View(root);

    // Cuando el modelo cambia, re-renderizar la vista
    this.model.subscribe(items => this.view.render(items));

    // Vincular eventos de la vista a los handlers del controlador
    this.view.bindAdd(this.handleAdd.bind(this));
    this.view.bindRemove(this.handleRemove.bind(this));

    // Render inicial
    this.view.render(this.model.getItems());
  }

  handleAdd(item) {
    this.model.addItem(item);
  }

  handleRemove(index) {
    this.model.removeItem(index);
  }
}
