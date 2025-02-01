"use client";
import { useState } from "react";
import styles from "../styles/minombre.css";
import "../styles/components.css";

class Color {
  static generateColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }
}

export default function MiNombre() {
  const name = "Pablo";
  const surname = "Merida Velasco";
  const instagram = "https://www.instagram.com/pablomerida_/";

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
        className={styles.nombre}
        onMouseEnter={handleMouseEnter}
        style={{ color: colorText }}
      >
        Mi nombre es {name} {surname}
      </h3>
      <a
        className={styles.nombre}
        onMouseEnter={handleMouseEnter}
        href={instagram}
        style={{ color: colorText }}
      >
        Instagram
      </a>
    </div>
  );
}
