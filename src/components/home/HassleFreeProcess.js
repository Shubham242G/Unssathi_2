import React, { useState } from "react";

// Content for the "Counseling" view from Screenshot-127
const counselingContent = [
  {
    step: "1",
    title: "Understanding Your Situation",
    description: "We start with a personalized one-on-one session. Our divorce consultants listen to your situations. This understanding is critical for providing customised separation guidance that addresses your needs and helps alleviate the emotional stress of divorce."
  },
  {
    step: "2",
    title: "Counselling for Emotional Support",
    description: "Navigating the stress of legal separation alone can be overwhelming. Our seperation guidance team offers emotional support and coping strategies for those experiencing divorce in India. We connect you with legal support for separation and counselling services to help you manage the emotional challenges throughout this process."
  },
  {
    step: "3",
    title: "Leading the Way with Legal Procedures",
    description: "Once you’re ready, we will take you through the legal aspects of divorce. Our best divorce lawyers will then help you understand your options, including legal separation and child custody matters. We ensure you’re informed about divorce lawyer fees in India and provide access to the best family lawyer in India for your case."
  },
  {
    step: "4",
    title: "Getting Support After Divorce",
    description: "Our commitment to you doesn't end with the finalization of your divorce. We continue to provide our services, assisting with financial planning after divorce to ensure you have the resources you need to start anew. From divorce financial consultants to child custody legal help, we offer ongoing support and access to high-net-worth divorce consultants to help you navigate post-divorce life successfully."
  }
];

// Content for the "Legal" view from Screenshot-128
const legalContent = [
  {
    step: "1",
    title: "Fill out our Questionnaire",
    description: "Unsaathi is here to listen and understand your story. Answer some questions to help us understand your relationship better!"
  },
  {
    step: "2",
    title: "Legal Support Mechanism",
    description: "We provide legal guidance tailored to your needs, ensuring peace of mind amid the legal complexities of divorce. Our mission is to help you move forward and embrace new beginnings."
  },
  {
    step: "3",
    title: "Your Comfort, Your Way",
    description: "Schedule a call with us and let us know what you prefer – Offline or Online. Unsaathi adapts to your needs, ensuring a comfortable experience every step of the way."
  },
  {
    step: "4",
    title: "Help us Help you",
    description: "Unsaathi is committed to providing an empathetic and cost-effective process that helps you move forward. Make the payment, and trust Unsaathi to do the rest. We prioritize your peace of mind, ensuring a smooth resolution while saving you time, money, and unnecessary stress."
  }
];


export default function HassleFreeProcess() {
  const [active, setActive] = useState("Counseling");

  // Determine which content to display based on the active state
  const contentToDisplay = active === "Counseling" ? counselingContent : legalContent;

  return (
    <section className="bg-[#ece2d7] py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Heading and subheading */}
        <div className="mb-8">
          <div className="text-[#b88b6c] font-semibold text-lg mb-2">
            The Unsaathi Way
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#232122] mb-4">
            A Hassle-Free Process Towards A Better Life
          </h1>
          <p className="text-[#726964] text-base md:text-lg">
            Experience a personalised and streamlined approach with Unsaathi. We hold your hands through every step of the journey with care and understanding.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="mb-8 flex gap-4">
          <button
            className={`px-8 py-2 rounded-full font-semibold text-base transition ${
              active === "Counseling"
                ? "bg-[#b88b6c] text-white"
                : "bg-white border border-[#b88b6c] text-[#b88b6c]"
            }`}
            onClick={() => setActive("Counseling")}
          >
            Counseling
          </button>
          <button
            className={`px-8 py-2 rounded-full font-semibold text-base transition ${
              active === "Legal"
                ? "bg-[#b88b6c] text-white"
                : "bg-white border border-[#b88b6c] text-[#b88b6c]"
            }`}
            onClick={() => setActive("Legal")}
          >
            Legal
          </button>
        </div>

        {/* Steps grid */}
        <div className="relative mb-12">
          {/* Decorative squiggly lines */}
          <svg
            width="180"
            height="80"
            viewBox="0 0 180 80"
            fill="none"
            className="absolute -top-2 left-2 hidden md:block"
            style={{ zIndex: 0 }}
          >
            <path
              d="M10 40 Q90 0, 170 80"
              stroke="#bcb0a6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>
          
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            style={{ zIndex: 1, position: "relative" }}
          >
            {/* Dynamically render cards using map */}
            {contentToDisplay.map((item) => (
              <div key={item.step} className="bg-white border border-[#bcb0a6] rounded-none px-6 py-10 flex flex-col">
                <div className="text-3xl md:text-4xl font-serif font-bold text-[#232122] mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-[#232122] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#726964] text-base mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Know More button */}
        <div className="mt-6 flex justify-center">
          <button className="px-10 py-3 rounded-full bg-[#b88b6c] text-white text-lg font-semibold shadow hover:bg-[#a5775c] transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
