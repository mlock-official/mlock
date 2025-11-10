import React from 'react'
import Image from 'next/image'

const team = () => {
    return (
        <main>
            <section className="pt-17">
                <div
                    className="mx-auto flex min-h-[91vh] w-full items-center justify-center bg-cover bg-center px-5 text-center"
                    style={{
                        backgroundImage: `
                            linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(0,0,0,0.2)),
                            url('/Team/bg-image.png')`,
                    }}
                >
                    <div className="px-4 py-16 sm:py-20 md:py-24 lg:py-32 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-center ">
                            meet the minds <br />
                            shaping the future of <br />
                            smart storage
                        </h1>
                        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-center">
                            Join Us Through Those Who Know Us Best.
                        </h2>
                    </div>
                </div>
            </section>

            {/* My Mentor Heading */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold">My Mentor</h2>
            </div>

            {/* My Mentor Section */}
            <section className="flex flex-col md:flex-row items-center justify-center mt-8 p-8 bg-gray-100 rounded-lg shadow-lg">
                {/* Left Side */}
                <div className="text-center md:text-left md:w-1/4 flex flex-col items-center">
                    <Image
                        src="/Team/mentor.png"
                        alt="Anubhav Yadav"
                        width={160}
                        height={160}
                        className="rounded-full shadow-lg border-4 border-gray-300 object-cover"
                    />
                    <h3 className="text-2xl font-bold mt-4 text-gray-800">Anubhav Yadav</h3>
                    <p className="text-lg text-gray-600">Professor &ndash; SVVV</p>
                </div>

                {/* Right Side */}
                <div className="md:w-3/4 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Throughout my journey, Anubhav sir has been a guiding force. From providing insights into industry trends to offering valuable advice on managing challenges, their mentorship has played a crucial role in shaping my understanding. Even today, I continue to learn from their wisdom and support, ensuring that I stay on the right path.
                    </p>
                </div>
            </section>

            {/* Building Mlock Together Heading */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    Building <span className="text-indigo-600">Mlock</span> Together
                </h2>
            </div>

            {/* Mlock Team Cards */}
            <div className="px-4 py-16 max-w-7xl mx-auto space-y-16">

                <div className="flex flex-col md:flex-row items-center w-full">
                    <Image
                        src="/Team/Shreyansh.jpg"
                        alt="Shreyansh Jain"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Shreyansh Jain</h3>
                        <h4 className="text-indigo-600 font-semibold">Founder & Strategy Head</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            He is the driving force behind Mlock, turning an idea into a structured business model. He leads strategic planning, business operations, and partnerships, ensuring that Mlock grows with a clear vision and strong execution.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row-reverse items-center w-full">
                    <Image
                        src="/Team/Saif.jpg"
                        alt="Saif Ali Shahk"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:mr-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Saif Ali Shahk</h3>
                        <h4 className="text-indigo-600 font-semibold">App Designer & Technical Team</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            He designs Mlock&#8217;s digital experience with intuitive, user-friendly interfaces. His design expertise ensures seamless interaction between technology and convenience.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center w-full">
                    <Image
                        src="/Team/Jayesh.JPG"
                        alt="Jayesh Patel"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Jayesh Patel</h3>
                        <h4 className="text-indigo-600 font-semibold">Product Prototype & Technical Team</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            He leads the development of Mlock&#8217;s physical infrastructure, ensuring secure and efficient luggage storage stations. His hands-on approach bridges the gap between innovation and implementation.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center w-full">
                    <Image
                        src="/Team/Prakhar.jpg"
                        alt="Prakhar Parihar"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:mr-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Prakhar Parihar</h3>
                        <h4 className="text-indigo-600 font-semibold">Full-Stack Web Developer (Intern)</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Prakhar built and manages the entire company website solo. From structure and logic to deployment and performance, every technical detail is his responsibility. He ensures the platform runs smoothly, loads fast, and stays optimized across all devices.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center w-auto">
                    <Image
                        src="/Team/Nawadha.JPG"
                        alt="Nawadha Jadiya"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Nawadha Jadiya</h3>
                        <h4 className="text-indigo-600 font-semibold">Application developer (Intern)</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Nawadha supports backend development and feature implementation across the application. She contributes to coding tasks, bug fixes, and integration efforts with focus and precision.
                        </p>
                    </div>
                </div>

            </div>


        </main>
    )
}

export default team
