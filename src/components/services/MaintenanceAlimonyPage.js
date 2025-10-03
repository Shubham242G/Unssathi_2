import React from 'react';

const MaintenanceAlimonyPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Top Banner Section */}
      <section className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
          Maintenance And Alimony - Legal Obligations For<br />
          Financial Support Post-Separation
        </h1>
        <p className="text-lg md:text-xl mt-3 text-[#c48e53] font-medium">
          In Most Marriages, Either Spouse (Primarily Female) Depends On The Other.
          This Is Where The Concept Of Maintenance And Alimony Comes To The Rescue.
        </p>
        <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          The terms maintenance or alimony are used interchangeably. It refers to the amount one spouse pays to another post-divorce so the spouse can sustain themselves. There are two types of Maintenance and Alimony: Interim Maintenance – This is also called temporary maintenance or maintenance of pendente lite. The interim maintenance is usually granted to the dependent spouse or child. This temporary financial support helps the individual to go through the proceedings. Section 24 of the Hindu Marriage Act, of 1955 deals with interim maintenance. Furthermore, the provision of temporary maintenance is also mentioned in Section 144 of BNSS and Section 125 of CrPc. Permanent Maintenance – This type refers to the long-term financial support provided to the dependent spouse post-divorce. The permanent maintenance and alimony ensure stability for the dependent spouse. The court analyses factors like income disparity, lifestyle during the marriage tenure, and other future needs that are considered while providing maintenance. Moreover, this could be a time payment or a recurring support; in the end, the main aim is to prevent financial hardships and promote equality among the spouses.
        </p>
      </section>

      {/* Section 2: Laws List Block */}
      <section className="py-10 px-3 md:px-8 bg-[#f5e7db] rounded-xl mb-12">
        <h2 className="text-3xl font-serif font-semibold text-center mb-2">Unsaathi For You</h2>
        <h3 className="text-2xl font-serif font-bold text-center mb-5">
          Laws Governing The Maintenance And Alimony
        </h3>
        <p className="text-center text-[#c48e53] mb-8 text-lg font-medium">
          There Are Various Laws That Govern The Provisions Related To Maintenance And Alimony
        </p>
        <ul className="max-w-3xl mx-auto space-y-10">
          <li>
            <h4 className="text-xl font-bold font-serif mb-1 leading-tight">Hindu Marriage Act, 1955</h4>
            <p className="text-base text-neutral-800">Section 25 of the Hindu Marriage Act, 1955, refers to maintenance and alimony. The court can order the spouse to pay the dependent spouse a sum to maintain and sustain their post-divorce lifestyle.</p>
          </li>
          <li>
            <h4 className="text-xl font-bold font-serif mb-1 leading-tight">Hindu Adoption And Maintenance Act, 1956</h4>
            <p className="text-base text-neutral-800">As per Section 18(2) of the Hindu Adoption and Maintenance Act, 1956, a woman born Hindu is entitled to get maintenance by her husband throughout her lifetime. The act also provides that the wife has the right to separate the house and maintain it according to the provision of this act.</p>
          </li>
          <li>
            <h4 className="text-xl font-bold font-serif mb-1 leading-tight">Muslim Women (Protection Of Rights On Divorce) Act</h4>
            <p className="text-base text-neutral-800">Under the Muslim Women (Protection of Rights on Divorce) Act, the wife is entitled to get maintenance and alimony from her husband. The court considers all necessary factors and ensures a reasonable amount during her iddat period.</p>
          </li>
          <li>
            <h4 className="text-xl font-bold font-serif mb-1 leading-tight">The Parsi Marriage And Divorce Act, 1936</h4>
            <p className="text-base text-neutral-800">The Parsi Marriage and Divorce Act of 1936 provides the right to maintenance and alimony to Parsi women in India. Before granting maintenance and alimony, the court considers factors such as the husband’s earnings, property, and other assets.</p>
          </li>
          <li>
            <h4 className="text-xl font-bold font-serif mb-1 leading-tight">Indian Divorce Act, 1869</h4>
            <p className="text-base text-neutral-800">Section 37 of the right to maintenance and alimony for Christian women. The wife can apply for maintenance and alimony to sustain their life after divorce. However, before providing the maintenance, the court considers all necessary factors like the husband’s income, assets, etc.</p>
          </li>
        </ul>
      </section>

      {/* Section 3: Final Banner Block */}
      <section className="py-14 px-3 md:px-8 bg-[#f5e7db] rounded-xl text-center">
        <h2 className="text-3xl font-serif font-bold mb-2">
          Legal Maintenance And Alimony - Rights, Obligations, And Enforcement
        </h2>
        <p className="mb-8 text-lg md:text-xl font-medium text-[#c48e53]">
          Maintenance And Alimony Help You Secure Financial Stability Post-Divorce. Understanding The Legal Provisions
          Related To Spousal And Child Support In India Allows You To Step Into New Beginnings Without The Stress Of Finances.
        </p>
        <button className="mx-auto bg-[#d5bfa7] text-neutral-900 rounded-full px-8 py-3 font-bold text-lg hover:bg-[#c48e53] transition">
          Talk To Legal Experts
        </button>
        {/* For the abstract face SVG illustration, use an <img> with the SVG, or insert the SVG inline if you extract it */}
        <div className="mt-8 flex flex-col items-center">
          {/* Placeholder for the SVG/line art at the bottom */}
          {/* <img src="/abstract-face.svg" alt="Abstract Face" className="h-28" /> */}
          {/* You will need to add your abstract SVG image */}
        </div>
      </section>
    </div>
  );
};

export default MaintenanceAlimonyPage;
