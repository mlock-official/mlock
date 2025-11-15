"use client";
import { useState } from "react";

const images = [
  "2.jpg", "3.jpg", "4.jpg", "A.jpeg", "B.jpeg", "C.jpeg", "D.jpeg",
  "E.jpeg", "F.jpeg", "G.jpeg", "H.jpeg", "I.jpeg", "7.jpg",
];

const videos = [
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759575077/Bus_uvqi8i.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757057/zoo_yabwls.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757102/Temple_vyoght.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757167/Temp2_pmwk2e.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757214/TI_n3pxvh.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757756/local1_x91nwc.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757799/local2_uyebgy.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759575858/phonex1_nvjq24.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757986/Temp_y255vq.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759758532/cC21_tvcqay.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759574706/56_ky9no3.mp4" },
  { src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759574890/aTI_lornav.mp4" },
];

export default function ProblemGalleryPage() {
  const [view, setView] = useState("image");

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Title */}
      <header className="text-center py-8 mt-17">
        <h1 className="text-3xl font-bold tracking-tight inline-block px-4 py-2 rounded">
          Problem for luggage storage in India
        </h1>
      </header>

      {/* Toggle Buttons */}
      <nav className="flex justify-center gap-4 mb-8">
        {["image", "video"].map((type) => (
          <button
            key={type}
            onClick={() => setView(type)}
            className={`cursor-pointer px-5 py-2 text-lg font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#18ee18] ${
              view === type ? "bg-[#18ee18] text-white shadow-md" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            aria-label={`Show ${type} gallery`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}s
          </button>
        ))}
      </nav>

      {/* Gallery */}
      <section className="px-6 pb-12">
        {view === "image" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src) => (
              <img
                key={src}
                src={`/Problem/${src}`}
                alt={`Problem image`}
                className="w-full h-auto rounded-lg object-cover shadow hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((v, index) => (
              <div key={index} className="aspect-video bg-black rounded-lg overflow-hidden shadow">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                  title={`Problem video ${index + 1}`}
                >
                  <source src={v.src} />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}