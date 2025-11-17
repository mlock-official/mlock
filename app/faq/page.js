"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Mlock?", a: "Mlock is a smart luggage storage service where you can securely store your bags at public locations using the Mlock mobile app." },
  { q: "How do I book a locker?", a: "Open the app → Select station → Choose locker → Tap Check-In → Place luggage." },
  { q: "How do I open my locker?", a: "Go to your active booking in the app and tap Check-Out. The locker unlocks automatically." },
  { q: "Where can I find Mlock stations?", a: "The app shows all nearby active stations. Our first stations are being launched across Indore." },
  { q: "Is my luggage safe?", a: "Yes. All Mlock stations are CCTV-monitored, and every locker is digitally controlled. Lockers can be opened only through your registered Mlock app." },
  { q: "What items can I store?", a: "You can store bags, suitcases, backpacks, and travel luggage." },
  { q: "What items are not allowed?", a: "Cash, jewelry, electronics, flammable items, and illegal goods are not allowed." },
  { q: "How long can I store my luggage?", a: "You can store your luggage for as long as you want — hourly, full day, or multiple days. Charges apply based on time used." },
  { q: "What is the price of storage?", a: "Mlock charges affordable pay-per-hour pricing, which depends on locker size and location." },
  { q: "Can I extend my storage time?", a: "Yes. Time will auto-extend when your booking expires. Locker will open only after paying the extra charges." },
  { q: "What payment methods are available?", a: "Currently only UPI is supported. Cards, Wallets, and Net Banking are not available." },
  { q: "Can I cancel my booking?", a: "Yes, you can cancel before check-in. Once checked-in, cancellation is not allowed." },
  { q: "Will I get a refund on cancellation?", a: "If cancelled before check-in, you get a full instant refund." },
  { q: "Can I track my booking history?", a: "Yes, all your past bookings are visible in the 'History' section of your profile." },
  { q: "What if the locker doesn’t open?", a: "Tap Retry, or contact support through the app. We will assist immediately." },
  { q: "Is customer support available?", a: "Yes, you can reach support 24/7 through in-app chat or helpline." }
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <main className="bg-linear-to-br from-white to-gray-100 text-black min-h-screen mt-17">
      <section className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">FAQ</h1>
          <div className="rounded-xl bg-[#0a1904] p-8 text-white shadow-lg">
            <p className="text-4xl font-bold leading-snug">Frequently</p>
            <p className="text-4xl font-bold leading-snug">Asked</p>
            <p className="text-4xl font-bold leading-snug">Questions</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-gray-300 bg-white shadow-sm transition hover:shadow-md">
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.q}</span>
                <span className="text-xl cursor-pointer">{open === idx ? "−" : "+"}</span>
              </button>
              <div
                className={`px-4 pb-4 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                  open === idx ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}