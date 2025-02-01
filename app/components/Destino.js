"use client";

import { useState } from "react";
import ImagenDestino from "./ImagenDestino";
import "../styles/destino.css";
import "../styles/components.css";
import boston from "../img/boston.jpeg";
import buenosaires from "../img/buenosaires.jpeg";
import praga from "../img/praga.jpeg";
import sydney from "../img/sydney.jpeg";
import tokio from "../img/tokio.webp";

export default function Destino() {
  const [selectedImage, setSelectedImage] = useState(boston.src);

  const handleClick = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "boston":
        setSelectedImage(boston.src);
        break;
      case "buenosaires":
        setSelectedImage(buenosaires.src);
        break;
      case "praga":
        setSelectedImage(praga.src);
        break;
      case "sydney":
        setSelectedImage(sydney.src);
        break;
      case "tokio":
        setSelectedImage(tokio.src);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

  return (
    <div className="component">
      <h2>Componente Destino</h2>
      <select id="election" onChange={handleClick}>
        <option value="boston">Boston</option>
        <option value="buenosaires">Buenos Aires</option>
        <option value="praga">Praga</option>
        <option value="sydney">Sydney</option>
        <option value="tokio">Tokio</option>
      </select>
      <div>
        <ImagenDestino selectedImage={selectedImage} />
      </div>
    </div>
  );
}
