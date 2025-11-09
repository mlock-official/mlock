import Image from "next/image";
import HomeJourney from "./HomeComponents/HomeJourney";
import HomeJourney2 from "./HomeComponents/HomeJourney2";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {

  const images = [
    "Home/Gallery/img1.png",
    "Home/Gallery/img2.png",
    "Home/Gallery/img3.png",
    "Home/Gallery/img4.png",
    "Home/Gallery/img5.png",
    "Home/Gallery/img6.png",
  ];

  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-20">
        <h1 className="mx-6 mt-10 text-5xl md:text-7xl font-bold text-[#0a1904]">
          India&#8217;s <span className="text-[#18ee18]">Smart</span>
          <br />
          Luggage Station
        </h1>
        <p className="mx-6 mt-3 text-2xl font-semibold text-[#0a1904]">
          Join the future of seamless travel with secure, convenient, and innovative luggage solutions.
        </p>
      </section>

      <section className="mt-8">
        <HomeJourney />
      </section>

      <section className="mt-8">
        <HomeJourney2 />
      </section>

      <section className="py-16 bg-linear-to-b from-white via-[#f7fff7] to-white">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-[#0a1904] leading-snug">
          Be a part of the change — <br className="sm:hidden" />
          <span className="text-[#18ee18]">secure, store, and explore</span> with Mlock!
        </h2>

        {/* Social icons row */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-[#18ee18]">
          {[
            { icon: FaInstagram, label: "Instagram" },
            { icon: FaFacebookF, label: "Facebook" },
            { icon: FaLinkedinIn, label: "LinkedIn" },
            { icon: FaTwitter, label: "Twitter" },
            { icon: FaYoutube, label: "YouTube" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="hover:scale-110 transition-transform duration-200 ease-in-out"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>

        {/* Image grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4">
          {images.map((img) => (
            <div
              key={img}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/${img}`}
                alt={img}
                width={260}
                height={350}
                className="h-[220px] w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
