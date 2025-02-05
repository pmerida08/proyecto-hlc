"use client";
import React from "react";

export default function Holi({ nombre }) {
  return (
    <div className="component" id="holiDiv">
      <h2>Componente Holi</h2>
      {nombre ? <p>Hola {nombre}, ¿cómo estás?</p> : <p>Hola. No te conozco</p>}
      <a href="https://github.com/iesgrancapitan-hlc/listado-de-componentes-con-next-js-javierrm11/blob/main/proyecto/app/components/Holi.js">Enlace al repositorio</a>
    </div>
  );
}
