import React, { useState, useEffect } from 'react';
import BlogCard from './Blogs';

const BlogListingPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const url = "https://unsaathi-backend.onrender.com";
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    fetch(`${url}/api/blogs?page=${page}&limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBlogPosts(prev => page === 1 ? data : [...prev, ...data]);
        setHasMore(data.length === limit); // If fewer results returned than limit, no more pages
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [page]);

  if (error) {
    return <div className="text-center py-40 text-xl font-serif text-red-600">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#f5e7db] py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Our Blogs</h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Our blog aims to provide valuable information, practical advice, and inspiration for our readers.
          </p>
          <div className="h-32 mt-8"></div>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {blogPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-[#f5e7db] p-8 rounded-lg text-center sticky top-28">
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

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setPage(prev => prev + 1)}
              className="bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {loading && <div className="text-center py-12 text-xl font-serif">Loading blogs...</div>}
      </main>

      <section className="py-24 bg-gray-800 text-white text-center relative">
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
