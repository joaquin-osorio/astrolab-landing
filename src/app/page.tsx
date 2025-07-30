import Image from "next/image";
import Hero from '@/components/Hero'
import YouTubeEmbed from "@/components/YoutubeEmbed";
import InfoSection from "@/components/InfoSection";

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
      </main>
    </div>
  );
}
