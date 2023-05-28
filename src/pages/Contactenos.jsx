import { useLocation } from "react-router-dom";

function Contactenos() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const producto = params.get("producto");
  const costo = params.get("costo");


  return (
    <div>
      <h1>CONTACTOS DE LA EMPRESA</h1>
      <p>
        {" "}
        {producto && costo ? `${producto} ${costo}` : ""}
      </p>
    </div>
  );
}

export default Contactenos;