import { Link } from "react-router-dom"

function Index() {



  return (
    <div>
      <p>INICIO</p>

      <Link to={`/Acerca/`}>ACERCA DE LA EMPRESA</Link>
      <Link to={`/Menu/`}>MENU CATALOGOS</Link>
      <Link to={`/Caracteristicas/`}>CARACTERISTICAS CLAVES</Link>
      <Link to={`/Contactenos/`}>CONTACTOS DE LA EMPRESA</Link>
      <Link to={`/Paginas/`}>PAGINAS</Link>
      <Link to={`/Personal/`}>PERSONAL DE LA EMPRESA</Link>
      <Link to={`/Reservas/`}>HACER UNA RESERVACION</Link>

    </div>
  )
}

export default Index