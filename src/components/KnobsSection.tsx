import React from "react";
import Image from "next/image";

export default function KnobsSection() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-lg px-6 md:px-10 py-10 flex flex-col gap-8">
        <h1 className="text-black text-4xl font-[supply-medium]">
          _Controles intuitivos
        </h1>

        <p className="text-black text-base font-[supply-light]">
          No hace falta pensárselo dos veces en el escenario o en el estudio.
        </p>

        <p className="text-black text-base font-[supply-light]">
          La rueda de navegación y los botones de preset de AstroLab hacen que
          la selección de sonidos resulte fácil y gratificante. Además, ajusta
          los sonidos en profundidad con una serie de controles esenciales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloque 4 macros */}
          <div>
            <h3 className="text-black text-2xl font-[supply-light]">4 macros</h3>
            <p className="text-black text-base font-[supply-light]">
              Ajusta el tono con Brightness, modifica la forma de onda y los
              ajustes del filtro con Timbre o utiliza Movement para controlar
              efectos moduladores como el vibrato o el trémolo.
            </p>
            <div className="mt-4">
              <Image
                src="/assets/controls-instrument.jpg"
                alt="Controles de macros del instrumento"
                width={1200}
                height={600}
                className="w-full h-auto rounded-md"
                priority
              />
            </div>
          </div>

          {/* Bloque 4 efectos */}
          <div>
            <h3 className="text-black text-2xl font-[supply-light]">4 efectos</h3>
            <p className="text-black text-base font-[supply-light]">
              Añade espacialidad a cualquier sonido con un Delay y una Reverb
              dedicados, y realiza ajustes impactantes con 2 efectos de
              inserción, todos personalizables.
            </p>
            <div className="mt-4">
              <Image
                src="/assets/controls-effects.jpg"
                alt="Controles de efectos"
                width={1200}
                height={600}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
