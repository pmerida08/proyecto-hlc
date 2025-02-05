'use client';
import { useState } from "react";

export default function Toggle() {
  const [encendido, setEncendido] = useState(false);

  const encender = () => {
    setEncendido(!encendido);
    if (!encendido) {
      document.getElementById("apagado").style.backgroundColor = "green";
    }
    else {
      document.getElementById("apagado").style.backgroundColor = "red";
    }
  };

  return (
    <div className="component" id="toggle">
      <h2>Componente Interruptor</h2>
      <button id="btnToggle" onClick={encender}>
        {encendido ? "Apagar" : "Encender"}
      </button>
      <span className="estadoToggle" id="apagado">{encendido ? "ON" : "OFF"}</span>
      <a href="https://github.com/iesgrancapitan-hlc/listado-de-componentes-con-next-js-javierrm11/blob/main/proyecto/app/components/Toggle.js">Enlace al repositorio</a>
    </div>
  );
}
