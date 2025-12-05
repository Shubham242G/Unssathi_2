import React, { useState, useEffect } from 'react';
import BlogCard from './Blogs'; // Make sure this path is correct
 
const BlogListingPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const url = "https://unsaathi-backend.onrender.com";
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${url}/api/blogs?page=${page}&limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        // Get total count from header or default to null
        const totalCount = response.headers.get('X-Total-Count');
        if (totalCount) {
          setTotalPages(Math.ceil(parseInt(totalCount, 10) / limit));
        } else {
          setTotalPages(1); // Default to 1 if header not present
        }
        return response.json();
      })
      .then(data => {
        // Filter out any null/empty posts just in case
        const filteredData = data.filter(post => post);
        console.log('Fetched blogs:', filteredData);
        setBlogPosts(filteredData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  if (error) {
    return (
      <div className="text-center py-40 text-xl font-serif text-red-600">
        Error: {error}
      </div>
    );
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          aria-current={i === page ? 'page' : undefined}
          className={`mx-1 px-4 py-2 rounded font-semibold ${
            i === page
              ? 'bg-[#c48e53] text-white'
              : 'bg-white text-[#c48e53] hover:bg-[#a07a3a] hover:text-white'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#f5e7db] py-20 text-center">
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

      <main className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {loading ? (
              <div className="text-center py-12 text-xl font-serif col-span-full">
                Loading blogs...
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12 text-xl font-serif col-span-full">
                No blogs found.
              </div>
            ) : (
              blogPosts.map(post => <BlogCard key={post._id} post={post} />)
            )}
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

        <div className="flex justify-center mt-12">{renderPagination()}</div>
      </main>
      
    </div>
  );
};

export default BlogListingPage;
