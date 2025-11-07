"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircularFlow from "./CircularFlow";
import Phone from "./Phone";
export default function JourneySteps() {
  return (
    <section className="bg-white py-6 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 items-start gap-8">
        {/* Left: 3/4 width */}
        <div className="md:col-span-9 flex flex-col justify-center">
          <div className="mb-8 flex justify-center items-center w-full overflow-visible">
            <div className="w-[400px]">
              <CircularFlow />
            </div>
          </div>

          <div className="space-y-3 text-[#0a1904] text-xl py-6">
            <p><span className="text-[#18ee18]">✔</span> Choose from minute-based, hourly, and daily plans.</p>
            <p><span className="text-[#18ee18]">✔</span> Safe & secure luggage storage—anytime, anywhere.</p>
            <p><span className="text-[#18ee18]">✔</span> Service available 16/7.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-[#18ee18] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0a1904] transition"
            >
              Download The App
            </Link>
            <Link
              href="#"
              className="bg-white text-[#18ee18] font-bold py-3 px-6 rounded-md hover:bg-[#0a1904] transition"
            >
              Check Pricing
            </Link>
          </div>
        </div>

        {/* Right: 1/4 width */}
        <div className="md:col-span-3 flex justify-center items-start">
          <Phone/>
        </div>
      </div>
    </section>
  );
}