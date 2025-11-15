"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Mlock?", a: "Mlock is a smart luggage storage solution designed for seamless, secure, and convenient travel experiences." },
  { q: "Where Can I Find Mlock Station?", a: "At major airports, train stations, and popular tourist spots. Use the app to find the nearest station." },
  { q: "How Secure is the Storage?", a: "24/7 surveillance, secure lockers, and advanced tracking systems keep your luggage safe." },
  { q: "How Can I Book a Storage?", a: "Book via our website or app: choose a station, select your time, and confirm the booking." },
  { q: "What Payment Methods are Accepted?", a: "Credit/debit cards and mobile payments such as UPI, Paytm, and Google Pay." },
  { q: "Can I Track My Booking History?", a: "Yes, check the 'My Bookings' section in the app." },
  { q: "Does The App Send Notifications?", a: "Yes, real-time notifications for confirmations, updates, and reminders." },
  { q: "Can I Cancel My Booking?", a: "Yes, cancellations are allowed before the scheduled time." },
  { q: "Will my payment be refunded on cancellation?", a: "Refunds depend on the cancellation policy. Please review the policy for details." },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <main className="bg-linear-to-br from-white to-gray-100 text-black min-h-screen mt-17">
      <section className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
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
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-gray-300 bg-white shadow-sm transition hover:shadow-md">
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.q}</span>
                <span className="text-xl">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-4 pb-4 text-gray-600 text-base">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}