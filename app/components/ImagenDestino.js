"use client";

import "../styles/components.css";
import "../styles/imgdestino.css";
import Image from "next/image";
import boston from "../img/boston.jpeg";
import buenosaires from "../img/buenosaires.jpeg";
import praga from "../img/praga.jpeg";
import sydney from "../img/sydney.jpeg";
import tokio from "../img/tokio.webp";

const images = [boston, buenosaires, praga, sydney, tokio];

export function ImagenesDestino() {
  return (
    <div className="component">
      <h2>Componente ImagenDestino</h2>
      {images.map((imagen, index) => (
        <Image
          id="imagenDestino"
          key={index}
          src={imagen.src}
          width="150"
          height="150"
          alt="Destino"
        />
      ))}
    </div>
  );
}

export default function ImagenDestino({ selectedImage }) {
  return (
    <div>
      <Image src={selectedImage} width="150" height="150" alt="Destino" />
    </div>
  );
}
