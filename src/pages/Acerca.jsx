import { useLocation } from "react-router-dom";

function Acerca() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const producto = params.get("producto");
  const costo = params.get("costo");


  return (
    <div>
      <h1>HISTORIAL</h1>
      <p>
        COMIENZOS{" "}
        {producto && costo ? `${producto} ${costo}` : "La empresa desde hace 6 años "}
      </p>
    </div>
  );
}

export default Acerca;