// components/DelhiDivorcePage.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DelhiDivorcePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 px-4 md:px-8">
      <Helmet>
  <title> Best Divorce Lawyer in Delhi | Top Family Law Firm | Unsaathi </title>
  <meta name="description" content="Searching for the best divorce lawyer in Delhi? Unsaathi's top family lawyers handle divorce, custody, alimony, 498A & DV cases. Free consultation. Call: +91 9266877791." />
  <meta name="keywords" content="divorce lawyer delhi, mutual divorce delhi" />
</Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Divorce in Delhi: Laws, Step-by-Step Process & Costs | Unsaathi Experts
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Delhi leads India with ~9,000 annual divorces (up from 1,000 in 1990s), driven by urban lifestyles, economic independence (women filing more).<span className="text-pink-500">*</span>[web:13][web:26]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Under Hindu Marriage Act/Special Marriage Act, mutual consent (Sec 13B) needs two motions, 6-month gap (waivable post-18 months separation); contested on 9 grounds like cruelty.<span className="text-pink-500">*</span>[web:14]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Costs: Mutual ₹25k-₹1L (lawyer dominant); contested ₹2L+ with hearings/interim apps.<span className="text-pink-500">*</span>[web:21]
          </p>
        </section>

        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-12 overflow-x-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comparison Table</h2>
          <div className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead className="bg-pink-100">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Timeline</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Avg Cost (₹)</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Key Factors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-lg text-gray-700 font-medium">Mutual Consent<span className="text-pink-500">*</span>[web:11]</td>
                  <td className="px-6 py-4 text-lg text-gray-700">6-12 months</td>
                  <td className="px-6 py-4 text-lg text-gray-700">25,000-1,00,000</td>
                  <td className="px-6 py-4 text-lg text-gray-700">Agreement on custody/alimony; court fees ₹500-2k</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-lg text-gray-700 font-medium">Contested<span className="text-pink-500">*</span>[web:9][web:16]</td>
                  <td className="px-6 py-4 text-lg text-gray-700">2-5 years</td>
                  <td className="px-6 py-4 text-lg text-gray-700">2,00,000+</td>
                  <td className="px-6 py-4 text-lg text-gray-700">Evidence, witnesses; alimony 25% income</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="bg-pink-50 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GSLO Advantage in Delhi</h2>
          <p className="text-lg text-gray-700 mb-6">
            GSLO's Delhi expertise ensures quick resolutions, full confidentiality.<span className="text-pink-500">*</span>
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

export default DelhiDivorcePage;
