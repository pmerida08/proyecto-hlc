"use client";
import { useState } from "react";

export default function Cliqueando() {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setContador((c) => c + 1);

    if (contador + 1 === 0) {
      setColor("red");
    } else if (contador + 1 === 1) {
      setColor("yellow");
    } else {
      setColor("#00ff00");
    }
  };

  const handleReset = () => {
    setContador(0);
    setColor("red");
  };

  return (
    <div className="component">
      <h2>Componente Cliqueando</h2>
      <button id="btnClick" onClick={handleClick}>
        Incrementar contador
      </button>
      <p
        id="estadoClick"
        style={{ backgroundColor: color }}
        onMouseEnter={handleReset}
      >
        {contador === 0
          ? "No has clicado aún"
          : contador === 1
          ? "Has clicado 1 vez"
          : `Has clicado ${contador} veces`}
      </p>
      <a href="https://github.com/iesgrancapitan-hlc/listado-de-componentes-con-next-js-javierrm11/blob/main/proyecto/app/components/Cliqueando.js">Enlace al repositorio</a>
    </div>
  );
}
