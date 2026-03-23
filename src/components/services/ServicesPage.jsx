import React from "react";
import { Link } from "react-router-dom";

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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">

      {/* HERO SECTION */}
<section className="relative py-24 text-center overflow-hidden">

  {/* Background Image */}
  <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/assets/servicePage.mp4" type="video/mp4" />
</video>

  {/* Overlay (VERY IMPORTANT for readability) */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6">
    
    <p className="text-[#e6c7a3] tracking-widest uppercase mb-4 text-sm font-semibold">
      Our Services
    </p>

    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
      Expert Legal Support <br /> for Every Need
    </h1>

    <Link
      to="/contact"
      className="inline-block bg-[#c48e53] hover:bg-[#a07a3a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Get Started Today
    </Link>

  </div>
</section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {service.label}
              </h3>

              <p className="text-gray-600 mb-6">
                Professional legal guidance and representation tailored for your case.
              </p>

              <Link
                to={service.path}
                className="text-[#c48e53] font-semibold hover:underline flex items-center gap-2"
              >
                Read More →
              </Link>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default ServicesPage;