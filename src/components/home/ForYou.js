import React from "react";

// For illustration, replace src attributes with your SVGs or image assets
const infoCards = [
  {
    img: "/assets/approach.webp", // Affordable Solutions icon
    title: "Affordable Solutions",
    desc: "Never worry about how a divorce impacts your pocket. Our solutions are competitively priced, making divorce more accessible.",
  },
  {
    img: "assets/potential-icon-2.webp", // Tailored Approach icon
    title: "Tailored Approach",
    desc: "We personalized our services according to your specific needs, providing comprehensive and tailored services.",
  },
  {
    img: "assets/different-perspective.webp", // Peace of Mind icon
    title: "Peace of Mind",
    desc: "We are committed to elevating your well-being and offering you peace of mind during your difficult times.",
  },
];

const secondaryCards = [
  {
    img: "assets/heart-puzzle (1).webp", // Empathetic Guidance icon
    title: "Empathetic Guidance",
    desc: (
      <>
        Our team of <span className="font-semibold">divorce lawyers</span> provides compassionate support to help you navigate the emotional turmoil of a divorce.
      </>
    ),
  },
  {
    img: "assets/different-perspective.webp", // Legal Expertise icon
    title: "Legal Expertise",
    desc: (
      <>
        Seek assistance from our experienced <span className="font-semibold">divorce lawyers</span>, who are experts in <span className="font-semibold">Indian family law</span> and offer tailored solutions.
      </>
    ),
  },
  {
    img: "assets/approach.webp", // Simplified Process icon
    title: "Simplified Process",
    desc: "At Unsaathi, we streamline your divorce process, reducing stress and saving time.",
  },
];

export default function ForYou() {
  return (

    <>

      <section className="bg-[#f6f2ef] py-12 md:py-16 w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top subheading and heading */}
        <div className="text-center">
          <h4 className="text-[#b88b6c] font-semibold mb-2">Unsaathi For You</h4>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#45362e] leading-tight mb-3">
            Clarity. Compassion. A Fresh Start.
          </h1>
          <div className="text-[#776e65] mb-10">
            For us, your peace of mind comes first; that’s why we ensure a hassle-free divorce process.
          </div>
        </div>

        {/* Main card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8edeb] rounded-2xl shadow-sm flex flex-col items-center text-center px-6 py-10"
            >
              <img src={card.img} alt="" className="h-40 mb-5" />
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#45362e] mb-3">{card.title}</h3>
              <p className="text-[#776e65] md:text-base text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8edeb] rounded-2xl shadow-sm flex flex-col items-center text-center px-6 py-10"
            >
              <img src={card.img} alt="" className="h-20 mb-5" />
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#45362e] mb-3">{card.title}</h3>
              <p className="text-[#776e65] md:text-base text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#45362e] font-bold mb-5">
            Unsaathi Walks You Through This Journey Hassle-Free With Our Divorce Services.
          </h2>
          <button
            className="px-8 py-2 rounded-full bg-[#b88b6c] text-white shadow-md font-semibold text-lg hover:bg-[#a5775c] transition"
          >
            Make An Appointment
          </button>
        </div>
      </div>
    </section>

    </>
  );
}
