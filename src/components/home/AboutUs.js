import React from 'react';
import DivorceInsightQuiz from '../../quiz/quiz';

function AboutUs() {
  return (
    <div className="bg-[#f5f1ed] min-h-screen">
      {/* Main container for content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section: Content */}
        <div>
          {/* Section Title */}
          <div className="mb-2 text-lg text-[#ae9478] font-semibold">About Unsaathi</div>

          {/* Heading */}
          <h1 className="text-5xl font-serif text-gray-900 leading-tight mb-8">
            Find Top-Notch Divorce Services Here
          </h1>

          {/* Paragraphs */}
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Navigating a divorce can be overwhelming, but our expert <span className="font-semibold text-gray-900">divorce services</span> are designed to ease your journey.
              Our team of compassionate and affordable divorce lawyers provides comprehensive support for every aspect of your separation, from <span className="font-semibold text-gray-900"> financial settlements</span> to <span className="font-semibold text-gray-900"> child custody disputes</span>. We offer a full spectrum of divorce services, including mediation and legal guidance, ensuring your rights are protected.
            </p>
            <p>
              With a proven track record, our top-tier divorce lawyers are committed to securing a positive outcome for you. Trust our dedicated divorce services to provide the peace of mind you need.
            </p>
          </div>
        </div>

        {/* Right Section: Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[500px] h-[420px] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
            {/* Replace this with your actual image later */}
            <img src='/assets/About_Us_Image.jpg' className='w-full h-[420px]'/>
          </div>
        </div>
      </div>
      <DivorceInsightQuiz/>
    </div>
  );
}

export default AboutUs;
