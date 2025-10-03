import React from 'react';

// You would typically import your social media icons
// For example: import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5e7db] py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Your Brighter Tomorrow Is Just A Click Away
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-4xl mx-auto">
            Have questions or need guidance on your divorce journey? Our team is here to provide expert divorce services and compassionate support. Reach out today to connect with our experienced divorce lawyers for personalized, hassle-free solutions that prioritize your well-being.
          </p>
          {/* Placeholder for the tangled line art illustration */}
          <div className="h-40 mt-8"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Expertise and Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-lg text-[#c48e53] font-semibold">Unsaathi Expertise</h3>
            <h2 className="font-serif text-4xl font-bold text-neutral-900">Handling Legal Complexities With Expertise & Empathy</h2>
            <p className="text-neutral-700">
              Our team brings a wealth of experience to the table, providing you with a strong foundation of knowledge and expertise. With a proven track record of resolving complex divorce and separation cases, our legal expertise sets us apart as your trusted partner in navigating the legal complexities of family law.
            </p>
            <div className="flex space-x-12">
              <div>
                <p className="font-serif text-4xl font-bold">230+</p>
                <p className="text-neutral-600">Legal Cases Handled</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold">320+</p>
                <p className="text-neutral-600">Legal Advisory On Board</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* Phone Icon Placeholder */}
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>998-877-6655</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* Email Icon Placeholder */}
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>info@unsaathi.findbacklinks.in</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">SOCIAL CONNECT</h4>
              <div className="flex space-x-4">
                {/* Social Media Icon Placeholders */}
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2 bg-[#f5e7db] p-8 rounded-lg">
            <h3 className="text-lg text-[#c48e53] font-semibold">Reach Out To Our Experts</h3>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-2 mb-6">
              Ready to take control of your future? Schedule an appointment now for compassionate, expert divorce services and support.
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">A phone number</label>
                <input type="tel" id="phone" placeholder="998-877-6655" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email address</label>
                <input type="email" id="email" placeholder="name@domain.com" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-700">brief description of cases</label>
                <textarea id="description" rows="4" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold py-3 px-4 rounded-md shadow-sm transition-colors duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Address and Map Section */}
      <section className="py-20 bg-[#f5e7db]">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl font-bold text-neutral-900 mb-6">Top-Notch Divorce Services That Brings Results</h2>
              <p className="text-neutral-700 max-w-4xl mb-12">
                  At Unsaathi, we simplify the divorce process, ensuring that you receive the support you need every step of the way. With access to the best divorce lawyer in Delhi and specialized divorce lawyers for women, our team provides tailored solutions for all situations. Whether you're seeking the best lawyer for mutual divorce or require a divorce mediation lawyer in India, we offer comprehensive legal guidance for contested divorce and legal services for family disputes. Our online divorce lawyers are readily available, ensuring convenience and accessibility.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                      <h3 className="font-serif text-2xl font-semibold mb-4">Our Address</h3>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">Plot No. 7, Fourth Floor, Arihant Nagar Main Rohtak Road Pungabi Bagh, New Delhi-110026</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">412, Emaar Colonnade, Golf Course Extension Road, Sector-66, Gurgaon, Haryana-122018</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">208-209, Town-E, Alphathum, Noida-201305</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">205, B-Block, The One, RNT Marg, Near High Court, Indore-482001</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">401, B-Block HIG, Vijay Stambh, Zone-1, MP Nagar, Bhopal-462011</div>
                      </div>
                      <button className="mt-6 bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold px-6 py-3 rounded-md shadow-sm transition-colors">
                          Make An Appointment
                      </button>
                  </div>
                   {/* Map Placeholder */}
                  <div className="h-96 w-full bg-gray-300 rounded-lg">
                    {/* You can embed your map here */}
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ContactUsPage;

