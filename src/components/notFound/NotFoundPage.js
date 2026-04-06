import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Unsaathi</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved. Return to Unsaathi's homepage for legal guidance and support." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#f5e7db] via-[#e8d5c4] to-[#f5e7db]">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-[#c48e53] text-[180px] md:text-[220px] font-bold leading-none tracking-tighter">
              404
            </div>
            <div className="w-24 h-1 bg-[#c48e53] mx-auto my-6 rounded-full"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#232122] mb-4 font-serif">
            Page Not Found
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            It might have been moved, deleted, or never existed.
          </p>

          {/* Helpful Links */}
          <div className="space-y-4 mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Homepage
            </Link>
          </div>

          {/* Quick Navigation Options */}
          <div className="border-t border-neutral-300 pt-8">
            <p className="text-neutral-600 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/blogs" className="text-[#c48e53] hover:text-[#a07a3a] underline font-medium">
                Our Blogs
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/services" className="text-[#c48e53] hover:text-[#a07a3a] underline font-medium">
                Legal Services
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/faqs" className="text-[#c48e53] hover:text-[#a07a3a] underline font-medium">
                Frequently Asked Questions
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/contact" className="text-[#c48e53] hover:text-[#a07a3a] underline font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Search Suggestion (Optional) */}
          <div className="mt-8 p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-neutral-500">
              💡 Need help? Our legal experts are just a click away. 
              <Link to="/connect-With-Us" className="text-[#c48e53] hover:underline ml-1">
                Get in touch with us →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;