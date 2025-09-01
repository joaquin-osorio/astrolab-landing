import React from "react";
import Image from "next/image";


export default function InfoSection() {
  return (
    <section className="w-full overflow-visible py-0">
      <div className="flex flex-col md:flex-row md:px-0 gap-8 md:gap-0">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 py-10 px-6 md:px-32">
          <h1 className="text-black text-4xl font-[supply-medium]">
            _Ve mas allá
          </h1>
          <h3 className="text-black text-4xl font-[supply-light]">
            Redefinición del teclado de alto rendimiento
          </h3>
          <p className="text-black text-base font-[supply-light]">
            AstroLab 88 es un instrumento construido para la era moderna y diseñado para músicos y productores que buscan más libertad creativa. Con su teclado Fatar TP-40L contrapesado de alta calidad, captura cada matiz de tu interpretación, brindándote una experiencia altamente expresiva y sensible, además de más espacio para configuraciones de teclado dividido.
          </p>
          <p className="text-black text-base font-[supply-light]">
            Con síntesis virtual avanzada incorporada junto con un ecosistema innovador y controles esenciales que te permiten centrarte en tocar, AstroLab 88 tiende un puente entre la producción de estudio, la interpretación en directo y la expresión creativa sin trabas.
          </p>
          <p className="text-black text-base font-[supply-light]">
            Con más de 1600 presets diseñados específicamente para el escenario, y la capacidad de integrar una gama casi infinita de sonidos personalizados, AstroLab 88 te permite pasar sin problemas entre auténticos pianos, icónicos timbres de teclado vintage y texturas de sintetizador modernas.
          </p>
          <p className="text-black text-base font-[supply-light]">
            Con AstroLab, lleva tus sonidos de interpretación más allá de los samples, tu setup de escenario más allá de la complicación y tus creaciones de estudio más allá de los confines de tu DAW.
          </p>

          <h6 className="text-black text-base font-[supply-bold]">
            Completo control creativo
          </h6>
          <p className="text-black text-base font-[supply-light]">
            AstroLab es un instrumento autónomo
            que facilita más que nunca la
            interpretación de todos tus sonidos
            característicos sin necesidad de
            ordenador.
          </p>
          <p className="text-black text-base font-[supply-light]">
            Edita un sonido en profundidad en
            Analog Lab, utilízalo para la
            producción en tu DAW, arrástralo
            a la biblioteca AstroLab a través
            de Analog Lab, asigna efectos
            personalizados y dispón de todos
            los sonidos y ajustes que
            necesites cuando actúes.
          </p>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-screen">
          <Image  
            src="/assets/astrolab-playing.jpg"
            alt="KeyLab tocando"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

