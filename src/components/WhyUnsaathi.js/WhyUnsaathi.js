import React from 'react';
import man from '../../bannerImages/man animation.json'
import woman from '../../bannerImages/women.json'
import Lottie from 'lottie-react';

// === IMPORTANT ===
// Enter your WhatsApp number here with the country code, but without the '+' or any spaces.
const whatsappNumber = "919266877791"; // Example: "91" for India

// Component for the features table to keep the main component clean
const FeaturesTable = () => {
  const features = [
    { 
      feature: "Holistic Approach", 
      benefit: "We focus on healing and growth, not just the legal outcome." 
    },
    { 
      feature: "Tailored Expertise", 
      benefit: "Access to the best divorce lawyers (for contested or mutual cases) and specialized consultants (for separation/settlement)." 
    },
    { 
      feature: "Convenience & Clarity", 
      benefit: "Online divorce services and clear, step-by-step guidance simplify the journey, reducing your stress and uncertainty." 
    },
    { 
      feature: "Dedicated Care", 
      benefit: "Your emotional well-being and legal needs are our top priority from the start." 
    },
  ];

  return (
    <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] max-w-4xl mx-auto border-collapse mt-12 rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-[#f5e7db]">
            <tr>
              <th className="py-4 px-6 text-left text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Feature</th>
              <th className="py-4 px-6 text-left text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Your Benefit</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-[#faf5eb] transition-colors duration-200">
                <td className="py-5 px-6 font-semibold text-[#3d3d3d] border-b border-[#e0d6cc]">{item.feature}</td>
                <td className="py-5 px-6 text-[#726964] border-b border-[#e0d6cc]">{item.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

const WhyUnsaathiPage = () => {
  
  // Function to handle the WhatsApp redirection
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5EFE9] font-serif py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with placeholders for images */}
        <header className="flex flex-col md:flex-row items-center justify-center text-center gap-8 mb-16">
          {/* Left Image Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 flex items-center justify-center">
            <Lottie animationData={man} loop={true} className="w-full h-auto" />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#232122] mb-4">
              Why Unsaathi is Your Ideal Divorce Partner
            </h1>
            <p className="text-lg sm:text-xl text-[#726964]">
              Choosing the right partner is crucial. Unsaathi stands out by offering a compassionate, expert-driven approach that blends emotional well-being with legal expertise.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 flex items-center justify-center">
            <Lottie animationData={woman} loop={true} className="w-full h-auto" />

          </div>
        </header>

        {/* Features Table */}
        <FeaturesTable />

        {/* Final CTA Section */}
        <section className="text-center mt-16">
          <p className="text-lg text-[#726964] mb-6">
            Unsaathi makes your personal and legal journey smoother, ensuring you find harmony and peace of mind.
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-[#b88b6c] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-[#a5775c] transition-transform transform hover:scale-105"
          >
            Ready to start your journey with a trusted guide?
          </button>
        </section>

      </div>
    </div>
  );
};

export default WhyUnsaathiPage;
