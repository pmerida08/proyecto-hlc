"use client";
import { useState } from "react";

class Color {
  static generateColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }
}

export default function MiNombre({name, surname, instagram}) {

  const [colorText, setColorText] = useState("black");
  const [colorBackground, setColorBackground] = useState("white");

  const handleMouseEnter = () => {
    setColorText(Color.generateColor());
    setColorBackground(Color.generateColor());
  };

  return (
    <div id="miNombreDiv" className="component" style={{ backgroundColor: colorBackground }}>
      <h2>Componente MiNombre</h2>
      <h3
        className="nombre"
        onMouseEnter={handleMouseEnter}
        style={{ color: colorText }}
      >
        Mi nombre es {name} {surname}
      </h3>
      <a
        className="nombre"
        onMouseEnter={handleMouseEnter}
        href={instagram}
        style={{ color: colorText }}
      >
        Instagram
      </a>
    </div>
  );
}
