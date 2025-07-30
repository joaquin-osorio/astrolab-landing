import React from "react";
import Image from "next/image";


export default function InfoSection(): JSX.Element {
    return (
        <div className='flex w-full h-[100vh]'>
            <div className="w-1/2 flex  flex-col py-10 px-32">
                {/* Acá va el texto */}
                <h1 className="text-black text-5xl py-1 font-[supply-medium]">_Claves Premium</h1>
                <h3 className="text-black text-5xl py-1 mb-5     font-[supply-light]">Para creativos modernos</h3>
                <div className='text-black text-md py-2 font-[supply-light]'>
                    Con un teclado de acción de martillo de tamaño completo con aftertouch e integración de software perfecta, revestido de materiales robustos de alta calidad y un sofisticado panel de madera, el KeyLab 88 no solo tiene un aspecto profesional sino que también durará mucho tiempo tanto en el escenario como en el estudio.
                </div>
                <div className='text-black text-md py-2 font-[supply-light]'>
                    Con una impresionante pantalla visual que ofrece información contextual en tiempo real, controles sensibles a la presión y funciones innovadoras, el proceso de producción musical alcanza un nuevo nivel. La integración perfecta con Analog Lab Pro y los principales DAW, así como el soporte inteligente para la ideación musical, permiten un control sin precedentes sobre toda la configuración.
                </div>
                <h6 className="text-black text-md mt-4 font-[supply-bold]">Integración Profunda</h6>
                <div className='text-black text-md py-2 font-[supply-light]'>
                    KeyLab ofrece conectividad avanzada con todos los DAW principales, incluidos los protocolos MCU/HUI, lo que le permite ver información contextual en pantalla, crear programas de usuario y tener control total sobre su software e instrumentos de producción musical.
                </div>
                <h6 className="text-black text-md mt-4 font-[supply-bold]">Facilidad de uso y calidad de construcción superiores:</h6>
                <div className='text-black text-md py-2 font-[supply-light]'>
                    El KeyLab combina un diseño excelente y un teclado de acción de martillo con componentes de madera y aluminio de alta calidad. Su robusta construcción garantiza fiabilidad y durabilidad, satisfaciendo las necesidades del uso profesional.
                </div>
                <h6 className="text-black text-md mt-4 font-[supply-bold]">Completamente equipados</h6>
                <div className='text-black text-md py-2 font-[supply-light]'>
                    Desde configuraciones MIDI personalizables y controles intuitivos hasta funciones creativas avanzadas que ayudan a la ideación musical, KeyLab es un poderoso aliado tanto en el estudio como en el escenario.
                </div>
            </div>
            <div className="w-1/2 relative">
                <Image
                    src="/assets/keylab-playing.jpg"
                    alt="Gallery"
                    fill
                    className='object-cover'
                />
            </div>

        </div>
    );
}
