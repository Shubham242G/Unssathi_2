import React, { useState } from "react";
import { Link } from "react-router-dom";

const counselingContent = [
  {
    step: "1",
    title: "Understanding Your Situation",
    description:
      "We start with a personalized one-on-one session. Our divorce consultants listen to your situations to provide customised separation guidance.",
  },
  {
    step: "2",
    title: "Counselling for Emotional Support",
    description:
      "We offer emotional support and coping strategies, connecting you with legal and psychological help throughout your divorce journey.",
  },
  {
    step: "3",
    title: "Leading the Way with Legal Procedures",
    description:
      "Our experienced divorce lawyers help you understand your legal options, from separation and custody to financial planning post-divorce.",
  },
  {
    step: "4",
    title: "Getting Support After Divorce",
    description:
      "Our support continues beyond the legal process — helping you rebuild with financial, emotional, and legal resources tailored for you.",
  },
];

const legalContent = [
  {
    step: "1",
    title: "Fill out our Questionnaire",
    description:
      "Answer a few thoughtful questions so Unsaathi can understand your situation and help you better.",
  },
  {
    step: "2",
    title: "Legal Support Mechanism",
    description:
      "Receive tailored legal advice and emotional assurance as we simplify the complex legalities of divorce for you.",
  },
  {
    step: "3",
    title: "Your Comfort, Your Way",
    description:
      "Choose between online or offline counselling options at your convenience — we adapt to your comfort.",
  },
  {
    step: "4",
    title: "Help us Help you",
    description:
      "Complete the process by making your payment and letting Unsaathi handle the rest with empathy and professionalism.",
  },
];

export default function HassleFreeProcess() {
  const [active, setActive] = useState("Counseling");
  const contentToDisplay = active === "Counseling" ? counselingContent : legalContent;

  return (
    <section className="relative bg-[#f6ede5] py-20 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#b88b6c] font-semibold text-lg mb-2">The Unsaathi Way</p>
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#232122] mb-4">
            A Hassle-Free Process Towards A Better Life
          </h1>
          <p className="text-[#6d645e] text-base md:text-lg max-w-2xl mx-auto">
            Experience a personalised and streamlined approach with Unsaathi. We hold your
            hands through every step of the journey with care and understanding.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          {["Counseling", "Legal"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-10 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                active === tab
                  ? "bg-[#b88b6c] text-white shadow-lg scale-105"
                  : "border border-[#b88b6c] text-[#b88b6c] bg-white hover:bg-[#b88b6c]/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {contentToDisplay.map((item) => (
            <div
              key={item.step}
              className="relative group bg-white border border-[#d6cfc7] rounded-2xl px-6 py-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Circular text-line decoration */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                <span className="relative text-[#232122] font-serif font-bold text-4xl z-10">
                  {item.step}
                </span>
              </div>

              <h3 className="font-semibold text-xl text-[#232122] mb-2">
                {item.title}
              </h3>
              <p className="text-[#726964] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <Link to='/howUnsaathi'>
          <button className="px-10 py-3 rounded-full bg-[#b88b6c] text-white text-lg font-semibold shadow-md hover:bg-[#a5775c] hover:shadow-lg transition-all duration-300">
            Know More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
