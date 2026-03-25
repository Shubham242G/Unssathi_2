import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ForYou from "../home/ForYou";
import { fetchFaqsByCategory } from "../../utils/fetchFaqs";
import FaqAccordion from "../FaqAccordion";

const GurgaonDivorcePage = () => {
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
      fetchFaqsByCategory("divorce-lawyer-gurgaon")
        .then(setFaqs)
        .catch(err => console.error("FAQs services page error:", err));
    }, []);

  return (
    <div className="bg-[#f5f1ed] text-[#232122]">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Best Divorce Lawyer in Gurgaon | Unsaathi</title>
        <meta 
          name="description" 
          content="Looking for a divorce lawyer in Gurgaon? Unsaathi offers expert legal help for mutual & contested divorce, custody, alimony & more." 
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative py-24 text-center overflow-hidden">

        {/* Background Image */}
        <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/assets/Gurgaon.mp4" type="video/mp4" />
</video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Divorce Lawyers in Gurgaon
          </h1>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            Expert help for mutual divorce, custody, alimony, and legal documentation—handled with care and confidentiality.
          </p>

          <Link
            to="/contact"
            className="bg-[#b88b6c] hover:bg-[#a3775a] px-8 py-4 rounded-full font-semibold shadow-lg transition"
          >
            Talk to a Lawyer
          </Link>
        </div>
      </section>

      {/* ================= TRUSTED SECTION ================= */}
<section className="max-w-5xl mx-auto px-6 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
    Trusted Divorce Services in Gurgaon
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed">
    Unsaathi offers reliable and discreet divorce services in Gurgaon, helping individuals navigate legal separation with clarity and confidence. If you are searching for the best divorce lawyer in Gurgaon, our platform connects you with experienced professionals who handle both mutual and contested divorce cases efficiently. From legal consultation to documentation and court procedures, we ensure every step is managed smoothly. Our goal is to reduce emotional stress while maintaining complete confidentiality and legal accuracy. With the guidance of the best divorce lawyer in Gurgaon, you can expect a structured approach that prioritises faster resolution, transparency, and your peace of mind.
  </p>
</section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">
          Our Legal Services in Gurgaon
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Serving Gurgaon Family Court with expertise in all types of divorce and family law matters.
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
                Expert legal assistance tailored to your situation with complete confidentiality.
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

      {/* FAQ SECTION (for services page) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#232122] text-white py-16 text-center px-6">
        <h2 className="text-3xl font-serif mb-4">
          Need Legal Help in Gurgaon?
        </h2>

        <p className="mb-6 text-gray-300">
          Speak with our expert lawyers and get clarity on your case today.
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

export default GurgaonDivorcePage;