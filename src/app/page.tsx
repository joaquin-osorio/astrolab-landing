import Image from "next/image";
import Hero from '@/components/Hero'
import YouTubeEmbed from "@/components/YoutubeEmbed";
import InfoSection from "@/components/InfoSection";
import { keylab88Specs, keylab49And61Specs } from "@/data/specs";
import Specifications from "@/components/Specifications";
import VideoBanner from "@/components/VideoBanner";
import video from "@/pu"
import Gallery from "@/components/Gallery"


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative w-full h-30 bg-white">
        <Image
          src="/assets/arturia-logo.svg"
          alt="Banner principal"
          fill 
          className="py-5"
        />
      </header>
      <main className="">
        <Hero/>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=-Tmp2mQ7Wfs"/>
        <InfoSection/>
        <VideoBanner src="/assets/render-loop.mp4" heightClass="h-[500px]"/>
        <Specifications title='Keylab 88 Mk3' specs={keylab88Specs}/>
        <Specifications title='Keylab 49/61 Mk3' specs={keylab49And61Specs}/>
        <div className="w-full h-96 flex justify-center">
          <Gallery 
            images={['/assets/49_Mk3-no-bg.png','/assets/61_Mk3-no-bg.png','/assets/88_Mk3-no-bg.png']}
            titles={['Keylab 49 Mk3', 'Keylab 61 Mk3', 'Keylab 88 Mk3']}
            links={['#','#','#']}
          />
        </div>
      </main>
    </div>
  );
}
