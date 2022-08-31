import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Contact } from "../models/contact.class";

const ComponenteB = ({ contact }) => {
  const [conectado, setConectado] = useState(false);
  const handleChange = () => {
    setConectado(!conectado);
  };

  return (
    <>
      <p>Nombre: {contact.nombre}</p>
      <p>Apellido: {contact.apellido}</p>
      <p>Email: {contact.email}</p>
      <p>Estado: {conectado ? "Contacto en línea" : "Contacto no disponible"}</p>
      <button onClick={handleChange}>Cambiar estado</button>
    </>
  );
};

ComponenteB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
