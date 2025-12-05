import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://unsaathi-backend.onrender.com";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image + Header */}
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
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content - PRESERVES PARAGRAPHS */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        <div 
          className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:text-neutral-900 prose-headings:font-black prose-p:text-lg prose-p:leading-relaxed prose-p:my-8 prose-li:my-4 prose-a:text-[#c48e53] hover:prose-a:underline prose-strong:font-semibold prose-strong:text-neutral-900 prose-blockquote:italic prose-blockquote:not-italic:font-serif prose-blockquote:border-l-4 prose-blockquote:border-[#c48e53] prose-blockquote:pl-6 prose-blockquote:text-neutral-700 prose-img:rounded-xl prose-img:shadow-lg my-12"
          dangerouslySetInnerHTML={{ 
            __html: (blog.content || blog.summary || '').replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') 
          }}
        />
      </article>

      {/* CTA Section */}
      <section className="bg-[#f5e7db] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Looking For Expert Guidance?
          </h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Continue exploring our insights or get in touch for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blogs"
              className="bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Read More Blogs
            </Link>
            <a
              href="#contact"
              className="bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-neutral-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
