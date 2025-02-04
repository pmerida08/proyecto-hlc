"use client";
import { useState } from "react";

export default function CuentaFuegos() {
  const [contador, setContador] = useState([]);
  const handleClick = () => {
    setContador([...contador, contador.length + 1]);
  };

  return (
    <div className="component">
      <h2>Componente CuentaFuegos</h2>
      <button id="btnCuentaFuegos" onClick={handleClick}>
        Contar fuego
      </button>
      <p id="fireCounter">{`Has contado ${contador.length} fuegos`}</p>
      <div>
        {contador.map((c, key) => (
          <div id="fires" key={key}>
            🔥
          </div>
        ))}
      </div>
    </div>
  );
}
