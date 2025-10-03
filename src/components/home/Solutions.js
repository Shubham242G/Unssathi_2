import React from "react";

// Update icon paths to your actual assets or use inline SVGs
const services = [
  {
    icon: "/icons/attorney.svg",
    title: "Divorce Attorney",
    description:
      "Our expert divorce attorneys guides you through the legal complexities of divorce to ensure smoother transition.",
  },
  {
    icon: "/icons/couple-counsel.svg",
    title: "Couple Counselling",
    description:
      "Want to give another try? Our couple counselling services fosteres amicable solutions before moving towards divorce.",
  },
  {
    icon: "/icons/oneonone-counsel.svg",
    title: "1 On 1 Counselling",
    description:
      "With our 1 on 1 counselling, we help you cope with the divorce stress and rediscover your strength.",
  },
  {
    icon: "/icons/offcourt.svg",
    title: "Off Court Settlements",
    description:
      "Our off-court settlements, you can achieve peaceful resolutions, saving time, money and your efforts.",
  },
  {
    icon: "/icons/separation-coach.svg",
    title: "Seperation Coaching",
    description:
      "Empower yourself with our seperation coaching to steer clear from early challenges after divorce.",
  },
];

export default function UnsaathiSolutions() {
  return (
    <section className="w-full bg-[#ece2d7] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-[#b88b6c] text-lg font-semibold mb-2">The Unsaathi Solutions</h5>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#45362e] leading-tight mb-4">
          Your Compass Of Divorce Services Through The Uncertain Journey, Guiding You Towards A Brighter Tomorrow.
        </h1>
        <p className="text-[#7f756f] text-base md:text-lg mb-9">
          We have an aisle of divorce-related services under roof, allowing you to avail hassle-free solutions.
        </p>
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 border-t border-[#bcb0a6] pt-2">
          {/* First Column */}
          <div>
            {/* Divorce Attorney */}
            <div className="flex gap-4 items-start py-7 border-b border-[#bcb0a6]">
              <img src="/icons/attorney.svg" alt="" className="w-9 h-9 mt-1" />
              <div>
                <div className="font-sans font-semibold text-xl text-[#232122]">Divorce Attorney</div>
                <div className="text-[#726964] text-base mt-1">
                  Our expert divorce attorneys guides you through the legal complexities of divorce to ensure smoother transition.
                </div>
              </div>
            </div>
            {/* 1 On 1 Counselling */}
            <div className="flex gap-4 items-start py-7 border-b border-[#bcb0a6]">
              <img src="/icons/oneonone-counsel.svg" alt="" className="w-9 h-9 mt-1" />
              <div>
                <div className="font-sans font-semibold text-xl text-[#232122]">1 On 1 Counselling</div>
                <div className="text-[#726964] text-base mt-1">
                  With our 1 on 1 counselling, we help you cope with the divorce stress and rediscover your strength.
                </div>
              </div>
            </div>
            {/* Seperation Coaching */}
            <div className="flex gap-4 items-start py-7">
              <img src="/icons/separation-coach.svg" alt="" className="w-9 h-9 mt-1" />
              <div>
                <div className="font-sans font-semibold text-xl text-[#232122]">Seperation Coaching</div>
                <div className="text-[#726964] text-base mt-1">
                  Empower yourself with our seperation coaching to steer clear from early challenges after divorce.
                </div>
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col justify-between h-full">
            {/* Couple Counselling */}
            <div className="flex gap-4 items-start py-7 border-b border-[#bcb0a6]">
              <img src="/icons/couple-counsel.svg" alt="" className="w-9 h-9 mt-1" />
              <div>
                <div className="font-sans font-semibold text-xl text-[#232122]">Couple Counselling</div>
                <div className="text-[#726964] text-base mt-1">
                  Want to give another try? Our couple counselling services fosteres amicable solutions before moving towards divorce.
                </div>
              </div>
            </div>
            {/* Off Court Settlements */}
            <div className="flex gap-4 items-start py-7 border-b border-[#bcb0a6]">
              <img src="/icons/offcourt.svg" alt="" className="w-9 h-9 mt-1" />
              <div>
                <div className="font-sans font-semibold text-xl text-[#232122]">Off Court Settlements</div>
                <div className="text-[#726964] text-base mt-1">
                  Our off-court settlements, you can achieve peaceful resolutions, saving time, money and your efforts.
                </div>
              </div>
            </div>
            {/* CTA Box */}
            <div className="rounded-2xl border border-[#bcb0a6] px-6 py-8 mt-10 bg-white flex flex-col justify-center">
              <div className="font-sans font-semibold text-xl text-[#232122] mb-2">
                Talk Your Heart Out! We Are Listening
              </div>
              <button className="bg-[#b88b6c] hover:bg-[#a5775c] text-white text-base px-7 py-3 rounded-full font-semibold mt-2 w-max mx-auto">
                Schedule A Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
