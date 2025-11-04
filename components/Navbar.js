"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 py-1 bg-white shadow-md relative z-50">
            {/* Logo */}
            <Link href="/" className="shrink-0">
                <Image
                    className="h-[60px] w-[135px] object-contain"
                    src="/logo.jpg"
                    width={135}
                    height={60}
                    alt="Mlock Logo"
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-7 text-black font-medium">
                {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/safety", label: "Safety" },
                    { href: "/team", label: "Team" },
                    { href: "/blog", label: "Blog" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        className="relative transition duration-300 hover:text-[#18ee18] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#18ee18] hover:after:w-full after:transition-all after:duration-300"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button
                    aria-label="Toggle menu"
                    className="text-3xl text-gray-700 hover:text-[#18ee18] transition duration-300"
                    onClick={() => setOpen((v) => !v)}
                >
                    &#9776;
                </button>
            </div>

            {/* CTA Button */}
            <Link
                href="#"
                className="hidden md:block bg-[#18ee18] text-white font-bold py-3 px-7 rounded-md shadow-md hover:bg-[#4b4b4b] hover:scale-105 transition-all duration-300"
            >
                Download The App
            </Link>

            {/* Mobile Menu */}
            {open && (
                <nav className="absolute left-0 top-[72px] w-full backdrop-blur-md bg-black/70 text-white p-5 md:hidden space-y-2 rounded-b-xl shadow-lg animate-slide-down border-t border-white/10">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About Us" },
                        { href: "/safety", label: "Safety" },
                        { href: "/team", label: "Team" },
                        { href: "/blog", label: "Blog" },
                        { href: "/pricing", label: "Pricing" },
                        { href: "/contact", label: "Contact" },
                    ].map(({ href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            className="block p-2 rounded-md hover:bg-[#18ee18]/90 hover:text-black transition duration-300 font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="block p-3 mt-2 bg-[#18ee18] text-white text-center rounded-md hover:bg-[#4b4b4b] transition duration-300 font-semibold shadow-md"
                        onClick={() => setOpen(false)}
                    >
                        Download The App
                    </Link>
                </nav>
            )}
        </header>
    );
}