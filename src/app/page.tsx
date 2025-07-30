import Image from "next/image";
import Hero from '@/components/Hero'

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
      </main>
    </div>
  );
}
