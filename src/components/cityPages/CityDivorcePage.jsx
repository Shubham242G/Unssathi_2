import React from 'react';
import { useLocation } from 'react-router-dom';
import NoidaDivorcePage from './NoidaDivorcePage';
import DelhiDivorcePage from './DelhiDivorcePage';
import GurgaonDivorcePage from './GurgaonDivorcePage';

const CityDivorcePage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // ✅ FIXED: let allows reassignment
  let citySlug = '';
  
  if (pathname === '/divorce-lawyer-noida') citySlug = 'noida';
  else if (pathname === '/divorce-lawyer-delhi') citySlug = 'delhi';
  else if (pathname === '/divorce-lawyer-gurgaon') citySlug = 'gurgaon';
  
  const cityPages = {
    noida: <NoidaDivorcePage />,
    delhi: <DelhiDivorcePage />,
    gurgaon: <GurgaonDivorcePage />,
  };

  const page = cityPages[citySlug];
  
  if (!page) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-lg text-gray-700">Path: {pathname}</p>
          <a href="/" className="mt-6 inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return page;
};

export default CityDivorcePage;
