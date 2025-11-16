"use client";
import { useState } from "react";

export default function Pricing() {
  const [tab, setTab] = useState("indore");

  const indoreSlides = [
    {
      title: "Small Size Locker",
      desc: "[H:W:D 36:28:38 cm] / 3kg",
      durations: ["30 min - ₹9", "1 hr - ₹15", "3 hr - ₹45", "5 hr - ₹75"],
    },
    {
      title: "Medium Size Locker",
      desc: "[H:W:D 55:36:35 cm] / 8kg",
      durations: ["30 min - ₹15", "1 hr - ₹24", "3 hr - ₹72", "5 hr - ₹120"],
    },
    {
      title: "Large Size Locker",
      desc: "[H:W:D 77:55:60 cm] / 13kg",
      durations: ["30 min - ₹21", "1 hr - ₹30", "3 hr - ₹90", "5 hr - ₹150"],
    },
  ];

  const ujjainSlides = [
    {
      title: "Small Size Locker",
      desc: "[H:W:D 36:28:38 cm] / 3kg",
      durations: ["30 min - ₹9", "1 hr - ₹15", "3 hr - ₹45", "5 hr - ₹75"],
    },
    {
      title: "Medium Size Locker",
      desc: "[H:W:D 55:36:35 cm] / 8kg",
      durations: ["30 min - ₹15", "1 hr - ₹24", "3 hr - ₹72", "5 hr - ₹120"],
    },
    {
      title: "Large Size Locker",
      desc: "[H:W:D 77:55:60 cm] / 13kg",
      durations: ["30 min - ₹21", "1 hr - ₹30", "3 hr - ₹90", "5 hr - ₹150"],
    },
  ];

  const activeSlides = tab === "indore" ? indoreSlides : ujjainSlides;

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-17">
        <div>
          <h1 className="text-4xl font-bold text-[#0a1904]">Let’s Unlock</h1>
          <h2 className="text-2xl font-bold text-[#18ee18] mt-1">
            Security | Convenience | Freedom
          </h2>
          <p className="mt-4 text-lg text-[#0a1904]">
            We have a plan for every traveler—whether you're exploring a new city, commuting daily, or simply need a secure place to store your luggage.
          </p>
          <p className="mt-2 font-semibold text-[#0a1904]">
            Whatever your journey, we’re here to keep your belongings safe, 16/7.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mx-auto max-w-5xl px-6 mb-16">
        <div className="flex justify-center gap-4 mb-8">
          {["indore", "ujjain"].map((city) => (
            <button
              key={city}
              onClick={() => setTab(city)}
              className={`rounded-full px-5 py-2 font-medium transition-colors duration-200 cursor-pointer ${
                tab === city
                  ? "bg-[#18ee18] text-white shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>

        {/* Slides Section */}
        <div className="slides grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeSlides.map((card, i) => (
            <div
              key={i}
              className="card rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#0a1904]">{card.title}</h3>
              {card.desc && <p className="text-sm text-gray-600 mt-1">{card.desc}</p>}
              <div className="mt-4 space-y-1">
                {card.durations.map((example, idx) => (
                  <p key={idx} className="text-md text-gray-700">{example}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}