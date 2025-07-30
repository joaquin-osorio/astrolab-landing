// src/components/Specifications.tsx
import React from "react";

export interface SpecificationsProps {
  title: string;
  specs: Record<string, string[]>;
}

export default function Specifications({
  title,
  specs,
}: SpecificationsProps): JSX.Element {
  const caracteristicas = specs["Características"] || [];
  const otherSections = Object.entries(specs).filter(
    ([key]) => key !== "Características"
  );

  return (
    <section className="w-screen overflow-hidden py-10">
      <div className="flex flex-wrap pl-10">
        {/* 1/3 Left */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex flex-col justify-start">
          <h1 className="text-black text-5xl py-2 font-[supply-medium]">
            _Características
          </h1>
          <h2 className="text-black text-5xl py-2 font-[supply-light]">
            {title}
          </h2>
        </div>

        {/* 1/3 Center */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 ">
          <h3 className="font-mono font-bold mb-2 text-black">
            Características
          </h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            {caracteristicas.map((item, i) => (
              <li
                key={i}
                className="text-black text-base font-[supply-light]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 1/3 right */}
        <div className="w-full md:w-1/3 px-4">
          {otherSections.map(([heading, items]) => (
            <div key={heading} className="mb-6 px-10">
              <h3 className="font-mono font-bold mb-2 text-black">
                {heading}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-lg">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="text-black text-base font-[supply-light]"
                  >
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
