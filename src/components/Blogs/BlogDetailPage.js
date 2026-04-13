import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import FaqAccordion from '../FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const url = "https://unsaathi-backend.onrender.com";

  const isDataReady = !loading && (blog !== null || error !== null);
  useReviReady(isDataReady);

  useEffect(() => {
    if (!slug) return;

    console.log('Fetching blog with identifier:', slug);
    
    fetch(`${url}/api/blogs/slug/${slug}`)
      .then(response => {
        if (response.ok) return response.json();
        return fetch(`${url}/api/blogs/${slug}`).then(res => {
          if (!res.ok) throw new Error('Blog not found');
          return res.json();
        });
      })
      .then(data => {
        console.log('Blog found:', data.title);
        console.log('Images structure:', data.images);
        console.log('Gallery array:', data.images?.gallery);
        
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

  // Extract images correctly from the nested structure
  const extractImages = () => {
    if (!blog || !blog.images) {
      return { bannerImage: null, galleryImages: [] };
    }
    
    let bannerImage = null;
    let galleryImages = [];
    
    if (blog.images.cover !== undefined) {
      bannerImage = blog.images.cover || blog.images.thumbnail || null;
      galleryImages = blog.images.gallery || [];
      console.log(`Extracted ${galleryImages.length} gallery images`);
    }
    else if (Array.isArray(blog.images)) {
      bannerImage = blog.images[0] || null;
      galleryImages = blog.images.slice(1);
    }
    else if (typeof blog.images === 'string') {
      bannerImage = blog.images;
      galleryImages = [];
    }
    
    return { bannerImage, galleryImages };
  };
  
  const { bannerImage, galleryImages } = extractImages();

  const schemaData = blog ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.seoMetaDescription || blog.summary,
    "image": bannerImage,
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
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Blog Not Found
          </h2>
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

  // Render content with inline images
  const renderContentWithImages = (content) => {
    if (!content) return null;
    
    console.log('Rendering content, gallery images available:', galleryImages.length);
    
    const hasImagePlaceholders = /\[image:\d+\]/.test(content);
    
    if (!hasImagePlaceholders) {
      return (
        <div
          className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')
          }}
        />
      );
    }
    
    const segments = [];
    let lastIndex = 0;
    const regex = /\[image:(\d+)\]/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const textSegment = content.substring(lastIndex, match.index);
        if (textSegment.trim()) {
          segments.push({
            type: 'text',
            content: textSegment
          });
        }
      }
      
      const imageIndex = parseInt(match[1]);
      segments.push({
        type: 'image',
        index: imageIndex
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < content.length) {
      const textSegment = content.substring(lastIndex);
      if (textSegment.trim()) {
        segments.push({
          type: 'text',
          content: textSegment
        });
      }
    }
    
    return (
      <div className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none">
        {segments.map((segment, idx) => {
          if (segment.type === 'text') {
            return (
              <div
                key={`text-${idx}`}
                dangerouslySetInnerHTML={{
                  __html: segment.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n/g, '<br>')
                }}
              />
            );
          } else {
            const imageUrl = galleryImages[segment.index];
            if (imageUrl) {
              return (
                <figure key={`img-${idx}`} className="my-8">
                  <img
                    src={imageUrl}
                    alt={`Blog illustration ${segment.index + 1}`}
                    className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="text-center text-sm text-gray-500 mt-2 italic">
                    Image {segment.index + 1}
                  </figcaption>
                </figure>
              );
            } else {
              return (
                <div key={`img-${idx}`} className="my-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                  <p className="text-yellow-700">⚠️ Image {segment.index + 1} not found</p>
                  <p className="text-sm text-yellow-600 mt-2">
                    You have {galleryImages.length} gallery image(s) available.
                    Image indices start from 0.
                  </p>
                </div>
              );
            }
          }
        })}
      </div>
    );
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
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Simple Banner Image Section - Fixed, no zooming */}
        {bannerImage ? (
          <div className="w-full">
            <img
              src={bannerImage}
              alt={blog.title}
              className="w-full"
              style={{
                maxHeight: '500px',
                objectFit: 'contain',
                backgroundColor: '#f5f5f5'
              }}
              onError={(e) => {
                console.error('Banner image failed to load');
                e.target.style.display = 'none';
              }}
              loading="eager"
            />
          </div>
        ) : (
          <div className="w-full h-32 bg-gradient-to-r from-[#c48e53]/20 to-[#a07a3a]/20"></div>
        )}

        {/* Title Section */}
        <div className="bg-gradient-to-br from-[#f5e7db] via-[#e8d5c4] to-[#f5e7db] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
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
              className="group inline-flex items-center gap-3 bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {renderContentWithImages(blog.content || blog.summary || '')}
        </article>

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-[#232122] text-center">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetailPage;