# Emergent - Preview

Este directorio contiene los archivos estáticos descargados del proyecto. Para ejecutar una vista previa local:

Requisitos:
- Node.js instalado (para usar `npx http-server`).

Comandos (PowerShell):

```powershell
# Sitúate en la carpeta del proyecto (ejemplo local):
cd "c:\Users\Leonardo\Pictures\Purified"
npm run start
```

El comando levantará un servidor en http://localhost:8080 y cargará `index.html` que incluye los scripts existentes.

Notas:
- No renombré los archivos `.descarga`; el `index.html` los referencia tal cual para evitar perder integridad del contenido descargado.
- Si prefieres renombrar los archivos a `.js`, dime y lo hago (haré copias en vez de borrar los originales).
- Si quieres que cree un flujo de build (instalar dependencias, rebuild), indícame el gestor y te lo preparo.