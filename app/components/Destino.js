"use client";

import { useState } from "react";
import ImagenCiudad from "./ImagenCiudades";
import boston from "../../public/img/boston.jpeg";
import buenosaires from "../../public/img/buenosaires.jpeg";
import praga from "../../public/img/praga.jpeg";
import sydney from "../../public/img/sydney.jpeg";
import tokio from "../../public/img/tokio.webp";

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
        <ImagenCiudad selectedImage={selectedImage} />
      </div>
      <a href="https://github.com/iesgrancapitan-hlc/listado-de-componentes-con-next-js-javierrm11/blob/main/proyecto/app/components/Destino.js">Enlace al repositorio</a>
    </div>
  );
}
