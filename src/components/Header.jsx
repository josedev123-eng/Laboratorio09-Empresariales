import '../styles/components/header.css'

function Header() {
  return (
    <header className="header">
      <div className="contenedor header-contenido">
        <a href="#" className="header-logo">
          Cine <span>Estelar</span>
        </a>

        <nav>
          <ul className="header-nav">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#cartelera">Cartelera</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
