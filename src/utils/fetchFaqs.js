const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://unsaathi-backend.onrender.com";

export const fetchFaqsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/api/faq/by-category/${category}`);
  return res.json();
};
