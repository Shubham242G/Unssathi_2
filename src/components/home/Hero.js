import React from 'react';
import { useNavigate } from 'react-router-dom';


function Hero() {

  const navigate = useNavigate()
  return (
    <section className="max-w-7xl mx-auto px-6 ">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 -mb-13">
          <h1 className="text-5xl lg:text-[64px] font-serif leading-[1.15] text-gray-900">
            Your ally for a simpler divorce.
          </h1>

          <div className="space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              Divorce is a turning point. Unsaathi provides expert{' '}
              <span className="font-semibold text-gray-800">divorce lawyer</span>. support and advanced{' '}
              <span className="font-semibold text-gray-800">divorce services</span>, to lift your emotional stress, empowering a strong, fresh start.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-[#f9f6f2] rounded-2xl shadow-lg max-w-lg mx-auto font-serif text-[#3d3d3d]">
      <h2 className="text-3xl font-bold mb-3 text-center">
        Unsure About Your Next Step?
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Take our confidential 3-minute quiz to gain clarity on your relationship and discover which of our services may be right for you.
      </p>
      <button
        // Step 3: Add the onClick handler to navigate to '/quiz'
        onClick={() => navigate('/quiz')}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#c48e53] rounded-full overflow-hidden transition-all duration-300 ease-in-out shadow-lg hover:ring-2 hover:ring-[#c48e53] hover:ring-offset-2"
      >
        {/* Sparkle effect */}
        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="relative">
          Start the Insight Quiz
        </span>
      </button>
    </div>
        </div>

        {/* Right Side - Illustration Placeholder */}
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="/assets/Artboard_1.gif"
            alt="funny gif"
            className="w-50 h-50 object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
