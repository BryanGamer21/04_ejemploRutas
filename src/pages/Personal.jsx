import { useLocation } from "react-router-dom";

function Personal() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const producto = params.get("producto");
  const costo = params.get("costo");

  return (
    <div>
      <h1>LOS CHEFS</h1>
      <p>
        PERSONAL{" "}
        {producto && costo ? `${producto} ${costo}` : "AREA HAMBURGUESAS"}
      </p>
      <p>
        PERSONAL{" "}
        {producto && costo ? `${producto} ${costo}` : "AREA PIZZAS"}
      </p>
      <p>
        PERSONAL{" "}
        {producto && costo ? `${producto} ${costo}` : "AREA PASTELES"}
      </p>
    </div>
  );
}

export default Personal;