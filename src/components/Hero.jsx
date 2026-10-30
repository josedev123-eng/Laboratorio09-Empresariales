import '../styles/components/hero.css'

function Hero({ pelicula }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-fondo" src={pelicula.imagen} alt="" />

      <div className="contenedor hero-contenido">
        <span className="hero-etiqueta">Película destacada</span>
        <h1 className="hero-titulo">{pelicula.titulo}</h1>
        <p className="hero-datos">
          {pelicula.clasificacion} · ★ {pelicula.valoracion}
        </p>
        <p className="hero-sinopsis">{pelicula.sinopsis}</p>
        <a href="#cartelera" className="hero-boton">Ver horarios</a>
      </div>
    </section>
  )
}

export default Hero
