import React, { useState } from "react";

const FaqAccordion = ({ faqs = [] }) => {
  console.log("📈 FaqAccordion received faqs:", faqs); // <-- check

  const [openIndex, setOpenIndex] = useState(null);

  // DEBUG: show if empty
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={faq._id || index}
          open={openIndex === index}
          onToggle={(e) => {
            if (e.target.open) {
              setOpenIndex(index);
            } else {
              setOpenIndex(null);
            }
          }}
          className="border rounded-lg p-4 bg-white shadow"
        >
          <summary className="font-semibold cursor-pointer text-lg">
            {faq.question}
          </summary>
          <p className="mt-3 text-gray-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};


export default FaqAccordion;
