import React from 'react';

const DivorceRemediesPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Divorce Remedies in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Navigating Your Legal Options During Separation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          When a marriage breaks down, the law provides several remedies to address the complex issues that arise[9]. Understanding these options is the first step toward protecting your rights and securing your future.
        </p>
      </section>

      {/* Main Remedies Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Key Matrimonial Remedies</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Beyond the dissolution of marriage, courts can grant several other reliefs[18].
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Divorce Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">Divorce</h3>
              <p className="text-gray-700">
                This legally terminates the marriage, allowing both parties to remarry[14]. Divorces in India can be obtained either by mutual consent or through a contested process where one spouse proves specific grounds like cruelty or adultery[14][17].
              </p>
            </div>

            {/* Alimony and Maintenance Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">Alimony & Maintenance</h3>
              <p className="text-gray-700">
                This is financial support paid by the higher-earning spouse to the dependent spouse[21]. It can be temporary (during the proceedings) or permanent (after the divorce) and is designed to ensure the receiving spouse can maintain their standard of living[21].
              </p>
            </div>
            
            {/* Child Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">Child Custody</h3>
              <p className="text-gray-700">
                This determines the legal and physical care of any children from the marriage. The court's primary consideration is always the welfare and best interests of the child[10].
              </p>
            </div>

            {/* Division of Property Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-3 text-center">Division of Property</h3>
              <p className="text-gray-700">
                This involves the equitable distribution of all assets and properties acquired during the marriage. The division depends on each spouse's financial contributions and other factors[17].
              </p>
            </div>

            {/* Restitution of Conjugal Rights Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-3 text-center">Restitution of Conjugal Rights</h3>
              <p className="text-gray-700">
                If one spouse has withdrawn from the marriage without a reasonable excuse, the other can petition the court to order their return. Failure to comply with this order for over a year can become a ground for divorce[10].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">Facing a Difficult Separation?</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          The path through a divorce is challenging. Our experienced legal experts can help you understand your rights and advocate for the best possible outcome.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Legal Experts
        </button>
      </section>
    </div>
  );
};

export default DivorceRemediesPage;
