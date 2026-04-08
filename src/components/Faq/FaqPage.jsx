import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FaqAccordion from "../FaqAccordion";
import { useReviReady } from "../../hooks/useReviReady";

const BASE_URL = "https://unsaathi-backend.onrender.com";

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Track when data is fully loaded for ReviJs
  const isDataReady = !loading && faqs !== null;
  useReviReady(isDataReady);

  useEffect(() => {
    fetch(`${BASE_URL}/api/faq/by-category/general`)
      .then(res => res.json())
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("FAQ error:", err);
        setLoading(false);
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