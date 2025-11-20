// Vista simple que renderiza una lista y expone bindings
export default class View {
  constructor(root = document.body) {
    this.root = root;
    this.root.innerHTML = this.template();
    this.refs = {
      form: this.root.querySelector('form'),
      input: this.root.querySelector('input'),
      list: this.root.querySelector('ul')
    };
  }

  template() {
    return `
      <section class="mvc">
        <form id="mvc-form">
          <input id="mvc-input" placeholder="Nuevo ítem" />
          <button type="submit">Agregar</button>
        </form>
        <ul id="mvc-list"></ul>
      </section>
    `;
  }

  render(items) {
    this.refs.list.innerHTML = items.map((it, i) =>
      `<li data-index="${i}">${it} <button class="remove">Eliminar</button></li>`
    ).join('');
  }

  bindAdd(handler) {
    this.refs.form.addEventListener('submit', e => {
      e.preventDefault();
      const value = this.refs.input.value.trim();
      if (value) {
        handler(value);
        this.refs.input.value = '';
      }
    });
  }

  bindRemove(handler) {
    this.refs.list.addEventListener('click', e => {
      if (e.target.classList.contains('remove')) {
        const li = e.target.closest('li');
        const index = Number(li.dataset.index);
        handler(index);
      }
    });
  }
}
