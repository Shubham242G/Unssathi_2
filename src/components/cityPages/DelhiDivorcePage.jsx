// components/DelhiDivorcePage.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FaqPage from '../Faq/FaqPage';

const DelhiDivorcePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#232122]">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Best Divorce Lawyer in Delhi | Unsaathi</title>
        <meta 
          name="description" 
          content="Looking for the best divorce lawyer in Delhi? Unsaathi offers expert legal help for divorce, custody, alimony & family disputes. Get consultation today." 
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-20 text-center max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
        >
          Divorce Lawyers in Delhi
        </motion.h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Navigate divorce with confidence. From mutual consent to contested cases,
          our experienced legal team ensures clarity, speed, and complete confidentiality.
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
          Divorce cases in Delhi have significantly increased over the years due to changing lifestyles,
          financial independence, and evolving societal norms. Whether it’s a mutual separation or a
          contested dispute, understanding the legal process is crucial.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Under Indian law, divorce can be filed under acts like the Hindu Marriage Act or Special Marriage Act.
          The process, cost, and duration vary depending on the nature of the case.
        </p>
      </section>

      {/* ================= COMPARISON CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Types of Divorce in Delhi
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mutual */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#eee]">
            <h3 className="text-xl font-semibold mb-4">Mutual Consent Divorce</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Timeline: 6–12 months</li>
              <li>✔ Cost: ₹25,000 – ₹1,00,000</li>
              <li>✔ Requires agreement on alimony & custody</li>
              <li>✔ Faster & less stressful process</li>
            </ul>
          </div>

          {/* Contested */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#eee]">
            <h3 className="text-xl font-semibold mb-4">Contested Divorce</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Timeline: 2–5 years</li>
              <li>✔ Cost: ₹2,00,000+</li>
              <li>✔ Based on legal grounds (cruelty, etc.)</li>
              <li>✔ Requires evidence & court hearings</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Why Choose Unsaathi in Delhi
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Expert Divorce Lawyers",
            "Transparent Pricing",
            "Confidential Handling",
            "Quick Resolution",
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
          How the Process Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Consultation",
            "Case Evaluation",
            "Filing & Documentation",
            "Final Resolution",
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