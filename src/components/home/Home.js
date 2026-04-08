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

function Home() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Track when data is fully loaded for ReviJs
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);
  
  useEffect(() => {
  console.log('Home component mounted');
  
  fetchFaqsByCategory("home")
    .then(setFaqs)
    .catch(err => console.error("FAQs services page error:", err))
    .finally(() => {
      setLoading(false);
      console.log('Setting __REVI_READY__ = true');
      window.__REVI_READY__ = true;
    });
}, []);
  
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://unsaathi.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does mutual divorce cost in Delhi NCR?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mutual divorce costs ₹20k-₹80k (6-12 months). Contested divorces ₹1L-₹15L+ (2-5 years). Includes lawyer fees, court costs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does mutual divorce take in Noida?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "6 months minimum cooling-off period at Gautam Budh Nagar Family Court. Total 6-12 months with Unsaathi."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you handle child custody cases?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Courts prioritize child welfare. We handle shared custody, visitation rights, maintenance across Delhi NCR courts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which courts do you serve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Delhi High Court, Gautam Budh Nagar Family Court (Noida), Gurgaon Family Court (Court 6), plus Bhopal & Indore."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is consultation free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Free initial consultation. Call +91-9266877791 or email info@unsaathi.com for divorce case evaluation."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
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