import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import FaqAccordion from '../FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady'; // Adjust path as needed

const BlogDetailPage = () => {
  const { slug } = useParams(); // This could be a slug OR an ID
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const url = "https://unsaathi-backend.onrender.com";

  // Track when data is fully loaded for ReviJs
  const isDataReady = !loading && (blog !== null || error !== null);
  useReviReady([isDataReady]);

  useEffect(() => {
    if (!slug) return;

    console.log('Fetching blog with identifier:', slug);
    
    // First try: Fetch by slug
    fetch(`${url}/api/blogs/slug/${slug}`)
      .then(response => {
        if (response.ok) return response.json();
        // If slug fails, try as ID
        return fetch(`${url}/api/blogs/${slug}`).then(res => {
          if (!res.ok) throw new Error('Blog not found');
          return res.json();
        });
      })
      .then(data => {
        console.log('Blog found:', data.title);
        setBlog(data);
        if (data.faqs && data.faqs.length > 0) {
          setFaqs(data.faqs);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug, url]);

  const schemaData = blog ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.seoMetaDescription || blog.summary,
    "image": blog.images?.length ? blog.images : [],
    "author": {
      "@type": "Organization",
      "name": "Unsaathi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Unsaathi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unsaathi.com/logo.png"
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://unsaathi.com/blog/${blog.slug || blog._id}`
    }
  } : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c48e53] mx-auto mb-4"></div>
          <p className="text-xl font-serif text-neutral-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Blog Not Found
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{blog.seoTitle || blog.title}</title>
        <meta name="description" content={blog.seoMetaDescription || blog.summary} />
        <link rel="canonical" href={`https://unsaathi.com/blog/${blog.slug || blog._id}`} />
        {schemaData && (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )}
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f5e7db] via-[#e8d5c4] to-[#f5e7db] py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c48e53]/10 to-[#a07a3a]/10"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            {blog.images && blog.images.length > 0 && blog.images[0] ? (
              <div className="mb-12">
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl shadow-2xl mx-auto max-w-4xl"
                  onError={(e) => {
                    console.log('Image error:', e.target.src.substring(0, 50) + '...');
                    e.target.style.display = 'none';
                  }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-[500px] md:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl mx-auto max-w-4xl flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">No Featured Image</span>
              </div>
            )}
            <div className="text-center">
              <p className="text-lg md:text-xl text-neutral-600 mb-4 font-medium tracking-wide">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-8 leading-tight">
                {blog.title}
              </h1>
              {blog.seoMetaDescription && (
                <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto font-light italic mb-12">
                  {blog.seoMetaDescription}
                </p>
              )}
              <Link
                to="/blogs"
                className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm hover:bg-white text-neutral-900 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:-translate-y-1"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto px-6 py-24">
          <div
            className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{
              __html: (blog.content || blog.summary || '')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>')
            }}
          />
        </article>

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-[#232122]">Frequently Asked Questions</h2>
            <FaqAccordion faqs={faqs} />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetailPage;