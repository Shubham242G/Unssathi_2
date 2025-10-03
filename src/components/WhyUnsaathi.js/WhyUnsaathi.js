import React from 'react';

const DivorceServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Why Unsaathi Divorce Services Section */}
      <section className="bg-[#f5e7db] py-20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Decorative Swirl - Top Left */}
          <div className="absolute left-0 top-16">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 Q60 120, 100 140 T180 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Why Unsaathi Divorce Services Are Ideal For You?
          </h1>
          <p className="text-lg text-neutral-900 max-w-3xl mx-auto mb-8">
            Compassionate, expert-driven, and tailored divorce services designed to ease your journey. With Unsaathi, your emotional well-being and legal needs are our top priority every step of the way.
          </p>
          <div className="text-base text-neutral-700 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p>
              Choosing the right partner for your divorce journey can make all the difference, and Unsaathi stands out for a reason. We blend emotional sensitivity with legal expertise, offering compassionate, results-driven divorce services catering to your needs. Whether you’re dealing with the emotional stress of divorce, complex family disputes, or navigating child custody legal help, Unsaathi provides a holistic approach that ensures you’re never alone.
            </p>
            <p>
              We understand that divorce isn’t just a legal process; it’s a personal one. With Unsaathi, you’ll find divorce consultants who prioritize not just the legal outcome but your emotional well-being. From the start, our team offers separation guidance and personalized support to help you heal while resolving legal complexities. Whether you need the best divorce lawyer for contested cases or an affordable divorce lawyer for mutual divorce, our network of professionals, including female divorce lawyers near you, ensures tailored, and empathetic support.
            </p>
            <p>
              What makes Unsaathi stand out is our dedication to making the process smoother for you. Our online divorce lawyer services make it easy to access the best legal aid wherever you are while our clear, step-by-step guidance reduces uncertainty. We also provide legal separation consultants for smoother transitions and divorce settlement consultants to ensure your financial security.
            </p>
            <p>
              Our holistic approach addresses both your legal and emotional needs. We believe in creating harmony, not just closure. With Unsaathi, you can expect comprehensive divorce services that focus on your growth, healing, and peace of mind.
            </p>
            <p>
              Choose Unsaathi for a divorce journey that prioritizes you, every step.
            </p>
          </div>
            
          {/* Decorative Swirl - Bottom Right */}
          <div className="absolute right-0 bottom-16">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M180 20 Q140 80, 100 60 T20 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What You Will Save Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-lg text-[#c48e53] font-semibold mb-4">Unsaathi For You</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                What You Will Save With Our Divorce Services
            </h2>
            <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto mb-12">
                Our divorce services are designed to serve your best interests, ensuring a seamless journey of personal transformations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Time Card */}
              <div className="bg-[#f5e7db] rounded-2xl p-8">
                {/* Placeholder for Time Icon */}
                <div className="h-24 mb-4 flex items-center justify-center"></div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Time</h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  With Unsaathi's divorce services, we handle all the legal complexities for you, giving you enough time to heal and rebuild your life.
                </p>
              </div>
              {/* Money Card */}
              <div className="bg-[#f5e7db] rounded-2xl p-8">
                {/* Placeholder for Money Icon */}
                <div className="h-24 mb-4 flex items-center justify-center"></div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Money</h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  Unsaathi's affordable divorce solutions and expert separation guidance ensure that you receive the best legal support without any hidden costs or uncertain financial burdens.
                </p>
              </div>
              {/* Peace of Mind Card */}
              <div className="bg-[#f5e7db] rounded-2xl p-8">
                {/* Placeholder for Peace of Mind Icon */}
                <div className="h-24 mb-4 flex items-center justify-center"></div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Peace of Mind</h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  Unsaathi takes the stress out of your divorce journey by managing everything from filing a petition to getting support after the divorce, allowing you to prioritise your emotional well-being.
                </p>
              </div>
            </div>
            <div className="mt-12">
                <button className="bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-300">
                    Let's Talk
                </button>
            </div>
        </div>
      </section>

      {/* Are Unsaathi Divorce Services Right Section */}
      <section className="bg-[#f5e7db] py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Placeholder for Image (You requested no pictures) */}
          <div className="md:flex-1 h-64 w-full bg-gray-200 rounded-lg">
            {/* Image should be added here by you manually later */}
          </div>
          {/* Text Content */}
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Are Unsaathi Divorce Services Right For Me?
            </h2>
            <p className="text-neutral-700 text-base leading-relaxed">
              When seeking divorce services, you might have various queries and concerns that must be resolved for a fulfilling and reliable experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivorceServicesPage;
