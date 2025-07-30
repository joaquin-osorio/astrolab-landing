import React from "react";


export default function Button(): JSX.Element {
  return (
    <div className='flex h-15'>
        <div className="bg-black w-3"></div>
        <div className="bg-[#1217f7] p-2 text-xl text-bold text-center hover:bg-black transition duration-300 py-1 font-[supply-medium]" >Disponible     en... </div>
    </div>
  );
}
