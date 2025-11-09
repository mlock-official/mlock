import Image from "next/image";

export default function About() {
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 pt-25 bg-gray-100 gap-10">
                {/* Left Content */}
                <div className="w-full md:w-3/5 space-y-6 xl:pl-10">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0a1904] leading-snug">
                        India&apos;s Trusted <br />
                        <span className="text-[#18ee18] text-2xl sm:text-3xl md:text-6xl font-bold">
                            Luggage Station Service
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-700">
                        Travel light, stress-free, and with confidence! At <strong>Mlock</strong>, we understand that carrying luggage
                        while exploring a city, attending meetings, or waiting for check-in can be a hassle. That&#8217;s why we offer a
                        smart, secure, and seamless luggage storage solution—so you can focus on what truly matters.
                    </p>

                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-lg sm:text-xl font-bold text-[#0a1904]">
                            Why Choose <span className="text-[#18ee18] font-extrabold">M</span>
                            <span className="text-[#0a1904] font-extrabold">lock?</span>
                        </h2>
                        <div className="space-y-2 text-gray-800 text-sm sm:text-base">
                            <p>📍 <strong>Easily Accessible Locations</strong> - Major transit hubs, shopping centers, and tourist hotspots.</p>
                            <p>📲 <strong>Smart App Integration</strong> - Find, book, and access your locker with just a few taps.</p>
                            <p>⏳ <strong>Flexible Storage Plans</strong> - From short-term to long-term, store your bags as per your needs.</p>
                            <p>🌍 <strong>Trusted by Travelers & Locals</strong> - A growing community relies on Mlock for hassle-free storage.</p>
                        </div>
                        <p className="text-[#0a1904] font-medium">
                            💼 Work, explore, and travel with ease. Let Mlock handle your baggage, so you can enjoy your journey!
                        </p>
                    </div>

                    <p className="text-base sm:text-lg font-semibold text-[#0a1904]">
                        🚀 Download the <span className="text-[#18ee18] font-bold">M</span>
                        <span className="text-[#0a1904] font-bold">lock</span> App today and experience the future of luggage storage!
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <div className="w-40 sm:w-60 md:w-80">
                        <Image
                            src="/About/phone-app1.png"
                            alt="Mlock icon"
                            width={400}
                            height={500}
                            className="rounded-xl shadow-lg w-full h-auto"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
                    {/* Left Side: 25% Image */}
                    <div className="md:col-span-1 flex justify-center items-center">
                        <img
                            src="/About/image2.png"
                            alt="Mlock Concept"
                            className="w-full max-w-[280px] md:max-w-full max-h-[300px] md:max-h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>

                    {/* Right Side: 75% Content */}
                    <div className="md:col-span-3 text-center md:text-left flex flex-col justify-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                            Champions of our success story
                        </h2>

                        <div className="space-y-5 text-gray-700 text-base md:text-lg">
                            <p className="text-base md:text-xl font-semibold text-indigo-600">
                                "A Journey, A Bag, and a Game-Changing Idea"
                            </p>

                            <p>
                                One day, while returning from a holiday, I reached the station and was handed someone else&#8217;s bag to deliver. The person was late, and I had no choice but to carry the bag with me. That&#8217;s when the thought struck me:
                                <span className="text-indigo-600 font-medium"> "What if there was a way to securely store our bags at the station?"</span>
                            </p>

                            <p>
                                Later, at 56 Market, I saw shoppers struggling with their bags. The same thing happened at a mall when my friends and I had to carry our bags inside the movie theater. Instead of enjoying the movie, we worried about our belongings.
                            </p>

                            <p className="text-base md:text-xl font-semibold text-yellow-600 flex items-center gap-2">
                                💡 <span>That&#8217;s when the idea of Mlock was born!</span>
                            </p>

                            <p>
                                A simple, secure, and convenient luggage storage solution—helping travelers, shoppers, and everyone in need of hassle-free storage.
                            </p>

                            <p className="text-base md:text-xl font-semibold text-black flex items-center gap-2">
                                📌 <span>Today, <span className="font-bold">M</span><span className="font-bold text-green-600">lock</span> is making travel & shopping stress-free!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-20 bg-linear-to-br from-green-50 to-green-200 mx-5 md:mx-20 my-2 rounded-3xl">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Left Side: Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
                            Our Mission
                        </h2>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Our mission is to make secure and smart luggage storage accessible across India, ensuring no one has to carry bags everywhere. Whether at stations, malls, or markets, we understand the frustration of managing luggage—we've faced it too, and that’s why <span className="font-bold text-black">M</span><span className="font-bold text-green-600">lock</span> was born.
                            <br /><br />
                            Our goal is to create a nationwide network of storage stations, making travel, shopping, and daily life hassle-free for everyone. By providing a simple, secure, and convenient solution, we envision a future where carrying extra baggage is no longer a worry.
                            <br /><br />
                            <span className="text-xl font-semibold text-green-700 block mt-4">
                                ✨ "A bag-free India, where everyone moves freely!" 🚀
                            </span>
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/About/mission3.png"
                            alt="Mission image"
                            className="w-full max-w-lg md:max-w-xl h-auto object-contain rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            <section className="relative w-full h-auto min-h-[600px] my-10 bg-[url('/About/story-bg.png')] bg-cover bg-center">
                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gray-500/40 z-0"></div>

                {/* Layered content above the fade */}
                <div className="relative z-10 h-full px-4 py-10 md:px-10 lg:px-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
                        Our Story
                    </h1>

                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                        {/* Slide 1 */}
                        <div className="p-6 md:p-8 lg:p-10 text-white flex-1">
                            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400 block mb-2">
                                ● 2024
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                The Idea Takes Shape
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-prose">
                                Mlock was born from the need for secure and accessible luggage storage in public spaces. Seeing the struggles of travelers, we set out to create a smart, technology-driven solution.
                            </p>
                        </div>

                        {/* Slide 2 */}
                        <div className="p-6 md:p-8 lg:p-10 text-white flex-1">
                            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400 block mb-2">
                                ● 2024
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                From Vision to Prototype
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-prose">
                                With research, feedback, and strategic planning, we developed a user-friendly app and began designing our first prototype, ensuring security and convenience.
                            </p>
                        </div>

                        {/* Slide 3 */}
                        <div className="p-6 md:p-8 lg:p-10 text-white flex-1">
                            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400 block mb-2">
                                ● 2025
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                Presenting
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-prose">
                                Currently, we are finalizing our prototype and preparing for presentations to showcase our solution. With a clear vision and growing team, we are committed to revolutionizing smart storage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}