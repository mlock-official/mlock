import React, { useEffect, useRef } from "react";
import { MdTrain } from "react-icons/md";
import { FaBoxOpen, FaUserTie, FaBagShopping, FaCity } from "react-icons/fa6";

const Travel = () => {
  const userRef = useRef(null);
  const bagRef = useRef(null);
  const stationRef = useRef(null);
  const cityRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let frame;
    let startTime;
    const duration = 10000;

    const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;

  const user = userRef.current;
  const bag = bagRef.current;
  const station = stationRef.current;
  const city = cityRef.current;
  const track = trackRef.current;

  if (!user || !bag || !station || !city || !track) return;

  const trackLeft = track.getBoundingClientRect().left;
  const stationX = station.getBoundingClientRect().left - trackLeft;
  const cityX = city.getBoundingClientRect().left - trackLeft;

  const progress = elapsed % duration;

  user.style.transition = "transform 1s ease-in-out";
  bag.style.transition = "transform 1s ease-in-out";

  if (progress < 2000) {
    // Move to station
    user.style.transform = `translateX(${stationX}px)`;
    bag.style.transform = `translateX(${stationX}px)`;
    bag.style.opacity = 1;
  } else if (progress < 5000) {
    // User goes to city, bag stays
    user.style.transform = `translateX(${cityX}px)`;
    bag.style.opacity = 0;
  } else if (progress < 7000) {
    // User returns to station
    user.style.transform = `translateX(${stationX}px)`;
    bag.style.transform = `translateX(${stationX}px)`;

    // Bag appears only after user stops (simulate delay)
    if (progress > 5500) {
      bag.style.opacity = 1;
    } else {
      bag.style.opacity = 0;
    }
  } else {
    // Both return to train
    user.style.transform = `translateX(0px)`;
    bag.style.transform = `translateX(0px)`;
    bag.style.opacity = 1;
  }

  frame = requestAnimationFrame(animate);
};

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#0a1904]">
        Effortless Travel, Smarter Storage
      </h2>

      <div
        ref={trackRef}
        className="relative h-[220px] w-full overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md"
      >
        {/* Path */}
        <div className="absolute left-0 right-0 top-[60px] h-[150px] rounded-full border-t-4 border-dashed border-black" />

        {/* Markers */}
        <div ref={stationRef} className="absolute left-[18%] top-[60px]" aria-hidden>
          <FaBoxOpen className="text-[#0a1904]" size={28} />
        </div>
        <div className="absolute left-0 top-[110px]" aria-hidden>
          <MdTrain className="text-[#0a1904]" size={30} />
        </div>
        <div ref={cityRef} className="absolute right-0 top-[110px]" aria-hidden>
          <FaCity className="text-[#0a1904]" size={30} />
        </div>

        {/* Moving icons */}
        <div
          ref={userRef}
          className="absolute left-0 top-[110px] transition-transform duration-1000 ease-in-out"
          aria-label="user"
        >
          <FaUserTie className="text-[#0a1904]" size={26} />
        </div>
        <div
          ref={bagRef}
          className="absolute left-0 top-[140px] transition-transform duration-1000 ease-in-out"
          aria-label="bag"
        >
          <FaBagShopping className="text-[#0a1904]" size={22} />
        </div>
      </div>
    </div>
  );
};

export default Travel;