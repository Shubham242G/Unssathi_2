const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://unsaathi-backend.onrender.com";

export const fetchFaqsByCategory = async (category, blogId = null) => {
  let url = `${BASE_URL}/api/faq/by-category/${category}`;

  if (blogId) {
    url += `?blogId=${blogId}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
};

//fetchFaqsByCategory
