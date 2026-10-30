import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import peliculas from './data/peliculas.js'

function App() {
  const destacada = peliculas[0]

  return (
    <>
      <Header />
      <main>
        <Hero pelicula={destacada} />
      </main>
      <Footer />
    </>
  )
}

export default App
