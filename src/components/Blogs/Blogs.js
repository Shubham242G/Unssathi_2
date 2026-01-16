import { Link } from 'react-router-dom';

const BlogCard = React.memo(({ post }) => {
  if (!post) return null;  // Prevent rendering if post is undefined

  
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col group">
      <div className="h-56">
        {post.images && post.images.length > 0 ? (
          <img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex-grow group-hover:text-[#c48e53] transition-colors">
          <Link to={`/blogDetailPage/${post._id}`}>{post.seoTitle || post.title}</Link>
        </h3>

        <p className="text-neutral-600 text-base mb-6">{post.summary}</p>

        <div className="mt-auto">
          <Link to={`/blogDetailPage/${post._id}`} className="font-semibold text-[#c48e53] hover:text-neutral-900 transition-colors">Read More →</Link>

        </div>
      </div>
    </article>
  );
});

export default BlogCard;


