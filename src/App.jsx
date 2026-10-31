import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MovieList from './components/MovieList.jsx'
import Footer from './components/Footer.jsx'
import peliculas from './data/peliculas.js'

function App() {
  const destacada = peliculas[0]

  return (
    <>
      <Header />
      <main>
        <Hero pelicula={destacada} />
        <MovieList peliculas={peliculas} />
      </main>
      <Footer />
    </>
  )
}

export default App
