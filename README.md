# Laboratorio 09 - Cartelera de cine con React

Desarrollo de Aplicaciones Empresariales · 4-C24-A · TECSUP

Página de cartelera para un cine ficticio, **Cine Estelar**, hecha con React y Vite. Muestra un banner con la película destacada y la cartelera completa en tarjetas, todo dibujado a partir de un archivo de datos.

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior (se trabajó con Node v22).

```bash
node -v          # comprobar la versión de Node
npm install      # instalar dependencias
npm run dev      # levantar el servidor de desarrollo
```

Luego abrir la dirección que muestra Vite en la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción: `npm run build`.

## Dependencias

Declaradas en `package.json`:

| Paquete | Tipo | Para qué se usa |
|---|---|---|
| react | dependencia | Librería para construir la interfaz con componentes |
| react-dom | dependencia | Dibuja los componentes de React en el navegador |
| vite | desarrollo | Servidor de desarrollo y empaquetado del proyecto |
| @vitejs/plugin-react | desarrollo | Permite que Vite entienda JSX y React |
| oxlint | desarrollo | Revisa el código en busca de errores comunes |

## Estructura del proyecto

```
src/
├── components/        Componentes de la interfaz
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   └── Footer.jsx
├── data/
│   └── peliculas.js   Cartelera con 8 películas
├── styles/
│   ├── base/          variables.css, reset.css y layout.css
│   ├── components/    un archivo CSS por componente
│   └── main.css       importa los estilos base
├── App.jsx            Compone toda la página
└── main.jsx           Punto de entrada que monta App en #root
```

## Recorte de la interfaz en componentes

```
App
├── Header                      nombre del cine y navegación
├── main
│   ├── Hero (pelicula)         banner de la película destacada
│   └── MovieList (peliculas)   recorre la cartelera con map
│       └── MovieCard (pelicula) × 8   imagen, título, valoración y horarios
└── Footer                      contacto e información
```

| Componente | Props que recibe | Responsabilidad |
|---|---|---|
| Header | ninguna | Muestra el nombre del cine y los enlaces de navegación |
| Hero | `pelicula` | Muestra el banner con la imagen, título, clasificación, valoración y sinopsis de la película destacada |
| MovieList | `peliculas` | Recorre el arreglo con `map` y dibuja una `MovieCard` por película usando `id` como `key` |
| MovieCard | `pelicula` | Muestra la imagen, el título, la valoración y los horarios de una película |
| Footer | ninguna | Muestra la dirección, el teléfono, el correo y el horario de atención |

Solo `App` importa el archivo de datos. Los demás componentes reciben lo que necesitan por props y no saben de dónde vienen los datos, por eso se podrían reutilizar con otra cartelera sin cambiarlos.

## Observaciones: errores típicos provocados

Se provocaron tres errores comunes a propósito para ver el mensaje que muestra cada uno.

**1. Usar `class` en vez de `className`**

```jsx
<div class="tarjeta">...</div>
```

Mensaje en la consola del navegador:

```
Invalid DOM property `class`. Did you mean `className`?
```

En JSX se usa `className` porque `class` es una palabra reservada de JavaScript. La página igual se dibuja, pero React avisa del error en la consola.

**2. Devolver dos nodos raíz**

```jsx
return (
  <h1>Cine Estelar</h1>
  <p>Cartelera</p>
)
```

Mensaje de Vite (en la terminal y en la pantalla del navegador):

```
Adjacent JSX elements must be wrapped in an enclosing tag.
```

Un componente solo puede devolver un elemento. Se soluciona envolviendo todo en un `<div>` o en un fragmento `<>...</>`, como se hizo en `App.jsx`.

**3. Olvidar la clave en el `map`**

```jsx
{peliculas.map((pelicula) => (
  <MovieCard pelicula={pelicula} />
))}
```

Mensaje en la consola del navegador:

```
Each child in a list should have a unique "key" prop.
```

React necesita una `key` única en cada elemento de una lista para saber cuál cambió. Se soluciona con `key={pelicula.id}`.

## Notas

- Las películas y el cine son inventados para el laboratorio.
- Las imágenes se cargan desde picsum.photos, así que se necesita conexión a internet para verlas.
