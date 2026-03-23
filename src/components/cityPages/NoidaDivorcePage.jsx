import React from "react";
import { useLocation } from "react-router-dom";
import NoidaDivorcePage from "./NoidaDivorcePage";
import DelhiDivorcePage from "./DelhiDivorcePage";
import GurgaonDivorcePage from "./GurgaonDivorcePage";
import FaqPage from "../Faq/FaqPage";
import { Link } from "react-router-dom";
import ForYou from "../home/ForYou";


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

  const services = [
  { label: "Restitution of Conjugal Rights", path: "/services/conjugal-Rights" },
  { label: "Contested Divorce", path: "/services/contested-Divorce" },
  { label: "Maintenance and Alimony", path: "/services/maintanance-And-Alimony" },
  { label: "Dowry Cases", path: "/services/dowry" },
  { label: "Child Custody", path: "/services/child-Custody" },
  { label: "Cruelty", path: "/services/cruelty" },
  { label: "Judicial Separation", path: "/services/judicial-Separation" },
  { label: "Child Visitation", path: "/services/child-Visitation" },
  { label: "Annulment of Marriage", path: "/services/annulment-Of-Marriage" },
  { label: "Mutual Divorce", path: "/services/mutual-Divorce" },
];

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
      <section className="relative py-24 text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/Noida.jpeg')" }} // 👈 your image in public/assets
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
      Divorce Lawyers in {cityName}
    </h1>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
      Expert legal support for divorce, custody, alimony, and family disputes.
      Get guidance from experienced lawyers in {cityName}.
    </p>

    <button className="bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition">
      Talk to a Lawyer
    </button>
  </div>
</section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-serif font-bold text-center mb-12">
    Our Legal Services in {cityName}
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-[#eee]"
      >
        <h3 className="text-xl font-semibold mb-3">
          {service.label}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          Professional legal support tailored to your case with complete confidentiality.
        </p>

        <Link
          to={service.path}
          className="text-[#b88b6c] font-semibold"
        >
          Know More →
        </Link>
      </div>
    ))}
  </div>
</section>

      {/* ================= WHY CHOOSE US ================= */}
      <ForYou/>

      {/* ================= FAQ ================= */}
      <FaqPage/>
    </div>
  );
};

export default CityDivorcePage;