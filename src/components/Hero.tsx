import React from "react";
import Image from "next/image";
import Button from '@/components/Button'

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row w-full pt-20 pb-5 mb-20'>
            <div className="order-2 md:order-1 w-full md:w-1/2 relative md:pl-12 px-4">
                <h1 className='text-black text-4xl md:text-5xl py-2 font-[supply-medium] '>_Astrolab 88</h1>
                <h3 className='text-black text-4xl md:text-5xl py-2 font-[supply-light]'>Teclado de escenario vanguardista</h3>
                <div className='text-black text-md py-5 font-[supply-light]'>
Explora un amplio espectro de sonidos clásicos y modernos. AstroLab 88 es un teclado de escenario de 88 teclas contrapesadas que combina la potencia de la síntesis, controles intuitivos y un ecosistema innovador, invitándote a centrarte en tu expresión creativa y a pasar sin problemas del estudio al escenario.


                </div>
                <div className="mt-10">
                    <Button />
                </div>
            </div>
            <div className='order-1 md:order-2 w-full md:w-1/2 relative overflow-hidden h-72 md:h-96'>
                <Image
                    src="/assets/astrolab-collage.png"
                    alt="Banner principal"
                    fill
                    className='object-contain md:object-right object-center transform translate-x-5 transition-transform duration-500 ease-out hover:translate-x-0'
                />
            </div>
        </div>
    );
}