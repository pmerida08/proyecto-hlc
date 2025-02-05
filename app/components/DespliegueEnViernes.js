"use client";
import React, { useState } from "react";

export default function DespliegueEnViernes() {
  const [text, setText] = useState("");
  const [enlace, setEnlace] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
    if (despliegue(event.target.value) === "red") {
      setEnlace(true);
    } else {
      setEnlace(false);
    }
  };

  function url() {
    if (enlace) {
      return (
        <a href="https://youtu.be/Vhmek8362Fc" target="_blank">
          Enlace
        </a>
      );
    }
    return null;
  }

  return (
    <div className="component">
      <h2>Componente DespliegueEnViernes</h2>
      <textarea
        id="textArea"
        value={text}
        onChange={handleChange}
        style={{ color: despliegue(text) }}
      />
      <div>{url()}</div>
    </div>
  );
}

function despliegue(text) {
  const aDespliegueViernes = [
    "despliegueviernes",
    "viernesdespliegue",
    "deployviernes",
    "viernesdeploy",
  ];

  const textArea = text.toLowerCase();

  const result = aDespliegueViernes.some(
    (element) =>
      textArea.includes(element.toLowerCase()) ||
      text.includes(element.toUpperCase()) ||
      text.includes(element)
  );

  return result ? "red" : "black";
}