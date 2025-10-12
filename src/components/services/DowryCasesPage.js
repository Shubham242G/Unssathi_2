import React from 'react';

const DowryCasesPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Understanding Dowry Laws in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Protecting Rights and Preventing Misuse
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dowry is a persistent social evil in India. While strong laws exist to protect victims, there are also growing concerns about their misuse. This page explores both sides of the issue.
        </p>
      </section>

      {/* Introduction to False Cases */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The Issue of "False" Dowry Cases</h2>
          <p className="font-medium text-[#c48e53] mb-6">
            When laws designed to protect are used as weapons.
          </p>
          <p className="text-lg text-gray-700 space-y-4">
            <span>
              "False" dowry cases refer to instances where allegations of dowry harassment under laws like Section 498A of the IPC are filed with malicious intent—often to settle personal scores during divorce proceedings or to extort money.
            </span>
            <span>
              Such accusations can cause immense reputational damage and legal hardship. Fortunately, the Indian judicial system provides remedies, such as quashing false FIRs under Section 482 of the CrPC or filing counter-cases for defamation and malicious prosecution.
            </span>
          </p>
        </div>
      </section>
      
      {/* Legal Framework Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Key Legal Provisions</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              The primary laws addressing dowry and related domestic issues.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dowry Prohibition Act Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Dowry Prohibition Act, 1961</h3>
              <p className="text-gray-700 text-sm">
                This is the primary law that criminalizes the act of giving, taking, or demanding dowry. It imposes penalties, including imprisonment and fines, for offenders.
              </p>
            </div>

            {/* IPC & BNS Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">IPC & Bhartiya Nyaya Sanhita</h3>
              <p className="text-gray-700 text-sm">
                Section 498A of the IPC (and its equivalent in the BNS) specifically targets cruelty by a husband or his relatives, often linked to dowry demands, making it a non-bailable offense.
              </p>
            </div>
            
            {/* Domestic Violence Act Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Domestic Violence Act, 2005</h3>
              <p className="text-gray-700 text-sm">
                This civil law provides a broader definition of domestic abuse, including economic abuse (like dowry demands), and offers protections such as protection orders and residence orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Navigating Dowry-Related Legal Issues?</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          Whether you are a victim of dowry harassment or facing false accusations, expert legal guidance is crucial.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Our Legal Experts
        </button>
      </section>
    </div>
  );
};

export default DowryCasesPage;
