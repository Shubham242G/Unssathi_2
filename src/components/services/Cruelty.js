import React from 'react';
import aboutAnimation from '../../bannerImages/beidge.json';
import Lottie from 'lottie-react';


const DivorceRemediesPage = () => {
   const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I’d like to connect with a legal advisor regarding Mutual Divorce."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-center px-4 py-8">
      {/* Text Content */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Divorce Remedies in India
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
        Navigating Your Legal Options During Separation
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        When a marriage breaks down, the law provides several remedies to address the complex issues that arise. Understanding these options is the first step toward protecting your rights and securing your future.
      </p>

      {/* Lottie Banner Illustration */}
      <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
        <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
      </div>
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
      <section className="bg-[#fff8f3] py-16">
  <div className="max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-neutral-900 mb-4">
      Begin Your Fresh Start
    </h2>
    <p className="text-[#c48e53] mb-8">
      A mutual divorce doesn't have to be a battle. Let our experts guide you through this streamlined process to ensure a peaceful and dignified resolution.
    </p>

    <div className="flex justify-center">
      <button onClick={handleWhatsAppClick}
        className="bg-[#c48e53] hover:bg-[#b57d45] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <i className="fa-brands fa-whatsapp text-xl"></i>
        Connect With Our Legal Advisors
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default DivorceRemediesPage;
