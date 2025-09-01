import React from "react";

export default function SoundsSection() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl px-6 md:px-10 py-14 flex flex-col gap-8">
        <h2 className="text-black text-4xl md:text-5xl font-[supply-medium]">
          _Instrumentos icónicos
        </h2>

        <p className="text-black text-base md:text-lg font-[supply-light] leading-relaxed">
          Descubre una amplia biblioteca de instrumentos y sonidos diseñada para adaptarse a todos los
          géneros y épocas musicales: desde instrumentos de interpretación esenciales y sonidos acústicos
          reales hasta sintetizadores atemporales y nítidos paisajes digitales.
        </p>

        <p className="text-black text-base md:text-lg font-[supply-light] leading-relaxed">
          <span className="font-[supply-medium]">
            AstroLab incluye 34 instrumentos originales integrados en el hardware.
          </span>{" "}
          Elige entre un piano profundamente modelado, un sintetizador clásico como el Roland Juno o el DX7,
          o un teclado eléctrico como el Wurlitzer: tú decides.
        </p>

        {/* Listado en 3 columnas (1 en mobile, 3 en md+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ul className="list-disc pl-6 space-y-2 text-black text-base font-[supply-light]">
            <li>Emulator II V</li>
            <li>DX7 V</li>
            <li>Augmented VOICES</li>
            <li>Jun-6 V</li>
            <li>Jup-8 V</li>
            <li>CS-80 V</li>
            <li>Augmented STRINGS</li>
            <li>Pigments</li>
            <li>KORG MS-20 V</li>
            <li>Prophet 5 V</li>
            <li>Synclavier V</li>
            <li>Synthi V</li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 text-black text-base font-[supply-light]">
            <li>Prophet-VS V</li>
            <li>ARP2600 V</li>
            <li>Wurli V</li>
            <li>Modular V</li>
            <li>OP-Xa V</li>
            <li>Stage-73 V</li>
            <li>CZ V</li>
            <li>Vox Continental V</li>
            <li>V-3 V</li>
            <li>Clavinet V</li>
            <li>CMI V</li>
            <li>Mini V</li>
          </ul>

          <ul className="list-disc pl-6 space-y-2 text-black text-base font-[supply-light]">
            <li>Vocoder V</li>
            <li>Augmented GRAND PIANO</li>
            <li>Buchla easel V</li>
            <li>Farfisa V</li>
            <li>Matrix-12 V</li>
            <li>Piano V</li>
            <li>SEM V</li>
            <li>Solina V</li>
            <li>SQ80 V</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
