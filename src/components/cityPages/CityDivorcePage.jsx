import React from 'react';
import { useLocation } from 'react-router-dom';  // ← Use this instead
import NoidaDivorcePage from './NoidaDivorcePage';
import DelhiDivorcePage from './DelhiDivorcePage';
import GurgaonDivorcePage from './GurgaonDivorcePage';
import { Helmet } from 'react-helmet-async';

const CityDivorcePage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Extract city from exact URL paths
//   let citySlug = '';
  const citySlug = location.pathname.split('/divorce-lawyer-')[1];

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
        <Helmet>
        <title>Divorce Lawyers {citySlug.charAt(0).toUpperCase() + citySlug.slice(1)} | GSLO Unsaathi</title>
        <meta name="description" content={`Best divorce lawyers in ${citySlug}. Mutual & contested divorce services.`} />
      </Helmet>

        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-lg text-gray-700 mb-4">Current path: <code>{pathname}</code></p>
          <a href="/" className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return page;
};

export default CityDivorcePage;
