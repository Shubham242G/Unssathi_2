import React from 'react';

function Hero() {
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

          <div className="pt-2">
            <button className="bg-[#d4b89c] hover:bg-[#c7a788] text-gray-800 font-medium text-base px-10 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
              Talk To Our Expert
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
