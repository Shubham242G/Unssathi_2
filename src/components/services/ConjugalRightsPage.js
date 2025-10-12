import Lottie from 'lottie-react';
import React from 'react';
import aboutAnimation from '../../bannerImages/about-us-banner-anim.json';


export default function ConjugalRightsPage() {
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
        {/* Lottie Banner Illustration */}
        <div className="flex justify-center max-w-xl mx-auto mt-12">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
        </div>
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
}
