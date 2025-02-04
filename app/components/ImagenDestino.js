"use client";

import Image from "next/image";
import boston from "../../public/img/boston.jpeg";
import buenosaires from "../../public/img/buenosaires.jpeg";
import praga from "../../public/img/praga.jpeg";
import sydney from "../../public/img/sydney.jpeg";
import tokio from "../../public/img/tokio.webp";

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
