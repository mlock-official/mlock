"use client";
import { useEffect, useRef } from "react";
import { MdTrain } from "react-icons/md";
import { FaBoxOpen, FaUserTie, FaBagShopping, FaCity } from "react-icons/fa6";
import Travel from "./Travel";

export default function HomeJourney2() {
  const userRef = useRef(null);
  const bagRef = useRef(null);

  useEffect(() => {
    let timeout1, timeout2, timeout3, timeout4, loop;

    const start = () => {
      const user = userRef.current;
      const bag = bagRef.current;
      if (!user || !bag) return;

      user.style.transition = "transform 3s ease-in-out";
      bag.style.transition = "transform 3s ease-in-out";
      user.style.transform = "translateX(0)";
      bag.style.transform = "translateX(0)";
      bag.style.display = "block";

      timeout1 = setTimeout(() => {
        user.style.transform = "translateX(18vw)";
        bag.style.transform = "translateX(18vw)";
      }, 200);

      timeout2 = setTimeout(() => {
        bag.style.display = "none";
        user.style.transform = "translateX(45vw)";
      }, 3200);

      timeout3 = setTimeout(() => {
        user.style.transform = "translateX(18vw)";
        setTimeout(() => {
          bag.style.display = "block";
          bag.style.transform = "translateX(18vw)";
        }, 1200);
      }, 7000);

      timeout4 = setTimeout(() => {
        user.style.transform = "translateX(0)";
        bag.style.transform = "translateX(0)";
      }, 11000);

      loop = setTimeout(start, 17000);
    };

    start();
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(loop);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-2">
      <h2 className="mb-10 text-center text-[34px] font-bold text-[#0a1904]">
        Say goodbye to luggage worries and
        <br /> hello to hassle-free travel!
      </h2>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        {/* Animation area */}
        <Travel/>

        {/* Right content */}
        <div className="mx-3">
          <p className="text-2xl font-bold text-[#0a1904]">Introducing for the first time ever</p>
          <h3 className="mt-1 text-[34px] font-extrabold text-[#0a1904]">
            #<span className="text-[#0a1904]">M</span>
            <span className="text-[#18ee18]">lock</span>
          </h3>
          <ul className="mt-4 space-y-3 text-[18px] text-[#0a1904] font-medium">
            <li className="flex items-start gap-2 justify-center">
              <FaBagShopping className="mt-0.5 text-[#18ee18] size-12" aria-hidden />
              <span>Traveling with heavy bags? Store them safely at our secure luggage stations.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaBoxOpen className="mt-0.5 text-[#18ee18] size-16" aria-hidden />
              <span>Simply drop off your luggage, enjoy your day hands-free, and pick it up whenever convenient.</span>
            </li>
            <li className="flex items-start gap-2">
              <MdTrain className="mt-0.5 text-[#18ee18] size-14" aria-hidden />
              <span>Seamless, secure, and hassle-free &ndash; Mlock is your ultimate travel companion.</span>
            </li>
          </ul>
          <p className="mt-3 text-[20px] font-semibold text-[#18ee18]">"Effortless and Secure, isn&rsquo;t it?"</p>
        </div>
      </div>
    </div>
  );
}