import React from "react";
import Image from "next/image";

export interface GalleryProps {
  images: string[];
  titles: string[];
  links: string[];
}

export default function Gallery({
  images,
  titles,
  links,
}: GalleryProps): JSX.Element {
  return (
    <div className="flex w-[80vw] h-full bg-gray-50">
        {images.map((src,i) => {
          console.log(images[i])
          return(
            <a key={i} href={links[i]} className="h-full w-1/3" target="_blank">
              <div className="">
                <div className=" relative w-full h-64 transform scale-100 transition-transform duration-500 ease-out hover:scale-110">
                  <Image 
                    src={images[i]}
                    alt={titles[i]}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="ml-10 text-black text-md mt-4 font-[supply-bold]">{titles[i]}</h3>
              </div>
            </a>
          )
        })}
    </div>
  );
}
