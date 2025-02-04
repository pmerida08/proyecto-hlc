"use client";
import React from "react";

export default function Holi({ nombre }) {
  return (
    <div className="component" id="holiDiv">
      <h2>Componente Holi</h2>
      {nombre ? <p>Hola {nombre}, ¿cómo estás?</p> : <p>Hola. No te conozco</p>}
    </div>
  );
}
