import { useLocation } from "react-router-dom";

function Reservas() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const producto = params.get("producto");
  const costo = params.get("costo");


  return (
    <div>
      <h1>RESERVA UNA MESA PARA TI O TU FAMILIA, FECHA, HORA, TIPO DE EVENTO</h1>
      <p>
        RESERVAR MESA:{" "}
        {producto && costo ? `${producto} ${costo}` : "La empresa les da la opcion de reservar una mesa y disfrutar de los productos que la empresa ofrece, ademas de que se tendra que indicar todos los aspectos en la reserva e indicar que tipo de evento para que la empresa agenda esa fecha y aparte el tiempo para dicha reservacion"}
      </p>
    </div>
  );
}

export default Reservas;