import Image from "next/image";
import HomeJourney from "./HomeComponents/HomeJourney";
import Demo from "./HomeComponents/Phone";
import HomeJourney2 from "./HomeComponents/HomeJourney2";

export default function Home() {
  return (
      <main>
      {/* Hero */}
      <section className="px-6 pt-8">
        <h1 className="mx-6 mt-10 text-5xl font-bold text-[#0a1904]">
          India's <span className="text-[#18ee18]">Smart</span>
          <br />
          Luggage Station
        </h1>
        <p className="mx-6 mt-3 max-w-2xl text-2xl font-semibold text-[#0a1904]">
          Join the future of seamless travel with secure, convenient, and innovative luggage solutions.
        </p>
      </section>

      <section className="mt-8">
        <HomeJourney />
      </section>

      <section className="mt-8">
        <HomeJourney2/>
      </section>
    </main>
  );
}
