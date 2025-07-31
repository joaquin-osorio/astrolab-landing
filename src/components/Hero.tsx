import React from "react";
import Image from "next/image";
import Button from '@/components/Button'

export default function Hero(): JSX.Element {
    return (
        <div className='flex flex-col md:flex-row w-full pt-20 pb-5 mb-20'>
            <div className="order-2 md:order-1 w-full md:w-1/2 relative md:pl-12 px-4">
                <h1 className='text-black text-4xl md:text-5xl py-2 font-[supply-medium] '>_KeyLab 88 Mk3</h1>
                <h1 className='text-black text-4xl md:text-5xl py-2 font-[supply-medium]'>_KeyLab 61 Mk3</h1>
                <h1 className='text-black text-4xl md:text-5xl py-2 font-[supply-medium]'>_KeyLab 49 Mk3</h1>
                <h3 className='text-black text-4xl md:text-5xl py-2 font-[supply-light]'>Controladores Midi universales</h3>
                <div className='text-black text-md py-5 font-[supply-light]'>
                    El KeyLab mk3 es un controlador MIDI avanzado que cumple con todos los requisitos para uso profesional y se integra a la perfección con instrumentos de software y hardware. Con un teclado semicontrapesado, controles táctiles y funciones creativas innovadoras, todo está integrado en un chasis robusto y de alta calidad: descubre un teclado en el que puedes confiar en cualquier situación.


                </div>
                <div className="mt-10">
                    <Button />
                </div>
            </div>
            <div className='order-1 md:order-2 w-full md:w-1/2 relative overflow-hidden h-72 md:h-auto'>
                <Image
                    src="/assets/keylab-collage.png"
                    alt="Banner principal"
                    fill
                    className='object-contain md:object-right object-center transform translate-x-5 transition-transform duration-500 ease-out hover:translate-x-0'
                />
            </div>
        </div>
    );
}