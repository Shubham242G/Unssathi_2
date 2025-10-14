import React from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../bannerImages/beidge.json'; // Re-using the same animation as requested

const CrueltyInMarriagePage = () => {
  const whatsappNumber = '919266877791';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I’d like to connect with a legal advisor regarding cruelty in a marriage."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] font-serif text-[#3d3d3d]">

      {/* --- Hero Section (Banner) --- */}
      <section className="w-full py-20 px-4 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cruelty in Marriage? The Law is on Your Side.
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
          Your Right to a Safe and Dignified Life
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choosing kindness and compassion over cruelty reflects true strength, showcasing courage, empathy, and resilience—not a sign of weakness.
        </p>
        <div className="flex justify-center w-full max-w-xl mx-auto mt-12">
          <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
        </div>
      </section>

      {/* --- Explanation of Cruelty --- */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What is Cruelty in a Marriage?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cruelty in Marriage or Domestic Violence refers to behaviour that causes physical, emotional, or mental suffering to a spouse, making it difficult for the victim to continue living with the offender. It is a valid ground for divorce under Indian law.
          </p>
        </div>
      </section>

      {/* --- Types of Cruelty Section --- */}
      <section className="w-full pt-8 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Cruelty Can Take Many Forms</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-800">
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full font-semibold">Physical Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full font-semibold">Mental Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full font-semibold">Economic Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full font-semibold">Sexual Cruelty</span>
            <span className="bg-[#f5e7db] px-4 py-2 rounded-full font-semibold">Social Cruelty</span>
          </div>
        </div>
      </section>

      {/* --- Governing Laws Section --- */}
      <section className="w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Laws for Cruelty</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              In India, there are various laws that govern domestic violence cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hindu Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Hindu Marriage Act, 1955</h3>
              <p className="text-gray-700 text-sm">
                Section 13(1)(a) allows divorce on the grounds of cruelty. This can include persistent accusations, abusive language, or harassment for dowry.
              </p>
            </div>

            {/* Special Marriage Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Special Marriage Act, 1954</h3>
              <p className="text-gray-700 text-sm">
                Section 27(1)(d) considers cruelty a valid ground for divorce for inter-faith or civil marriages.
              </p>
            </div>
            
            {/* Muslim Personal Law Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Muslim Personal Law</h3>
              <p className="text-gray-700 text-sm">
                The Dissolution of Muslim Marriage Act, 1939, empowers women to seek divorce ('khula') if their husband subjects them to cruelty.
              </p>
            </div>

            {/* Indian Divorce Act Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Indian Divorce Act, 1869</h3>
              <p className="text-gray-700 text-sm">
                Section 10 provides cruelty as a ground for divorce for Christian couples, where it has made life unsafe and unbearable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Criminal Offense Section --- */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <blockquote className="border-l-4 border-[#c48e53] pl-6 italic">
                <p className="text-2xl text-gray-800 leading-relaxed">
                  "Domestic violence is not a private matter. It is a crime."
                </p>
                <footer className="mt-4 text-right text-lg text-gray-600">- Sandra Day O'Connor</footer>
            </blockquote>
            <p className="text-lg text-gray-600 mt-8">
              Under Section 498A of the IPC and Section 85 of the BNS, 2023, cruelty by a husband or his relatives is a criminal offense punishable with imprisonment up to three years and a fine.
            </p>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Seek Confidential Legal Support
          </h2>
          <p className="text-[#c48e53] mb-8">
            You do not have to endure this alone. Let our expert legal advisors guide you through your rights and options with complete confidentiality.
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

export default CrueltyInMarriagePage;
