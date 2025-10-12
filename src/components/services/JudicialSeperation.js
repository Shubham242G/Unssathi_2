import React from 'react';

const JudicialSeparationPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Judicial Separation in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          A Legal Alternative to Divorce
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Judicial separation is a legal remedy that allows a married couple to live apart without formally ending their marriage[29]. It serves as a cooling-off period, giving both parties time to reflect, reconcile, or decide on the future of their relationship[34].
        </p>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws Governing Judicial Separation</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              This remedy is available under various personal laws in India.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 10 of this Act allows either spouse to file for judicial separation on the same grounds required for divorce, such as cruelty, adultery, or desertion[29][31].
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Applicable to inter-faith and civil marriages, Section 23 provides for judicial separation on grounds similar to those in the Hindu Marriage Act[32].
              </p>
            </div>
            
            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                This Act governs Christian marriages and permits judicial separation on the grounds of adultery, cruelty, or desertion for a period of two years or more[32].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Separation Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Common Grounds for Separation</h2>
          <p className="text-lg text-gray-600 mb-8">
            The grounds for judicial separation are generally the same as those for a contested divorce[29]. These include:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Adultery</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Desertion</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Conversion</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Unsoundness of Mind</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Considering Judicial Separation?</h2>
            <p className="text-[#c48e53] text-lg mb-8">
                This legal step can provide much-needed space and time for reflection. Let our legal experts help you understand your rights and obligations.
            </p>
            <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
                Talk To Legal Experts
            </button>
        </div>
      </section>
    </div>
  );
};

export default JudicialSeparationPage;
