import React from 'react';

export default function ConjugalRightsPage() {
  return (
    <div className="bg-[#ece2d7] min-h-screen font-serif text-[#232122]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
  <div className="text-center">
    <h3 className="text-3xl font-bold mb-2">The Law Behind Restitution Of Conjugal Rights In India</h3>
    <div className="text-[#b88b6c] mb-12 font-medium">
      In India, There Are Various Different Laws That Govern The Restitution Of Conjugal Rights In India
    </div>
  </div>
  
  {/* --- UPDATED SECTION WITH HORIZONTAL ALIGNMENT --- */}
  {/* The 'lg:flex' class makes it horizontal on larger screens and stacks them on mobile */}
  <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0">
    
    {/* Hindu Marriage Act */}
    <div className="bg-[#fcf8f4] border border-[#b88b6c] rounded-xl p-8 shadow-sm lg:w-1/3 flex flex-col">
      <h4 className="font-bold text-2xl mb-3">Hindu Marriage Act, 1955</h4>
      <p className="text-lg leading-relaxed flex-grow">
        The Hindu Marriage Act, of 1955 primarily governs these remedies for the Hindus, Jains, Buddhists, and Sikhs. The Section 9 of the Hindu Marriage Act, 1955 provides for the restitution of conjugal rights.
      </p>
    </div>

    {/* Special Marriage Act */}
    <div className="bg-[#fcf8f4] border border-[#b88b6c] rounded-xl p-8 shadow-sm lg:w-1/3 flex flex-col">
      <h4 className="font-bold text-2xl mb-3">Special Marriage Act, 1954</h4>
      <p className="text-lg leading-relaxed flex-grow">
        The act applies to inter-religious marriages, and the marriages recognised under the act. The section 27(2) of the Special Marriage Act, of 1954 provides for the restitution of conjugal rights.
      </p>
    </div>

    {/* Indian Divorce Act */}
    <div className="bg-[#fcf8f4] border border-[#b88b6c] rounded-xl p-8 shadow-sm lg:w-1/3 flex flex-col">
      <h4 className="font-bold text-2xl mb-3">Indian Divorce Act, 1869</h4>
      <p className="text-lg leading-relaxed flex-grow">
        This act applies to Christians and Parsis. The Section 10 of the Indian Divorce Act provides for judicial separation, which is a similar concept to the restitution of conjugal rights.
      </p>
    </div>
    
  </div>
</section>

    </div>
  );
}
