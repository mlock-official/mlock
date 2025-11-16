"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
    const [success, setSuccess] = useState(false);

    async function onSubmit(e) {

        toast.success("✅ Message sent successfully!");
        e.preventDefault();
        const form = e.currentTarget;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            location: form.location.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
                form.reset();
            } else {
                toast.error("Oops! Something went wrong.");
            }
        } catch {
            toast.error("Network error! Please check your connection.");
        }
    }

    return (
        <main className="bg-white text-black">
            <Toaster position="top-center" reverseOrder={false} />
            <section className="mx-auto max-w-6xl px-6 py-12 mt-17">
                <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">Contact Us</h1>
                <p className="mb-8 text-center text-lg text-gray-600">
                    Your Queries, Our Priority — We're Here to Help Anytime!
                </p>

                {success && (
                    <div className="mb-6 rounded-md bg-green-100 px-4 py-3 text-green-800 text-center font-medium">
                        ✅ Your message has been sent successfully!
                    </div>
                )}

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <form onSubmit={onSubmit} className="space-y-5">
                        <input
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#18ee18] focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#18ee18] focus:outline-none"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#18ee18] focus:outline-none"
                        />
                        <input
                            name="location"
                            placeholder="Your Area/Location"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#18ee18] focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 h-32 resize-none focus:border-[#18ee18] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="cursor-pointer w-full rounded-md bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="space-y-4 text-[16px] text-gray-700">
                        <div>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:mlockofficial@gmail.com" className="text-blue-600 underline">
                                mlockofficial@gmail.com
                            </a>
                        </div>
                        <div>
                            <strong>Phone:</strong> +91 8989494417 / 9826080407
                        </div>
                        <div>
                            <strong>Office Address:</strong> Mlock Pvt Ltd, 39 Uday Nagar, Bhicholi Hapsi Road, Indore - 452001
                        </div>
                        <div>
                            <strong>Working Hours:</strong> Monday to Saturday, 9:00 AM – 7:00 PM
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}