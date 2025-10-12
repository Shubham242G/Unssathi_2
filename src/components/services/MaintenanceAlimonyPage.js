import React from 'react';

// An icon for visual consistency
const GavelIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-16 w-16 text-[#c48e53]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M14.25 7.75l-4.5 4.5m0 0l-4.5 4.5m4.5-4.5l4.5 4.5M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z" 
    />
  </svg>
);

const MaintenanceAlimonyPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Maintenance & Alimony
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Financial Support After Separation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Maintenance, or alimony, is the financial support one spouse provides to the other after a divorce. It exists to ensure the dependent spouse can maintain a reasonable standard of living. It can be temporary (interim maintenance) during proceedings or long-term (permanent maintenance) after the divorce is finalized.
        </p>
      </section>

      {/* Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">The Legal Framework</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              Key laws governing maintenance and alimony in India.
            </p>
          </div>
          
          {/* Flex container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 25 allows the court to order one spouse to pay a lump sum or monthly payments to the other for their maintenance and support after a divorce.
              </p>
            </div>

            {/* Hindu Adoption and Maintenance Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Adoption & Maintenance Act, 1956</h3>
              <p className="text-gray-700 text-sm">
                Under Section 18, a Hindu wife is entitled to be maintained by her husband throughout her lifetime, even if she lives separately under justified circumstances.
              </p>
            </div>

            {/* Muslim Women Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Women (Protection of Rights on Divorce) Act, 1986</h3>
              <p className="text-gray-700 text-sm">
                A divorced Muslim woman is entitled to a reasonable and fair provision and maintenance from her former husband, to be paid during the *iddat* period.
              </p>
            </div>

            {/* Parsi Marriage and Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Parsi Marriage & Divorce Act, 1936</h3>
              <p className="text-gray-700 text-sm">
                This Act empowers the court to order alimony, considering the husband's ability to pay and the wife's needs, ensuring she can live with dignity post-divorce.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                Applying to Christians, Section 37 allows the court to order the husband to secure a gross sum of money or annual payments for the wife's maintenance.
              </p>
            </div>
            
             {/* CrPC Section 125 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Section 125 of CrPC</h3>
              <p className="text-gray-700 text-sm">
                A secular provision, this allows a wife, child, or parent who is unable to maintain themselves to claim maintenance from their husband, father, or son, respectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="w-full py-24 px-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">Secure Your Financial Future</h2>
        <p className="text-[#c48e53] text-lg mb-8 max-w-2xl mx-auto">
          Understanding your rights is the first step. Let our experts guide you through the complexities of maintenance and alimony.
        </p>
        <button className="bg-[#c48e53] text-white px-12 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Talk To Legal Experts
        </button>
      </section>
    </div>
  );
};

export default MaintenanceAlimonyPage;
