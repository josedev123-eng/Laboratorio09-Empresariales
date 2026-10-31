import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MovieCard from './components/MovieCard.jsx'
import Footer from './components/Footer.jsx'
import peliculas from './data/peliculas.js'

function App() {
  const destacada = peliculas[0]

  return (
    <>
      <Header />
      <main>
        <Hero pelicula={destacada} />
        <div className="contenedor seccion" style={{ maxWidth: '260px' }}>
          <MovieCard pelicula={peliculas[1]} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
