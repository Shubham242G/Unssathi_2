import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing

// --- REDESIGNED BLOG CARD COMPONENT ---
const BlogCard = ({ post }) => (
  // Added transition, hover effects, and a more pronounced shadow
  <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col group">
    
    {/* Dynamic Image Display */}
    <div className="h-56">
      {post.images && post.images.length > 0 ? (
        <img 
          src={post.images[0]} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-gray-500 mb-3">
        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      {/* Title now uses seoTitle and links to a dynamic blog post page */}
      <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex-grow group-hover:text-[#c48e53] transition-colors">
        <Link to={`/blogs/${post._id}`}>
          {post.seoTitle || post.title}
        </Link>
      </h3>

      {/* Using 'summary' field from your schema */}
      <p className="text-neutral-600 text-base mb-6">
        {post.summary}
      </p>
      
      {/* Read More link */}
      <div className="mt-auto">
        <Link to={`/blogs/${post._id}`} className="font-semibold text-[#c48e53] hover:text-neutral-900 transition-colors">
          Read More →
        </Link>
      </div>
    </div>
  </article>
);


// --- MAIN BLOG LISTING PAGE ---
const BlogListingPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const  url =  "https://unsaathi-backend.onrender.com"

  useEffect(() => {
    fetch(`${url}/api/blogs`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="text-center py-40 text-xl font-serif">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-xl font-serif text-red-600">Error: {error}</div>;
  }

  return (
    // Changed background for a softer look
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#f5e7db] py-20 text-center">
          {/* ... (Hero section remains the same) ... */}
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our Blogs
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
              Our blog aims to provide valuable information, practical advice, and inspiration for our readers.
            </p>
            <div className="h-32 mt-8"></div>
          </div>
      </section>

      {/* Main Content: Blog Grid and Sidebar */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Blog Posts Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {blogPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-1">
            <div className="bg-[#f5e7db] p-8 rounded-lg text-center sticky top-28">
              {/* ... (Sidebar remains the same) ... */}
              <div className="h-40 mb-6"></div>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-neutral-900">
                Looking For Expert Guidance?
              </h3>
              <button className="bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Full-width CTA Section */}
      <section className="py-24 bg-gray-800 text-white text-center relative">
          {/* ... (CTA section remains the same) ... */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Top Legal Divorce Consultants In Delhi NCR
            </h2>
            <p className="text-base md:text-lg mb-8">
              At Unsaathi, we create a safe haven where individuals and families find solace and support without judgment. Our tailored solutions address the specific needs of each client, providing them with peace of mind and saving valuable time. By offering compassionate support and a cost-effective process, we empower our clients to embrace their future with confidence.
            </p>
            <button className="bg-[#d5bfa7] hover:bg-white text-neutral-900 font-semibold px-8 py-4 rounded-md text-lg transition-colors duration-300">
              About Us
            </button>
          </div>
      </section>
    </div>
  );
};

export default BlogListingPage;
