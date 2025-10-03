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
              Divorce can take a toll on your mental health. From the stress of <span className="font-semibold text-gray-900">legal separation</span>,
              financial uncertainties, and navigating <span className="font-semibold text-gray-900">child custody disputes</span>, everything can
              be overwhelming in this journey. It is essential to understand that the <span className="font-semibold text-gray-900">emotional stress of divorce</span> can
              be aggravated by the challenges of knowing your rights, dealing with family court lawyers, and divorce lawyer fees in India.
              Not to mention, the societal pressure makes coping with divorce a lot worse for many.
            </p>
            <p>
              At Unsaathi, we work to alleviate your stress and ease your burden. With our comprehensive <span className="font-semibold text-gray-900">divorce solutions</span>, we offer peace of mind in the most challenging life transitions. Whether you’re looking for the best divorce lawyer, an <span className="font-semibold text-gray-900">affordable divorce lawyer</span>, or a divorce settlement consultant, our team of experts is always there for you. We offer end-to-end support that ranges from separation guidance to <span className="font-semibold text-gray-900">divorce mediation services</span>. At Unsaathi, we ensure your legal and emotional
              concerns are always met with care.
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
    </div>
  );
}

export default AboutUs;
