import '../styles/components/movie-card.css'

function MovieCard({ pelicula }) {
  return (
    <article className="tarjeta">
      <img className="tarjeta-imagen" src={pelicula.imagen} alt={pelicula.titulo} />

      <div className="tarjeta-cuerpo">
        <h3 className="tarjeta-titulo">{pelicula.titulo}</h3>
        <p className="tarjeta-valoracion">★ {pelicula.valoracion} / 10</p>

        <ul className="tarjeta-horarios">
          {pelicula.horarios.map((horario) => (
            <li key={horario}>{horario}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MovieCard
