import React from "react";

// An icon for visual flair
const LawBookIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-16 w-16 text-[#b88b6c]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" 
    />
  </svg>
);

export default function ContestedDivorce() {
  return (
    <div className="min-h-screen bg-[#f3efe9] font-serif text-[#3d3d3d]">
      
      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">Unsaathi For You</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#b88b6c] mb-6">
          Laws Governing Contested Divorce
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Understand the legal framework in India for when spouses cannot agree on the terms of their separation.
        </p>
      </section>

      {/* Insights Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-[#eaddcf]">
             <LawBookIcon />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            What is a Contested Divorce?
          </h2>
          <p className="font-medium text-[#b88b6c] mb-4">
            Ending a toxic marriage is a crucial step towards personal well-being.
          </p>
          <p className="text-lg text-gray-700">
            A contested divorce is a legal process that occurs when spouses disagree on one or more key issues, such as child custody, alimony, or the division of assets. Unlike a mutual divorce, it requires court intervention to resolve these disputes through litigation.
          </p>
        </div>
      </section>

      {/* Act Details Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">The Legal Framework</h2>
                <p className="text-lg text-[#b88b6c] mt-2">Key laws governing contested divorce in India.</p>
            </div>
            {/* Flex container to hold the cards */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
            
              {/* Hindu Marriage Act Card */}
              <div className="flex-1 bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center">Hindu Marriage Act, 1955</h3>
                <p className="mb-4 text-gray-600 text-sm">
                  This Act governs marriages among Hindus. Key grounds for divorce include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-left text-sm">
                  <li><b>Adultery:</b> Remains a valid ground for divorce.</li>
                  <li><b>Cruelty:</b> Both physical and mental cruelty.</li>
                  <li><b>Desertion:</b> For a continuous period of two years.</li>
                  <li><b>Conversion:</b> Ceasing to be a Hindu.</li>
                  <li><b>Insanity:</b> Incurable unsoundness of mind.</li>
                  <li><b>Renunciation:</b> Entering a religious order.</li>
                  <li><b>Presumption of Death:</b> Not heard of as alive for seven years.</li>
                </ul>
              </div>

              {/* Special Marriage Act Card */}
              <div className="flex-1 bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center">Special Marriage Act, 1954</h3>
                <p className="mb-4 text-gray-600 text-sm">
                  For interfaith couples or those not marrying under personal laws. Grounds include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-left text-sm">
                  <li><b>Adultery:</b> Cohabitation outside of the marriage.</li>
                  <li><b>Cruelty:</b> Harm that makes living together untenable.</li>
                  <li><b>Desertion:</b> Abandonment by a spouse for two or more years.</li>
                  <li><b>Mental Illness:</b> Unsound mind making marital duties impossible.</li>
                  <li><b>Imprisonment:</b> For seven years or more.</li>
                  <li><b>Venereal Disease:</b> In a communicable form.</li>
                </ul>
              </div>

              {/* Muslim Personal Law Card */}
              <div className="flex-1 bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center">Muslim Personal Law</h3>
                <p className="mb-4 text-gray-600 text-sm">
                  Governed by the Dissolution of Muslim Marriages Act, 1939. A wife can seek divorce on grounds like:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-left text-sm">
                    <li><b>Husband's Whereabouts Unknown:</b> For four years.</li>
                    <li><b>Failure to Provide Maintenance:</b> For two years.</li>
                    <li><b>Imprisonment:</b> For a sentence of seven years or more.</li>
                    <li><b>Impotence:</b> Failure to perform marital obligations.</li>
                    <li><b>Cruelty:</b> Makes her life miserable.</li>
                    <li><b>Divorce by Wife (Khul'):</b> The wife can seek divorce in exchange for returning her dower.</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Final Section & Call-to-Action */}
      <section className="w-full py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Move Forward?</h2>
        <p className="text-[#b88b6c] text-lg mb-8">
          A contested divorce is a difficult journey, but you don't have to go through it alone.
        </p>
        <button className="bg-[#b88b6c] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Speak with a Legal Expert
        </button>
      </section>
    </div>
  );
}
