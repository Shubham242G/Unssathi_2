import React from 'react';

// You can replace this with your actual blog data, fetched from an API
const blogPosts = [
  {
    title: "Decoding Divorce and Judicial Separation: Legal and Personal Implications",
    date: "May 16, 2025",
    author: "By Unsaathi",
    description: "When a marriage has reached a critical distress point, the words divorce and judicial separation emerge as...",
    link: "#"
  },
  {
    title: "Rebuilding Your Life Post-Divorce",
    date: "May 9, 2025",
    author: "By Unsaathi",
    description: "The impact of a...",
    link: "#"
  },
  {
    title: "How to Challenge a Divorce Settlement",
    date: "April 21, 2025",
    author: "By Unsaathi",
    description: "How to Challenge a Divorce Settlement: Legal Options and Procedures The finalisation of a divorce settleme...",
    link: "#"
  },
  {
    title: "Divorce Law and Domestic Violence",
    date: "April 11, 2025",
    author: "By Unsaathi",
    description: "Divorce Law and Domestic Violence: Legal Protections and Rights Divorce is a complex process, but it...",
    link: "#"
  },
  {
    title: "The Role of a Divorce Lawyer: How They Can Protect Your Legal Interests",
    date: "April 24, 2025",
    author: "By Unsaathi",
    description: "Myth Buster: Alimony in India is not for females only. Many of the conversations about divorce and its...",
    link: "#"
  },
  {
    title: "Child Custody After Divorce: Law and Significance",
    date: "April 13, 2025",
    author: "By Unsaathi",
    description: "", // Description not visible in screenshot
    link: "#"
  }
];

const BlogCard = ({ post }) => (
  <article className="bg-white p-4 rounded-lg shadow-md flex flex-col">
    {/* Placeholder for blog post image */}
    <div className="h-48 bg-gray-200 rounded-t-lg mb-4"></div>
    <div className="p-4 flex flex-col flex-grow">
      <p className="text-xs text-gray-500 mb-2">{post.date} | {post.author}</p>
      <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-2 hover:text-[#c48e53] transition-colors">
        <a href={post.link}>{post.title}</a>
      </h3>
      <p className="text-neutral-700 text-sm flex-grow">{post.description}</p>
    </div>
  </article>
);


const BlogListingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5e7db] py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Our Blogs
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Our blog aims to provide valuable information, practical advice, and inspiration for our readers.
          </p>
          {/* Placeholder for graduation cap illustration */}
          <div className="h-32 mt-8"></div>
        </div>
      </section>

      {/* Main Content: Blog Grid and Sidebar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Blog Posts Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-1">
            <div className="bg-[#f5e7db] p-8 rounded-lg text-center sticky top-20">
              {/* Placeholder for expert guidance illustration */}
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
      </section>

      {/* Full-width CTA Section */}
      <section className="py-24 bg-gray-800 text-white text-center relative">
        {/* You should apply the dark background image with an overlay here */}
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
