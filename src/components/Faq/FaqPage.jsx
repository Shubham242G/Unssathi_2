// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";

// const FaqPage = () => {
//   const [faqs, setFaqs] = useState([]);

// //   const url = "http://localhost:5000"; 
//  const url = "https://unsaathi-backend.onrender.com";

//   useEffect(() => {
//     fetch(`${url}/api/faq`)
//       .then(res => res.json())
//       .then(data => {
//         const activeFaqs = data.filter(faq => faq.isActive !== false);
//         setFaqs(activeFaqs);
//       })
//       .catch(err => console.error("FAQ error:", err));
//   }, []);

//   // ✅ FAQ Schema for SEO
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs.map(faq => ({
//       "@type": "Question",
//       "name": faq.question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.answer
//       }
//     }))
//   };

//   return (
//     <>
//       <Helmet>
//         <title>FAQs | Unsaathi</title>
//         <meta name="description" content="Frequently asked questions about legal services, divorce, custody, alimony and more." />
        
//         <script type="application/ld+json">
//           {JSON.stringify(faqSchema)}
//         </script>
//       </Helmet>

//       <div className="min-h-screen bg-gray-50 py-16 px-6">
//         <div className="max-w-4xl mx-auto">

//           <h1 className="text-4xl font-bold mb-10 text-center">
//             Frequently Asked Questions
//           </h1>

//           {faqs.map((faq, index) => (
//             <details key={index} className="mb-4 border rounded-lg p-4 bg-white shadow">
//               <summary className="font-semibold cursor-pointer text-lg">
//                 {faq.question}
//               </summary>
//               <p className="mt-3 text-gray-600">
//                 {faq.answer}
//               </p>
//             </details>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// };

// export default FaqPage;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FaqAccordion from "../FaqAccordion";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://unsaathi-backend.onrender.com";

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    window.__REVI_READY__ = false;
    
    fetch(`${BASE_URL}/api/faq/by-category/general`)
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error("FAQ error:", err))
      .finally(() => {
        window.__REVI_READY__ = true;
      });
  }, []);


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQs | Unsaathi</title>
        <meta
          name="description"
          content="Frequently asked questions about legal services, divorce, custody, alimony and more."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h1>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </>
  );
};

export default FaqPage;
