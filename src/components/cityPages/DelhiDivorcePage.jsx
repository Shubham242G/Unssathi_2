import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FaqPage from "../Faq/FaqPage";
import ForYou from "../home/ForYou";

const DelhiDivorcePage = () => {
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

  return (
    <div className="bg-[#f5f1ed] text-[#232122]">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Best Divorce Lawyer in Delhi | Unsaathi</title>
        <meta 
          name="description" 
          content="Looking for the best divorce lawyer in Delhi? Unsaathi offers expert legal help for divorce, custody, alimony & family disputes. Get consultation today." 
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-24 text-center overflow-hidden">

        {/* Background Image */}
      <div
  className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black"
  style={{ backgroundImage: "url('/assets/Delhi.jpeg')" }}
></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Divorce Lawyers in Delhi
          </h1>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            Navigate divorce with confidence. Our experienced Delhi lawyers handle mutual and contested divorce,
            custody, alimony, and family disputes with complete confidentiality.
          </p>

          <Link
            to="/contact"
            className="bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition"
          >
            Talk to a Lawyer
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">
          Our Legal Services in Delhi
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Serving major courts across Delhi including Tis Hazari, Saket, Dwarka & Rohini.
        </p>

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

      {/* ================= WHY + PROCESS (REPLACED) ================= */}
      <ForYou />

      {/* ================= FAQ ================= */}
      <FaqPage />

      {/* ================= CTA ================= */}
      <section className="bg-[#232122] text-white py-16 text-center px-6">
        <h2 className="text-3xl font-serif mb-4">
          Need Legal Help in Delhi?
        </h2>

        <p className="mb-6 text-gray-300">
          Speak with our experienced lawyers and get clarity on your case today.
        </p>

        <Link
          to="/contact"
          className="bg-[#b88b6c] px-8 py-4 rounded-full font-semibold"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default DelhiDivorcePage;