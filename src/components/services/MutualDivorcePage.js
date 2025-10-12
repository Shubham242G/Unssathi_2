import React from 'react';
import aboutAnimation from '../../bannerImages/about-us-banner-anim.json';
import Lottie from 'lottie-react';

const MutualDivorcePage = () => {

  // Replace this number with your real WhatsApp number (no spaces or dashes)
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
          A Guide to Mutual Divorce in India
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Peaceful Resolutions for Amicable Separations
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A mutual divorce is a legal process where both spouses agree to end their marriage amicably. It is a faster and less contentious alternative to a contested divorce, as all key issues like alimony, child custody, and property division are settled beforehand.
        </p>
        <div className="flex justify-center max-w-xl mx-auto mt-12">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
        </div>
      </section>

      {/* Governing Laws Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws Governing Mutual Divorce</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              The process is governed by various personal laws in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 13B allows couples who have lived separately for at least one year to file a joint petition for divorce, confirming that they cannot live together.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Section 28 provides a similar provision for inter-faith and civil marriages, allowing couples to seek a mutual divorce on the same grounds of separation.
              </p>
            </div>

            {/* Muslim Law (Mubara'at) Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                The concept of 'Mubara'at' allows for mutual divorce where both spouses agree to release each other from the marital contract, typically followed by an 'iddat' waiting period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The Mutual Divorce Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            The process generally involves two court appearances, known as the "first motion" and "second motion," separated by a mandatory six-month cooling-off period. This period gives the couple time to reconsider. However, the Supreme Court has the power to waive this period in certain cases where the separation is long and there is no chance of reconciliation.
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
};

export default MutualDivorcePage;
