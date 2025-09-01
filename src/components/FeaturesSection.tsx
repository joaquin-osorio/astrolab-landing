import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl px-6 md:px-10 py-14 flex flex-col gap-10">
        <h2 className="text-black text-4xl md:text-5xl font-[supply-medium]">
          _Características Principales
        </h2>

        {/* Primer renglón: highlights en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-black text-base md:text-lg font-[supply-light] leading-relaxed">
            Teclado Fatar TP-40L de 88 notas totalmente contrapesadas.


          </p>
          <p className="text-black text-base md:text-lg font-[supply-light] leading-relaxed">
            4 knobs dedicados para controlar FX, incluyendo Delay/Reverb dedicado
          </p>
        </div>

        {/* Contenido principal en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-wide font-[supply-medium] text-gray-700">
                10 motores de sonido
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-black text-base font-[supply-light]">
                <li>Analógico virtual</li>
                <li>Sample</li>
                <li>Tabla de ondas</li>
                <li>FM</li>
                <li>Granular</li>
                <li>Modelado físico</li>
                <li>Síntesis vectorial</li>
                <li>Armónicos</li>
                <li>Distorsión de fase</li>
                <li>Vocoder</li>
              </ul>
            </div>

            <div>
              <p className="text-sm tracking-wide font-[supply-medium] text-gray-700">
                Más de 1300 sonidos incorporados
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-black text-base font-[supply-light]">
                <li>Más de 10.000 sonidos a través del software Arturia</li>
              </ul>
            </div>

            <p className="text-black text-base font-[supply-light]">
              Rueda de navegación y pantalla para navegar fácilmente
            </p>

            <p className="text-black text-base font-[supply-light]">
              10 botones de preset para acceder rápidamente a los sonidos
            </p>

            <div>
              <p className="text-sm tracking-wide font-[supply-medium] text-gray-700">
                4 controles macro para una edición rápida
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-black text-base font-[supply-light]">
                <li>Brightness</li>
                <li>Timbre</li>
                <li>Time</li>
                <li>Movement</li>
              </ul>
            </div>

            <p className="text-black text-base font-[supply-light]">
              12 insertos FX
            </p>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6 text-black text-base font-[supply-light]">
            <p>División multiteclado</p>
            <p>Entrada/salida MIDI IN, entrada estéreo balanceada, pedales de sustain, expresión, aux 1 y 2</p>
            <p>Conexión USB-C y host USB-A</p>
            <p>Entrada de audio Bluetooth y WiFi para control inalámbrico</p>
            <p>Arpegiador, looper MIDI, modos de acorde y escala</p>
          </div>
        </div>
      </div>
    </section>
  );
}
