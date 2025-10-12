import React from 'react';

const ChildCustodyPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Understanding Child Custody
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Putting Your Child's Best Interest First
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          During a divorce, determining child custody is one of the most critical decisions. The primary goal of the Indian legal system is to ensure the child's welfare and stability.
        </p>
      </section>

      {/* Types of Custody Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">The Four Main Types of Custody</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Custody arrangements are typically broken down into four key categories.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Physical Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">1. Physical Custody</h3>
              <p className="text-gray-700">
                This determines where the child lives. The parent with physical custody is the "custodial parent," responsible for the child's daily care. The other parent usually has visitation rights.
              </p>
            </div>

            {/* Legal Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">2. Legal Custody</h3>
              <p className="text-gray-700">
                This grants a parent the legal authority to make major decisions about the child's life, including their education, healthcare, and religious upbringing.
              </p>
            </div>
            
            {/* Sole Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">3. Sole Custody</h3>
              <p className="text-gray-700">
                In this arrangement, one parent is granted both full physical and legal custody. This is often awarded when the court believes it's in the child's best interest to have a single, stable home environment.
              </p>
            </div>

            {/* Joint Custody Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-3 text-center">4. Joint Custody</h3>
              <p className="text-gray-700">
                Both parents share legal and/or physical custody. This requires a high degree of cooperation, as parents must make decisions together and manage the logistics of the child living in two separate homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Laws Governing Child Custody</h2>
          <p className="text-lg text-gray-600">
            In India, child custody is determined by a framework of secular and personal laws, including the **Guardians and Wards Act, 1890**, the **Hindu Minority and Guardianship Act, 1956**, and personal laws applicable to different religious communities. In all cases, the child's welfare is the paramount consideration.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Navigate Custody with Confidence</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          Child custody matters are emotionally charged and legally complex. Our team is here to help you secure a future that serves the best interests of your child.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Legal Experts
        </button>
      </section>
    </div>
  );
};

export default ChildCustodyPage;
