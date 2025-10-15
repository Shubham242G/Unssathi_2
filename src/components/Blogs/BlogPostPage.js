import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostPage = () => {
  // This hook grabs the 'id' from the URL (e.g., /blog/12345)
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const  url =  "https://unsaathi-backend.onrender.com"

  useEffect(() => {
    // The fetch URL is now dynamic, using the 'id' from the URL
    fetch(`${url}/api/blogs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // This effect re-runs whenever the 'id' in the URL changes

  if (loading) {
    return <div className="text-center py-40 font-serif text-xl">Loading Post...</div>;
  }

  if (error) {
    return <div className="text-center py-40 font-serif text-xl text-red-600">Error: {error}</div>;
  }
  
  if (!post) {
      return <div className="text-center py-40 font-serif text-xl">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          
          {/* Back to Blogs Link */}
          <div className="mb-8">
            <Link to="/blogs" className="font-semibold text-[#c48e53] hover:text-neutral-900 transition-colors">
              ← Back to All Blogs
            </Link>
          </div>

          {/* Post Header */}
          <header className="mb-8 border-b pb-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              {post.seoTitle || post.title}
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          {/* Post Image */}
          {post.images && post.images.length > 0 && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.images[0]} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Post Content */}
          {/* The 'prose' class from Tailwind Typography is great for styling blog content */}
          <div className="prose prose-lg max-w-none text-neutral-700 whitespace-pre-line">
            {post.content || post.summary}
          </div>

        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;

