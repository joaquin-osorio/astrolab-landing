import Image from "next/image";
import Hero from '@/components/Hero'
import YouTubeEmbed from "@/components/YoutubeEmbed";
import InfoSection from "@/components/InfoSection";
import { keylab88Specs, keylab49And61Specs } from "@/data/specs";
import Specifications from "@/components/Specifications";
import VideoBanner from "@/components/VideoBanner";
import Gallery from "@/components/Gallery"
import Head from "next/head";
import KnobsSection from "@/components/KnobsSection";
import SoundsSection from "@/components/SoundsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Button from "@/components/Button";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative w-full h-30 bg-white flex justify-center items-center">
        <Image
          src="/assets/arturia-logo.svg"
          alt="Banner principal"
          fill
          className="py-5"
        />
      </header>
      <main className="">
        <Hero />
        <YouTubeEmbed url="https://www.youtube.com/watch?v=w7WfcjNWcH4" />
        <InfoSection />
        <KnobsSection />

        <div className='w-full h-64 md:h-[60rem] relative overflow-hidden'>
          <Image
            src="/assets/Astrolab-playing.webp"
            alt="Banner principal"
            fill
            className='object-cover'
            quality={100}
          />
        </div>
        <SoundsSection />
        <div className='w-full h-64 md:h-[60rem] relative overflow-hidden'>
          <Image
            src="/assets/astrolab-detail.jpg"
            alt="Banner principal"
            fill
            className='object-cover'
            quality={100}
          />
        </div>
        <FeaturesSection />
        <div className="w-full flex flex-row justify-center items-center my-5">
          <Button />

        </div>
        <div className='w-full h-64 md:h-[60rem] relative overflow-hidden'>
          <Image
            src="/assets/astrolab-in-space.webp"
            alt="Banner principal"
            fill
            className='object-cover'
            quality={100}
          />
        </div>


        {/* <Specifications title='KeyLab 88 Mk3' specs={keylab88Specs} />
        <Specifications title='KeyLab 49/61 Mk3' specs={keylab49And61Specs} />
        <div className="w-full h-auto md:h-96 flex justify-center my-20 flex flex-col items-left md:items-center px-3">
          <p className="text-base md:text-xl font-mono font-medium mb-1 text-black">¿Querés saber más detalles?</p>
          <p className="text-base md:text-xl font-mono font-medium mb-6 text-black">Hacé click en algún modelo para saber más</p>
          <Gallery
            images={['/assets/optimized/49_Mk3-no-bg.webp', '/assets/optimized/61_mk3-no-bg.webp', '/assets/optimized/88_mk3-no-bg.webp']}
            titles={['KeyLab 49 Mk3', 'KeyLab 61 Mk3', 'KeyLab 88 Mk3']}
            links={['https://www.pcmidi.com.ar/search/?q=keylab49mk3', 'https://www.pcmidi.com.ar/search/?q=keylab61mk3#', 'https://www.pcmidi.com.ar/search/?q=keylab88mk3']}
          />
        </div>
        <div className='w-full h-64 md:h-[40rem] relative overflow-hidden'>
          <Image
            src="/assets/optimized/keylab-closeup.webp"
            alt="Banner principal"
            fill
            className='object-cover'
            quality={100}
          />
        </div> */}
      </main>
      <footer className="w-full h-32 bg-black text-gray-50 flex flex-col items-center justify-center gap-y-2">
        <div className="text-center text-[0.7rem] md:text-base font-[supply-light]">
          PC MIDI Center distribuidor oficial de Arturia en Argentina
        </div>
        <div className="text-center text-[0.6rem] md:text-base font-[supply-light]">
          Made with ❤️ by ✨<a
            href="/r/github"
            className="underline"
          >
            Joaquín
          </a>✨
        </div>
      </footer>
    </div>
  );
}
