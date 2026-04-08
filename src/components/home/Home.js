import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ForYou from './ForYou';
import UnsaathiSolutions from './Solutions';
import NewBeginning from './NewBegining';
import HassleFreeProcess from './HassleFreeProcess';
import ConnectWithUnsaathi from './connectWithUnsaathi';
import { Helmet } from 'react-helmet-async';
import FaqAccordion from '../FaqAccordion';
import { fetchFaqsByCategory } from '../../utils/fetchFaqs';
import { useReviReady } from '../../hooks/useReviReady';
import { organizationSchema, websiteSchema, localBusinessSchema, faqSchemaFromData } from '../../utils/schemaHelper';

function Home() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
    console.log('Home component mounted');
    
    fetchFaqsByCategory("home")
      .then(setFaqs)
      .catch(err => console.error("FAQs services page error:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Helmet>
        <title>Unsaathi - Best Divorce Lawyers in Delhi NCR | Mutual & Contested Divorce</title>
        <meta 
          name="description" 
          content="Expert divorce lawyers serving Delhi NCR - Noida, Delhi, Gurgaon. Mutual consent & contested divorces from ₹20k. Free consultation. Call +91-9266877791." 
        />
        <meta name="keywords" content="divorce lawyer, mutual divorce, child custody, alimony, family law, Delhi, Noida, Gurgaon" />
        <link rel="canonical" href="https://www.unsaathi.com/" />
        
        {/* Organization Schema - for all pages */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        
        {/* Local Business Schema for main locations */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema("Delhi NCR", "/"))}
        </script>
        
        {/* Dynamic FAQ Schema from API */}
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchemaFromData(faqs))}
          </script>
        )}
      </Helmet>

      <Hero />
      <HassleFreeProcess/>
      <AboutUs/>
      <ForYou/>
      <UnsaathiSolutions/>
      <NewBeginning/>
      <ConnectWithUnsaathi/>
      
      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#232122]">FAQs</h2>
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
}

export default Home;