import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Perps from "./components/Perps";
import SwapSection from "./components/SwapSection";
import Devs from "./components/Devs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="text-white max-w-[1800px] mx-auto font-victor-mono flex flex-col">
      <Navbar />

      <div className="w-[95%] mx-auto">
        <Reveal>
          <Hero />
        </Reveal>
      </div>

      <div className="w-[95%] mx-auto mt-[200px]">
        <Reveal>
          <Perps />
        </Reveal>
      </div>

      <div className="mt-[200px]">
        <Reveal>
          <SwapSection />
        </Reveal>
      </div>

      <div className="w-[95%] mx-auto mt-[200px]">
        <Reveal>
          <Devs />
        </Reveal>
      </div>

      <div className="w-[95%] mx-auto mb-[150px]">
        <Reveal>
          <Partners />
        </Reveal>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
