import '../styles/components/footer.css'

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="contenedor footer-contenido">
        <div>
          <h3>Cine Estelar</h3>
          <p>Las mejores películas en la pantalla más grande de la ciudad.</p>
        </div>

        <div>
          <h3>Contacto</h3>
          <p>Av. Cascanueces 2221, Santa Anita, Lima</p>
          <p>Teléfono: (01) 317-3900</p>
          <p>Correo: contacto@cineestelar.pe</p>
        </div>

        <div>
          <h3>Horario de atención</h3>
          <p>Lunes a domingo</p>
          <p>11:00 a. m. - 12:00 a. m.</p>
        </div>
      </div>

      <p className="footer-copy">© 2026 Cine Estelar. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
