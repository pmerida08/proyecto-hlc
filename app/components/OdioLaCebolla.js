'use client';
import React, { useState } from "react";


function odiar(text) {
  const odioCebolla = <span style={{ color: "red" }}>Odio la cebolla</span>;

  return text.includes("cebolla".toLowerCase() || "cebolla".toUpperCase() || "cebolla") ? odioCebolla : null;
}

export default function OdioLaCebolla() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Componente OdioLaCebolla</h2>
      <textarea id="textArea" value={text} onChange={handleChange} />
      {odiar(text)}
    </div>
  );
}
