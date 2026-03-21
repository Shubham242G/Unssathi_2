// components/GurgaonDivorcePage.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FaqPage from '../Faq/FaqPage';

const GurgaonDivorcePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#232122]">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Best Divorce Lawyer in Gurgaon | Unsaathi</title>
        <meta 
          name="description" 
          content="Looking for a divorce lawyer in Gurgaon? Unsaathi offers expert legal help for mutual & contested divorce, custody, alimony & more." 
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-20 text-center max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
        >
          Divorce Lawyers in Gurgaon
        </motion.h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Get expert legal guidance for divorce, custody, alimony, and family disputes in Gurgaon.
          Our lawyers ensure a smooth, confidential, and efficient process.
        </p>

        <Link
          to="/contact"
          className="bg-[#b88b6c] hover:bg-[#a3775a] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
        >
          Talk to a Lawyer
        </Link>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Gurgaon has seen a rise in divorce cases due to fast-paced corporate lifestyles,
          financial independence, and changing relationship dynamics.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you are filing for mutual divorce or dealing with a contested case,
          understanding the process and legal requirements is essential.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Divorce Services in Gurgaon
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Mutual Divorce",
            "Contested Divorce",
            "Child Custody",
            "Alimony & Maintenance",
            "Domestic Violence Cases",
            "NRI Divorce Cases"
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-[#eee]"
            >
              <h3 className="text-lg font-semibold mb-3">{service}</h3>

              <p className="text-gray-600 text-sm mb-4">
                Expert legal assistance tailored to your situation with complete confidentiality.
              </p>

              <span className="text-[#b88b6c] font-semibold">
                Know More →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY INFO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Key Divorce Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border border-[#eee]">
            <h3 className="font-semibold mb-2">Mutual Divorce</h3>
            <p className="text-gray-600 text-sm">
              Takes around 6–9 months. Requires agreement on custody and alimony.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-[#eee]">
            <h3 className="font-semibold mb-2">Contested Divorce</h3>
            <p className="text-gray-600 text-sm">
              Can take 2–5 years depending on evidence, hearings, and disputes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-[#eee]">
            <h3 className="font-semibold mb-2">Legal Grounds</h3>
            <p className="text-gray-600 text-sm">
              Includes cruelty, adultery, desertion, and other valid legal reasons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-[#eee]">
            <h3 className="font-semibold mb-2">Cost</h3>
            <p className="text-gray-600 text-sm">
              Mutual divorce is affordable, while contested cases cost more due to litigation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Why Choose Unsaathi in Gurgaon
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Experienced Lawyers",
            "Transparent Pricing",
            "Confidential Support",
            "Fast Resolution",
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
            "Filing & Documentation",
            "Court Resolution",
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

      <FaqPage/>

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