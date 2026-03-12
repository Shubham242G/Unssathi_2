import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ForYou from './ForYou';
import UnsaathiSolutions from './Solutions';
import NewBeginning from './NewBegining';
import HassleFreeProcess from './HassleFreeProcess';
import ConnectWithUnsaathi from './connectWithUnsaathi';
import { Helmet } from 'react-helmet-async';


function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Helmet>
        <title>Best Divorce & Family Lawyers in India | Call Unsaathi</title>
        <meta name="description" content="India's trusted family law firm for divorce, custody, alimony, dowry & 498A cases. Expert lawyers across Delhi, Noida & Gurgaon. Free consultation. Call: +91 9266877791" />
      </Helmet>

      <Hero />
      <HassleFreeProcess/>
      <AboutUs/>
      <ForYou/>
      <UnsaathiSolutions/>
      <NewBeginning/>
      <ConnectWithUnsaathi/>
      {/* JSON-LD Schema - SEO Supercharger */}
<Helmet>
  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://unsaathi.com/#organization",
        "name": "GSLO Unsaathi",
        "alternateName": "Unsaathi Divorce Lawyers",
        "url": "https://unsaathi.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://unsaathi.com/assets/logo.png"
        },
        "description": "Expert divorce lawyers serving Delhi NCR - Noida, Delhi, Gurgaon. Mutual consent & contested divorces from ₹20k. Family law specialists.",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand",
            "addressLocality": "Najafgarh",
            "addressRegion": "Delhi",
            "postalCode": "110043",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "208-209, Tower-E, Alphathum",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201305",
            "addressCountry": "IN"
          }
        ],
        "telephone": "+91-9266877791",
        "email": "info@unsaathi.com",
        "sameAs": [
          "https://www.linkedin.com/company/unsaathi-official",
          "https://www.instagram.com/official_unsaathi",
          "https://www.facebook.com/unsaathi"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Delhi"
          },
          {
            "@type": "City",
            "name": "Noida"
          },
          {
            "@type": "City",
            "name": "Gurgaon"
          }
        ],
        "serviceType": "Divorce Lawyer",
        "priceRange": "₹20k - ₹20L+",
        "legalName": "Gaurav Sharma Legal Offices (GSLO)"
      },
      {
        "@type": "WebSite",
        "@id": "https://unsaathi.com/#website",
        "url": "https://unsaathi.com",
        "name": "GSLO Unsaathi - Divorce Lawyers Delhi NCR",
        "publisher": {
          "@id": "https://unsaathi.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://unsaathi.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
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
              "text": "6 months minimum cooling-off period at Gautam Budh Nagar Family Court. Total 6-12 months with GSLO Unsaathi."
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

    </div>
  );
}

export default Home;
