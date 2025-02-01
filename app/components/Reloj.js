'use client';

import React, { useState, useEffect } from 'react';

export default function Reloj() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <main>
        <h2>Componente Reloj</h2>
        <h3>Fecha: {date}</h3>
        <h3>Hora: {time}</h3>
      </main>
    );
  }