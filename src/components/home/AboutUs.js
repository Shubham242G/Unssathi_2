import React from 'react';

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
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F5EFE9] text-center py-16 px-4">
        <h2 className="font-serif text-4xl text-gray-800 mb-6">
          Unsaathi Walks You Through This Journey Hassle-Free With Our Divorce Services.
        </h2>
        <button className="bg-[#E3D1BF] text-gray-700 font-semibold text-lg rounded-full px-10 py-3 transition hover:bg-[#d4b89c]">
          Make An Appointment
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
