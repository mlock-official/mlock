import React from 'react'
import Image from 'next/image'

export const metadata = { title: "Team | Mlock" };

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
                        width={400}
                        height={400}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Shreyansh Rangawat</h3>
                        <h4 className="text-indigo-600 font-semibold">Founder & CEO</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            He is the driving force behind Mlock, transforming a simple idea into a scalable and impactful business model. He leads the overall vision, strategic planning, and operations, ensuring that Mlock continues to grow with clarity, innovation, and strong execution. He builds key partnerships, drives expansion, and ensures the company stays aligned with its mission of solving real world luggage storage problems.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row-reverse items-center w-full">
                    <Image
                        src="/Team/Saif.jpg"
                        alt="Saif Ali Shaikh"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:mr-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Saif Ali Shaikh</h3>
                        <h4 className="text-indigo-600 font-semibold">CTO - Chief Technology officer</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Saif is the technical backbone of Mlock. He built the app from scratch, shaping its design, functionality, and user experience. His expertise and precision ensure Mlock runs seamlessly, delivering a simple and reliable platform for every user.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center w-full">
                    <Image
                        src="/Team/Prakhar.jpg"
                        alt="Prakhar Parihar"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Prakhar Parihar</h3>
                        <h4 className="text-indigo-600 font-semibold">Lead Software Engineer</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Prakhar blends technical expertise with leadership. With hands&ndash;on experience in full&ndash;stack development and scalable architecture, he drives projects from concept to deployment efficiently. Known for his problem&ndash;solving mindset and ability to mentor peers, he ensures high&ndash;quality solutions while fostering collaboration. His focus on clean code, performance, and user&ndash;centric design makes him a key contributor to the company&rsquo;s growth.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row-reverse items-center w-full">
                    <Image
                        src="/Team/Nitin.jpg"
                        alt="Nitin Dubey"
                        width={300}
                        height={300}
                        className="rounded-full shadow-gray-500 shadow-lg object-cover"
                    />
                    <div className="mt-6 md:mt-0 md:mr-10 text-center md:text-left w-full">
                        <h3 className="text-2xl font-bold text-gray-800">Nitin Dubey</h3>
                        <h4 className="text-indigo-600 font-semibold">IOT & Hardware Product Lead</h4>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            As our IoT & Hardware Lead, he drives smart locker development with hands-on hardware expertise. From battery backup systems to setups and testing, his problem-solving spirit transforms ideas into reliable, working solutions.
                        </p>
                    </div>
                </div>

            </div>


        </main>
    )
}

export default team
