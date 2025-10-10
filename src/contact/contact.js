import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('Submit');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // --- Replace these with your actual IDs from your EmailJS account ---
    const serviceID = 'service_ypeplcf';
    const templateID = 'contact_form';
    const publicKey = 'am1VZPuktoi7yeO5J';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus('Submit');
          alert('Message sent successfully!');
          form.current.reset(); // Resets the form fields after a successful submission
      }, (error) => {
          console.log(error.text);
          setStatus('Submit');
          alert('Failed to send the message. Please try again.');
      });
  };

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
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>998-877-6655</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>info@unsaathi.findbacklinks.in</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">SOCIAL CONNECT</h4>
              <div className="flex space-x-4">
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
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Your Name</label>
                <input type="text" id="name" name="user_name" placeholder="Enter your name" required className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">A phone number</label>
                <input type="tel" id="phone" name="user_phone" placeholder="998-877-6655" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email address</label>
                <input type="email" id="email" name="user_email" placeholder="name@domain.com" required className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-700">Brief description of cases</label>
                <textarea id="description" name="message" rows="4" required className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c48e53] focus:border-[#c48e53] sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold py-3 px-4 rounded-md shadow-sm transition-colors duration-300 disabled:bg-gray-400" disabled={status === 'Sending...'}>
                {status}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Address and Map Section */}
      <section className="py-20 bg-[#f5e7db]">
          <div className="max-w-7xl mx-auto px-6">
              {/* ... (Your address and map content remains here) ... */}
          </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
