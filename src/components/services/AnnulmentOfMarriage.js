import React from 'react';

const AnnulmentOfMarriagePage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Annulment of Marriage in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Legally Declaring a Marriage Null and Void
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          An annulment is a legal procedure that declares a marriage void from its inception, as if it never happened. This is fundamentally different from a divorce, which dissolves a legally valid marriage.
        </p>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws Governing Annulment</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              The grounds and procedures for annulment are defined by various personal laws in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 12 allows for annulment on grounds like impotence, unsoundness of mind, consent obtained by force or fraud, and the bride being pregnant by another person at the time of marriage.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                This secular law provides similar grounds for annulment for inter-faith and civil marriages, ensuring uniform rights for couples registered under this act.
              </p>
            </div>

            {/* Muslim Personal Law Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                Under Shariat, an annulment (known as 'Faskh') can be sought if the marriage is irregular (fasid) or void (batil) due to issues like lack of proper witnesses or marriage within prohibited relationships.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                For Christian marriages, Section 19 lists grounds for annulment, including bigamy, one party being a "lunatic or idiot," or the parties being within prohibited degrees of relation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Annulment Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Common Grounds for Annulment</h2>
            <p className="text-lg text-gray-600 mb-8">
                A marriage may be annulled if it was invalid from the start. Common grounds across various laws include:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700">
                <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Bigamy</span>
                <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Force or Fraud</span>
                <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Unsoundness of Mind</span>
                <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Prohibited Relationship</span>
                <span className="bg-[#f5e7db] px-4 py-2 rounded-full">Impotence</span>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Explore the Annulment Process</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          If you believe your marriage may be invalid, it is crucial to understand your legal options. Our experts can guide you through the complexities of annulment.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Legal Experts
        </button>
      </section>
    </div>
  );
};

export default AnnulmentOfMarriagePage;
