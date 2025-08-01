import React from "react";

export default function Button(): JSX.Element {
  return (
    <a className='flex h-15' href="https://www.pcmidi.com.ar/search/?q=landingkeylab" target="_blank">
        <div className="bg-black w-3"></div>
        <div className="bg-[#1217f7] p-2 text-xl text-bold text-center hover:bg-black transition duration-300 py-1 pr-4 font-[supply-medium]" >Conseguilo Acá </div>
    </a>
  );
}
