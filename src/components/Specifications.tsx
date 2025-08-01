// src/components/Specifications.tsx
import React from "react";

export interface SpecificationsProps {
  title: string;
  specs: Record<string, string[]>;
}

export default function Specifications({
  title,
  specs,
}: SpecificationsProps) {
  const caracteristicas = specs["Características"] || [];
  const otherSections = Object.entries(specs).filter(
    ([key]) => key !== "Características"
  );

  return (
    <section className="w-screen overflow-hidden py-10">
      {/* wrapper: columna en mobile, fila en md, con gaps y padding centralizado */}
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-6 px-4 md:px-10">
        {/* Left */}
        <div className="w-full md:w-1/3">
          <h1 className="text-black text-4xl py-2 font-[supply-medium]">
            _Características
          </h1>
          <h2 className="text-black text-4xl py-2 font-[supply-light]">
            {title}
          </h2>
        </div>

        {/* Center */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg md:text-xl font-mono font-bold mb-2 text-black">
            Características
          </h3>
          <ul className="list-disc list-inside space-y-1 text-base md:text-lg">
            {caracteristicas.map((item, i) => (
              <li key={i} className="text-black font-[supply-light]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/3 space-y-6">
          {otherSections.map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-lg md:text-xl font-mono font-bold mb-2 text-black">
                {heading}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base md:text-lg">
                {items.map((item, j) => (
                  <li key={j} className="text-black font-[supply-light]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
