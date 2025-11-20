# Uso básico de la estructura MVC añadida

Se han añadido las carpetas y archivos siguientes:

- `modelo/modelo.js` — Clase `Model` para gestionar una lista de items.
- `vista/vista.js` — Clase `View` que renderiza la UI y expone bindings.
- `controlador/controlador.js` — Clase `Controller` que conecta `Model` y `View`.

Instrucciones rápidas para integrar en `index.html` (usar módulos ES):

1. Añade un contenedor donde montar la vista, por ejemplo dentro de `body`:

```html
<div id="app"></div>
```

2. Incluye el controlador como módulo al final del `body`:

```html
<script type="module">
  import Controller from './controlador/controlador.js';

  // Monta la app en el elemento con id "app" y opcionalmente pasa items iniciales
  const appRoot = document.getElementById('app');
  const controller = new Controller(appRoot, ['Item 1', 'Item 2']);

  // Si prefieres exponer globalmente (opcional):
  // window.appController = controller;
</script>
```

Notas:
- Los módulos usan rutas relativas. Si mueves archivos, adapta las importaciones.
- El código es intencionadamente pequeño y didáctico; adáptalo a tu estructura de CSS y templates.

¿Quieres que integre este ejemplo directamente en tu `index.html` actual y haga un commit? Si sí, dime si quieres que lo monte en `#app` o en otro elemento existente.
