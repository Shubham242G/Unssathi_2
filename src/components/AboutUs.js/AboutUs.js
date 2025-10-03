import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#f5e7db]">
      {/* Hero Section - Unravelling Unsaathi */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Unravelling Unsaathi
          </h1>
          <p className="text-lg md:text-xl text-[#c48e53] font-medium max-w-3xl mx-auto">
            Empowering you with peace of mind, guiding you towards a brighter future, and redefining the divorce landscape in India
          </p>

          {/* Placeholder for your illustration */}
          <div className="my-12 h-64 flex items-center justify-center">
            {/* You can add your new illustration or component here */}
          </div>

          <p className="text-xl md:text-2xl text-neutral-800 max-w-4xl mx-auto font-medium">
            We bring you an array of <span className="font-bold">divorce services</span> where you get personalized family law solutions and compassionate legal aid from the best <span className="font-bold">divorce lawyers</span>.
          </p>
        </div>
      </section>

      {/* The Unsaathi Mission Section */}
      <section className="bg-[#f5e7db] py-20 relative">
        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Decorative Swirl - Top Left */}
          <div className="absolute left-0 -top-16">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 Q60 120, 100 140 T180 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <h3 className="text-lg text-[#c48e53] font-semibold mb-4">
            The Unsaathi Mission
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            At Unsaathi Divorce Is Not The End, It's A Brand New Beginning.
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-4xl">
            Unsaathi is committed to providing compassionate <span className="font-bold">divorce services</span> and expert <span className="font-bold">separation guidance</span>. We understand that the <span className="font-bold">emotional stress of divorce</span> can be overwhelming, so we empower our clients with the support and guidance to overcome the tough times legally and emotionally. We strongly believe divorce is not the end but the beginning of a new life.
          </p>

          {/* Decorative Swirl - Bottom Right */}
          <div className="absolute right-0 -bottom-16">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M180 20 Q140 80, 100 60 T20 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Legal Remedies For Dowry Cases Section (as seen in screenshots) */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Decorative Swirl - Top Left */}
          <div className="absolute left-0 top-0">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 Q60 120, 100 140 T180 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Legal Remedies For Dowry Cases
          </h1>
          <p className="text-lg text-[#c48e53] font-medium leading-relaxed mb-6">
            Dowry Is Indeed A Social Evil. Even Though It Is An Illegal Practice In India, It Is Still A Significant Social Issue.
          </p>
          <p className="max-w-4xl text-neutral-700 mt-6 leading-relaxed">
            Dowry refers to the transfer of cash, goods, or property from the bride's family to the groom or his family. This exchange even continues after the wedding. According to a report in 2022, every year in India, 6.4 thousand dowry death cases are reported. The demand for dowry and cruelty related to such matters is grounds for divorce and also a criminal offence. Furthermore, it is essential for the victim to gather the evidence to support the allegations of dowry harassment. The victims should not hesitate to report the incident to the police or to go for legal assistance from a specialised family lawyer. Additionally, it is important for the victim to seek medical and psychological help to get over that trauma.
          </p>

          {/* Decorative Swirl - Bottom Right */}
          <div className="absolute right-0 bottom-0">
            <svg className="w-32 h-32 text-neutral-400 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M180 20 Q140 80, 100 60 T20 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Dowry Laws List Section */}
      <section className="bg-[#f5e7db] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <article>
            <h2 className="font-serif text-3xl font-bold mb-3 text-neutral-900">
              Indian Penal Code And Bhartiya Nyaya Sanhita
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Section 498A of IPC and Section 80 of BNS deal with crimes related to dowry. Crimes like cruelty, harassment, and domestic violence can also be invoked in dowry cases. For example, if the dowry harassment involves physical and mental cruelty or even threats to the life or safety of the women, section 498A of IPC and Section 80 of BNS can be invoked.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-3xl font-bold mb-3 text-neutral-900">
              Protection Of Women From Domestic Violence Act, 2005
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              The Protection of Women from Domestic Violence Act of 2005 act extensively safeguards women from all forms of domestic violence or cruelty, which also includes dowry harassment cases.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-3xl font-bold mb-3 text-neutral-900">
              Family Courts Act, 1984
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Family Courts Act, 1984 have their expertise in jurisdiction which deals with matrimonial disputes, which includes dowry related issues as well. The act mainly grants relief such as divorce, separation and maintenance to the victim.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-3xl font-bold mb-3 text-neutral-900">
              False Dowry Cases
            </h2>
            <div className="text-neutral-700 leading-relaxed space-y-4">
              <p>Dowry is a social evil. However, there have been concerns about the potential misuse of dowry laws in India.</p>
              <p>What are "False" Dowry Cases?</p>
              <p>Misuse of Law that protects women: These are cases where accusations of dowry harassment are made without genuine grounds.</p>
              <p>At times, it has been a motive or personal agenda found behind these dowry cases. The reasons might differ from case to case. Be it a</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
