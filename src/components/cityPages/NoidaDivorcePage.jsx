import React from "react";
import { useLocation } from "react-router-dom";
import NoidaDivorcePage from "./NoidaDivorcePage";
import DelhiDivorcePage from "./DelhiDivorcePage";
import GurgaonDivorcePage from "./GurgaonDivorcePage";
import FaqPage from "../Faq/FaqPage";

const CityDivorcePage = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let citySlug = "";

  if (pathname === "/divorce-lawyer-noida") citySlug = "noida";
  else if (pathname === "/divorce-lawyer-delhi") citySlug = "delhi";
  else if (pathname === "/divorce-lawyer-gurgaon") citySlug = "gurgaon";

  const cityName =
    citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  const cityPages = {
    noida: <NoidaDivorcePage />,
    delhi: <DelhiDivorcePage />,
    gurgaon: <GurgaonDivorcePage />,
  };

  const page = cityPages[citySlug];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        City Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#f5f1ed] text-[#232122]">

      {/* ================= HERO ================= */}
      <section className="py-20 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          Divorce Lawyers in {cityName}
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Expert legal support for divorce, custody, alimony, and family disputes.
          Get guidance from experienced lawyers in {cityName}.
        </p>

        <button className="bg-[#b88b6c] hover:bg-[#a3775a] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
          Talk to a Lawyer
        </button>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Our Legal Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Mutual Divorce",
            "Contested Divorce",
            "Child Custody",
            "Alimony & Maintenance",
            "Domestic Violence",
            "Dowry Cases",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#eee]"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>

              <p className="text-gray-600 text-sm mb-4">
                Professional legal support tailored to your case with complete confidentiality.
              </p>

              <button className="text-[#b88b6c] font-semibold">
                Know More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Why Choose Unsaathi
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Expert Lawyers",
            "Transparent Pricing",
            "Confidential Support",
            "Fast Process",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-[#eee] shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Consultation",
            "Case Evaluation",
            "Legal Filing",
            "Resolution",
          ].map((step, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#b88b6c] text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#232122] text-white py-16 text-center px-6">
        <h2 className="text-3xl font-serif mb-4">
          Need Legal Help in {cityName}?
        </h2>

        <p className="mb-6 text-gray-300">
          Connect with experienced divorce lawyers today.
        </p>

        <button className="bg-[#b88b6c] px-8 py-4 rounded-full font-semibold">
          Get Started
        </button>
      </section>

      {/* ================= FAQ ================= */}
      <FaqPage/>
    </div>
  );
};

export default CityDivorcePage;