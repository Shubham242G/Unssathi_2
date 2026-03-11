// components/NoidaDivorcePage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NoidaDivorcePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 px-4 md:px-8">
      <Helmet>
  <title>GSLO Unsaathi - Best Divorce Lawyers Delhi NCR</title>
  <meta name="description" content="Expert divorce lawyers Delhi, Noida, Gurgaon. Mutual consent divorces from ₹20k." />
</Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* SEO Title/Meta - Use Next.js Head in _app or page */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Divorce in Noida: Complete Legal Process, Costs & Expert Guidance from GSLO
        </h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Noida, in Uttar Pradesh, sees rising divorce filings at Gautam Budh Nagar Family Court, with ~9,000 annual cases in NCR influenced by urban stress and women's independence.<span className="text-pink-500">*</span>[web:13][web:14]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Governed by Hindu Marriage Act 1955, Muslim Personal Law, or Special Marriage Act, mutual consent divorces (fastest at 6-12 months) require joint petitions, 6-month cooling-off (waivable), alimony/child custody agreements.<span className="text-pink-500">*</span>[web:14]
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Contested cases drag 2-5+ years on cruelty, desertion, adultery grounds, costing ₹1L-₹15L+ including lawyer fees (junior: ₹20k-₹40k; senior: ₹75k+), court/notary (₹1k-₹5k).<span className="text-pink-500">*</span>[web:9][web:11][web:16]
          </p>
        </section>

        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mutual vs Contested Divorce</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>• <strong>Mutual Divorce Steps:</strong> File joint petition (First Motion), wait 6 months for Second Motion; total ~6-12 months; costs ₹20k-₹80k (lawyer ₹15k-₹60k, court ₹500-₹2k).<span className="text-pink-500">*</span>[web:11][web:14]</li>
            <li>• <strong>Contested Divorce:</strong> Prove fault grounds; multiple hearings, evidence; higher costs with expert witnesses (₹5k-₹20k).<span className="text-pink-500">*</span>[web:9]</li>
            <li>• <strong>Child Custody/Alimony:</strong> Courts prioritize child welfare; shared custody rising; alimony based on income (up to 1/3rd).<span className="text-pink-500">*</span>[web:10]</li>
            <li>• <strong>Noida Stats:</strong> NCR divorce rate ~1-2%, up 30-40% in cities; women file more.<span className="text-pink-500">*</span>[web:13][web:18]</li>
            <li>• <strong>GSLO Services:</strong> Unsaathi/GSLO handles Noida filings, mediation, 100% privacy; contact for free consult.<span className="text-pink-500">*</span></li>
          </ul>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="bg-pink-50 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Unsaathi/GSLO for Divorce in Noida?</h2>
          <p className="text-lg text-gray-700">
            Established 2010, GSLO excels in family law across NCR courts, offering end-to-end support from petition drafting to settlements.<span className="text-pink-500">*</span>
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

export default NoidaDivorcePage;
