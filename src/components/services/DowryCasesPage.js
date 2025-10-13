import Lottie from 'lottie-react';
import React from 'react';
import aboutAnimation from '../../bannerImages/beidge.json';

const DowryCasesPage = () => {
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
        Understanding Dowry Laws in India
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-6">
        Protecting Rights and Preventing Misuse
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Dowry is a persistent social evil in India. While strong laws exist to protect victims, there are also growing concerns about their misuse. This page explores both sides of the issue.
      </p>

      {/* Lottie Banner Illustration */}
      <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
        <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
      </div>
</section>


      {/* Introduction to False Cases */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The Issue of "False" Dowry Cases</h2>
          <p className="font-medium text-[#c48e53] mb-6">
            When laws designed to protect are used as weapons.
          </p>
          <p className="text-lg text-gray-700 space-y-4">
            <span>
              "False" dowry cases refer to instances where allegations of dowry harassment under laws like Section 498A of the IPC are filed with malicious intent—often to settle personal scores during divorce proceedings or to extort money.
            </span>
            <span>
              Such accusations can cause immense reputational damage and legal hardship. Fortunately, the Indian judicial system provides remedies, such as quashing false FIRs under Section 482 of the CrPC or filing counter-cases for defamation and malicious prosecution.
            </span>
          </p>
        </div>
      </section>
      
      {/* Legal Framework Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Key Legal Provisions</h2>
            <p className="text-lg text-[#c48e53] mt-2">
              The primary laws addressing dowry and related domestic issues.
            </p>
          </div>
          
          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dowry Prohibition Act Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Dowry Prohibition Act, 1961</h3>
              <p className="text-gray-700 text-sm">
                This is the primary law that criminalizes the act of giving, taking, or demanding dowry. It imposes penalties, including imprisonment and fines, for offenders.
              </p>
            </div>

            {/* IPC & BNS Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">IPC & Bhartiya Nyaya Sanhita</h3>
              <p className="text-gray-700 text-sm">
                Section 498A of the IPC (and its equivalent in the BNS) specifically targets cruelty by a husband or his relatives, often linked to dowry demands, making it a non-bailable offense.
              </p>
            </div>
            
            {/* Domestic Violence Act Card */}
            <div className="bg-[#f8f6f4] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-center">Domestic Violence Act, 2005</h3>
              <p className="text-gray-700 text-sm">
                This civil law provides a broader definition of domestic abuse, including economic abuse (like dowry demands), and offers protections such as protection orders and residence orders.
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

export default DowryCasesPage;
