import MovieCard from './MovieCard.jsx'
import '../styles/components/movie-list.css'

function MovieList({ peliculas }) {
  return (
    <section className="seccion" id="cartelera">
      <div className="contenedor">
        <h2 className="seccion-titulo">Cartelera</h2>

        <div className="lista-peliculas">
          {peliculas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovieList
