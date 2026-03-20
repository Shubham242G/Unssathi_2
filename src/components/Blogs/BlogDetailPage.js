import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const url = "https://unsaathi-backend.onrender.com";
  // const url = "http://localhost:5000";

  useEffect(() => {
    fetch(`${url}/api/blogs/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Blog not found');
        return response.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);




useEffect(() => {
  fetch(`${url}/api/faq`)
    .then(res => {
      console.log("STATUS:", res.status);

      if (!res.ok) throw new Error('Failed to fetch FAQs');
      return res.json();
    })
    .then(data => {
      // ✅ Only show active FAQs
      console.log("FAQ DATA:", data); 
      const activeFaqs = data.filter(faq => faq.isActive !== false);
      setFaqs(activeFaqs);
    })
    .catch(err => console.error('FAQ fetch error:', err));
}, []);

  /* ---------- Dynamic Blog Schema ---------- */

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
      "@id": `https://unsaathi.com/blogDetailPage/${blog._id}`
    }
  } : null;

  /* ---------- Loading ---------- */

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

  /* ---------- Error ---------- */

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Blog Not Found
          </h1>
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
      {/* ---------- SEO + Schema ---------- */}

      <Helmet>

        <title>{blog.seoTitle || blog.title}</title>

        <meta
          name="description"
          content={blog.seoMetaDescription || blog.summary}
        />

        <link
          rel="canonical"
          href={`https://unsaathi.com/blogDetailPage/${blog._id}`}
        />

        {/* Structured Data */}

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

            {blog.images && blog.images[0] && (
              <div className="mb-12">
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl shadow-2xl mx-auto max-w-4xl"
                />
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

        <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

  {faqs.map((faq, index) => (
    <details key={index} className="mb-3 border p-3 rounded">
      <summary className="font-semibold cursor-pointer">
        {faq.question}
      </summary>
      <p className="mt-2 text-gray-600">
        {faq.answer}
      </p>
    </details>
  ))}
</div>

      </div>
    </>
  );
};

export default BlogDetailPage;