// components/GurgaonDivorcePage.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GurgaonDivorcePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 px-4 md:px-8">
      <Helmet>
  <title>Best Divorce Lawyer in Gurgaon | Top Family Law Firm | Unsaathi</title>
  <meta name="description" content="Need the best divorce lawyer in Gurgaon? Unsaathi's expert family lawyers handle divorce, custody, alimony, 498A & DV cases near you. Free consult. Call: +91 9266877791" />
  <meta name="keywords" content="divorce lawyer gurgaon, divorce gurgaon" />
</Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Divorce in Gurgaon: Complete Guide to Process, Costs & Legal Help | GSLO Unsaathi
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Gurgaon Family Court (Court 6) handles surging cases (~15/month, MNC/BPO couples), under Hindu Marriage Act; mutual fastest (6-9 months, cooling-off waivable if separated 18+ months).<span className="text-pink-500">*</span>[web:19][web:22]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Grounds: Adultery, cruelty; steps include joint petitions, motions.<span className="text-pink-500">*</span>[web:19]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Costs: Mutual ₹40k flat packages; contested higher with filings (₹100-500), lawyers (₹20k+).<span className="text-pink-500">*</span>[web:21][web:25]
          </p>
        </section>

        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Divorce Details</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li className="p-6 bg-white rounded-xl shadow-md">• <strong>Mutual Process:</strong> First/Second Motion; waive wait per Supreme Court (Amardeep Singh case).<span className="text-pink-500">*</span>[web:19][web:23]</li>
            <li className="p-6 bg-white rounded-xl shadow-md">• <strong>Contested:</strong> Litigation on property/DV; alimony/child support.<span className="text-pink-500">*</span>[web:20]</li>
            <li className="p-6 bg-white rounded-xl shadow-md">• <strong>Stats:</strong> High in high-income groups; NCR trend up.<span className="text-pink-500">*</span>[web:22]</li>
            <li className="p-6 bg-white rounded-xl shadow-md">• <strong>Costs Breakdown:</strong> Court ₹100-5k, notary ₹1k-5k, lawyer varies.<span className="text-pink-500">*</span>[web:21][web:25]</li>
            <li className="p-6 bg-white rounded-xl shadow-md md:col-span-2">• <strong>Services at GSLO:</strong> Full matrimonial support—custody, NRI divorces, privacy.<span className="text-pink-500">*</span></li>
          </ul>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="bg-pink-50 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GSLO: Top Divorce Lawyers in Gurgaon</h2>
          <p className="text-lg text-gray-700">
            GSLO provides strategic advocacy for Gurgaon cases since 2010.<span className="text-pink-500">*</span>
          </p>
          <Link 
  to="/contact"
  className="mt-10 px-8 py-3 bg-[#d4a373] text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58850] border-2 border-[#d4a373] shadow-md hover:shadow-lg inline-block hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:ring-offset-2"
>
  Get Help Now
</Link>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default GurgaonDivorcePage;
