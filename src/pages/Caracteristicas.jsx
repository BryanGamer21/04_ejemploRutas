import { useLocation } from "react-router-dom";

function Caracteristicas() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const producto = params.get("producto");
  const costo = params.get("costo");


  return (
    <div>
      <h1>CARACTERISTICAS CLAVES DE LA HAMBURGUESA</h1>
      <p>
        QUE HACE ESPECIAL LAS HAMBURGUESAS DE DLICIOUS{" "}
        {producto && costo ? `${producto} ${costo}` : "La empresa ofrece a sus clietes diferentes hamburguesa con los diferentes gustos para poder elegir"}
      </p>
      <p>
        QUE HACE ESPECIAL LAS PIZZAS DE DLICIOUS{" "}
        {producto && costo ? `${producto} ${costo}` : "La empresa ofrece a sus clientes diferentes especialidades de pizzas para poder elegir"}
      </p>
      <p>
        QUE HACE ESPECIAL LOS PASTELES DE DLICIOUS{" "}
        {producto && costo ? `${producto} ${costo}` : "La empresa tiene a la venta diferentes pasteles con diferentes diseños, sabores, tamaños para poder elegir"}
      </p>
    </div>
  );
}

export default Caracteristicas;