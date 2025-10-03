import React from 'react';

const JudicialSeparationPage = () => {
  return (
    <div className="min-h-screen bg-[#f5e7db]">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
          Unsaathi For You
        </h2>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
          Personal Laws For Judicial Separation
        </h1>
        <p className="text-lg md:text-xl text-[#c48e53] font-medium max-w-3xl mx-auto">
          In India, There Are Various Different Laws That Govern The Judicial Separation.
        </p>
      </section>

      {/* Hindu Marriage Act Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Hindu Marriage Act, 1955
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed">
          Section 10 of the Hindu Marriage Act, 1955, provides for judicial separation. The act applies to the Hindus, Jains, Buddhists, and Sikhs.
        </p>
      </section>

      {/* Special Marriage Act Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Special Marriage Act, 1954
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed">
          Section 27(2) of the Special Marriage Act, 1954, has provisions for judicial separation. The act applies to inter-religious marriages.
        </p>
      </section>

      {/* Indian Divorce Act Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Indian Divorce Act, 1869
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed">
          The act applies to the Christians and Parsis. Section 10 of the Indian Divorce Act, 1869 provides for judicial separation.
        </p>
      </section>

      {/* Decorative Swirl - Bottom Left */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180 Q60 120, 100 140 T180 100" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Judicial Separation - A Legal Guide Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Decorative Swirl - Top Left */}
          <div className="absolute left-0 top-0">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 Q60 120, 100 140 T180 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 mb-6 text-center">
            Judicial Separation - A Legal Guide
          </h1>
          <p className="text-lg md:text-xl text-[#c48e53] font-medium mb-8 text-center">
            Judicial Separation Is A Legal Alternative To Divorce. It Is A Legal Decree That Allows The Couples To Live Separately Without Dissolving The Marriage. Further, There Are Several Grounds For Judicial Separation, They Are Mentioned Below:
          </p>
          <div className="text-base text-neutral-700 leading-relaxed space-y-4">
            <p>
              Cruelty - If either of the spouses inflicts mental or physical abuse on the other spouse, it counts as cruelty. The cruelty encompasses a comprehensive range of behaviour, which includes verbal abuse, neglect, emotional abuse, financial deprivation, physical abuse, etc. Desertion - If either of the spouses abandons the other without any justification or consent it can be a ground for judicial separation. Adultery - When one of the spouses cohabits with another individual. Insanity - When either of the spouses has been declared mentally unfit. Leprosy - If one of the spouses contracts leprosy in a communicable form, it becomes a ground for judicial separation. Venereal Disease - When one spouse contracts a disease in a communicable form.
            </p>
          </div>

          {/* Decorative Swirl - Bottom Right */}
          <div className="absolute right-0 bottom-0">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M180 20 Q140 80, 100 60 T20 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Light Bulb */}
      <section className="bg-[#f5e7db] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Judicial Separation: A Pathway To Reconciliation?
          </h2>
          <p className="text-lg md:text-xl text-[#c48e53] font-medium mb-8">
            Understand The Grounds For Judicial Separation, And Keep Your Path Open For A Reunion. Know Your Rights And Duties When Doing A Judicial Separation.
          </p>
          <button className="bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-300 mb-12">
            Talk To Legal Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default JudicialSeparationPage;
