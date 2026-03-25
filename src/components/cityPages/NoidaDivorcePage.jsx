import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NoidaDivorcePage from "./NoidaDivorcePage";
import DelhiDivorcePage from "./DelhiDivorcePage";
import GurgaonDivorcePage from "./GurgaonDivorcePage";
import { Link } from "react-router-dom";
import ForYou from "../home/ForYou";
import { fetchFaqsByCategory } from "../../utils/fetchFaqs";
import FaqAccordion from "../FaqAccordion";


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

const [faqs, setFaqs] = useState([]);
  
    useEffect(() => {
      fetchFaqsByCategory("divorce-lawyer-noida")
        .then(setFaqs)
        .catch(err => console.error("FAQs services page error:", err));
    }, []);

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
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/assets/Noida.mp4" type="video/mp4" />
</video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
      Divorce Lawyers in {cityName}
    </h1>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
      Expert help for mutual divorce, custody, alimony, and legal documentation—handled with care and confidentiality.
      Get guidance from experienced lawyers in {cityName}.
    </p>

    <button className="bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition">
      Talk to an Expert
    </button>
  </div>
</section>

{/* ================= TRUSTED SECTION ================= */}
<section className="max-w-5xl mx-auto px-6 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
    Trusted Divorce Services in Noida
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed">
    Unsaathi offers reliable and discreet divorce services in Noida, helping individuals navigate legal separation with clarity and confidence. If you are searching for the best divorce lawyer in Noida, our platform connects you with experienced professionals who handle both mutual and contested divorce cases efficiently. From legal consultation to documentation and court procedures, we ensure every step is managed smoothly. Our goal is to reduce emotional stress while maintaining complete confidentiality and legal accuracy. With the guidance of the best divorce lawyer in Noida, you can expect a structured approach that prioritises faster resolution, transparency, and your peace of mind.
  </p>
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

        {/* FAQ SECTION (for services page) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default CityDivorcePage;