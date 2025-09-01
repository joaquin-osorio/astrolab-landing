import React from "react";

export default function Button() {
  return (
    <a
      className="flex h-15"
      href="https://www.pcmidi.com.ar/productos/sintetizador-arturia-astrolab-88-teclas/"
      target="_blank"
    >
      <div className="bg-black w-3"></div>
      <div className="flex items-center justify-center bg-[#1217f7] text-xl text-center font-[supply-medium] text-white px-4 hover:bg-black transition duration-300">
        Conseguilo Acá
      </div>
    </a>
  );
}
