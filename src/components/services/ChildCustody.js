import Lottie from 'lottie-react';
import aboutAnimation from '../../bannerImages/beidge.json'
import React from 'react';
import { Link } from 'react-router-dom';
const ChildCustodyPage = () => {
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
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
        Understanding Child Custody
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[#c48e53] mb-4">
        Putting Your Child's Best Interest First
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
        During a divorce, determining child custody is one of the most critical decisions. The primary goal of the Indian legal system is to ensure the child's welfare and stability.
      </p>

      {/* Lottie Banner Illustration */}
      <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
        <Lottie animationData={aboutAnimation} loop={true} className="w-full h-100" />
      </div>

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

export default ChildCustodyPage;
