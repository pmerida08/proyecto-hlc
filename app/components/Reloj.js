"use client";
import { useState, useEffect } from "react";
import "../styles/components.css";
import "../styles/reloj.css";

export default function Reloj() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="component">
      <h2>Componente Reloj</h2>
      <h3>Fecha: {date || "Cargando..."}</h3>
      <h3>Hora: {time || "Cargando..."}</h3>
    </div>
  );
}
