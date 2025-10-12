import React from 'react';

export default function ConjugalRightsPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Restitution of Conjugal Rights
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          A Legal Remedy to Resume Cohabitation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          "Restitution of Conjugal Rights" is a legal provision that allows a spouse to petition the court if their partner has withdrawn from the marriage without a reasonable excuse. It is a remedy aimed at preserving the marital union.
        </p>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">The Legal Framework in India</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              This remedy is recognized under various personal laws.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 9 of this Act allows either the husband or wife to file a petition for the restitution of conjugal rights. It applies to Hindus, Jains, Buddhists, and Sikhs.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Section 22 of this secular law provides the same remedy for couples married in a civil ceremony, regardless of their religion.
              </p>
            </div>
            
            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                Sections 32 and 33 of this Act provide for the restitution of conjugal rights for couples married under Christian law.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Purpose and Effect Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Purpose and Effect</h2>
            <p className="text-lg text-gray-600">
              The primary goal of a restitution decree is not to force an unwilling spouse to live with the other, but to preserve the marriage. If the court's decree is not obeyed for a period of one year or more, it can become a valid ground for the petitioning spouse to file for divorce.
            </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Considering Your Marital Rights?</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          If your spouse has left without a valid reason, you may have legal recourse. Our experts can help you understand the process and implications of filing for restitution of conjugal rights.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Legal Experts
        </button>
      </section>
    </div>
  );
}
