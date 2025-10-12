import React from "react";

export default function NewBeginning() {
  return (
    <section className="bg-[#ece2d7] w-full py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Text content */}
        <div className="md:w-[60%]">
          <div className="text-[#b88b6c] text-lg font-semibold mb-3">
            Unsaathi For You
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#232122] leading-tight mb-4">
            Turn Heartaches Into New Beginning
          </h1>
          <div className="text-[#726964] text-base md:text-lg mb-8">
            Unsaathi divorce services reimagine the way divorces are perceived. We empower you with end-to-end solutions fostering healing and hope for a better future.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#bcb0a6] pt-8 gap-2">
            <div className="pr-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Cost-Effective Solutions
              </h3>
              <p className="text-[#726964] text-base">
                Our divorce consultants extend affordable divorce solutions, ensuring you get personalised support without breaking the bank.
              </p>
            </div>
            <div className="md:border-l border-[#bcb0a6] px-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Optimised Strategies
              </h3>
              <p className="text-[#726964] text-base">
                With our quick documentation and streamlined procedure, getting legal support for separation becomes seamless.
              </p>
            </div>
            <div className="md:border-l border-[#bcb0a6] pl-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-[#232122]">
                Cultural Sensitivity
              </h3>
              <p className="text-[#726964] text-base">
                Our divorce services are deeply rooted in our clients’ cultural interests, and we ensure that every client is respected and supported throughout the process.
              </p>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="hidden md:flex w-[40%] justify-end items-start">
          <img
            src="assets/legal-service.webp" // path to your illustration
            alt="legal service"
            className="w-[410px] max-w-full mt-8"
          />
        </div>
      </div>
    </section>
  );
}
