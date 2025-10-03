import React from "react";

export default function ContestedDivorce() {
  return (
    <div className="min-h-screen bg-[#ece2d7] font-serif text-[#232122]">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsaathi For You</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Laws Governing The Contested Divorce
          </h2>
          <p className="text-[#b88b6c] text-lg mb-12">
            There Are Various Laws That Govern The Contested Divorce In India.
          </p>
        </div>
      </section>
      
      {/* Insights Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* SVG/Illustration placeholder */}
          <div className="w-full h-24 md:h-32 bg-gray-200 rounded-xl mb-8 flex items-center justify-center">
            <span className="text-gray-400">[ Illustration Placeholder ]</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Divorce–Contested - Understanding Your Legal Rights
          </h2>
          <p className="text-[#b88b6c] font-medium mb-2">
            Staying In An Abusive Or Toxic Marriage Takes A Toll On An Individual's Life.
            In Such A Situation, Contested Divorce Paves The Way For A Happier Future.
          </p>
          <p className="text-lg text-[#232122] mb-4">
            Contested Divorce happens when spouses don’t agree on the key issues related to the dissolution of their marriage, like custody of children, alimony, division of property or grounds of divorce. This is in contrast to the mutual divorce, where both parties agree to part ways cordially. The contested divorce involves litigation and requires the court’s intervention to resolve disputes.
          </p>
        </div>
      </section>

      {/* Act Details Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h3 className="text-3xl font-bold mb-2">Hindu Marriage Act, 1955</h3>
            <p className="mb-4">
              Marriages or Vivah in Hindu Religion are considered to be a sacred union.
              Therefore, there are no provisions for the dissolution of the marriage in any of the religious texts. Thus, the constitution has the Hindu Marriage Act, 1955.
              According to the Hindu Marriage Act of 1955, the grounds for contested divorce are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Adultery</b>: If a married individual cohabits with another individual other than their spouse during marriage, it is adultery. Section 497 of the IPC, once a crime, was invalidated by the Supreme Court in Joseph Shine v. Union of India (2018).
              </li>
              <li>
                <b>Cruelty</b>: Not precisely defined, but evolving through courts. Section 498A IPC treats cruelty to women as a crime.
              </li>
              <li>
                <b>Conversion</b>: Conversion to another religion and ceasing to be Hindu dissolves the marriage (Sec 13(1)(ii)).
              </li>
              <li>
                <b>Desertion</b>: Abandonment for two years or more without cause (Sec 13(1)(ib)).
              </li>
              <li>
                <b>Insanity</b>: Ongoing or incurable mental illness qualifies (Sec 13(1)(iii)).
              </li>
              <li>
                <b>Venereal Disease</b>: Incurable, transferable STD (Sec 13(1)(v)).
              </li>
              <li>
                <b>Renunciation</b>: If a partner renounces the world and joins a religious order (Sec 13(1)(vi)).
              </li>
              <li>
                <b>Presumption of Death</b>: Absence for seven years.
              </li>
            </ul>
            <div className="mt-4">
              <b>Special Grounds for Women:</b>
              <ul className="list-disc pl-8 mt-1 space-y-1">
                <li>More than one wife (Sec 13(2)(i))</li>
                <li>Acts like rape, sodomy, bestiality (Sec 13(2)(ii)), etc.</li>
                <li>No cohabitation 1 year after maintenance awarded against husband (Sec 13(2)(iii))</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Special Marriage Act, 1954.</h3>
            <p>
              Governs interfaith marriages and those who choose not to follow personal laws.
              <b> Grounds for divorce under Section 27:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adultery: Voluntary cohabitation outside marriage</li>
                <li>Cruelty: Mental/Physical harm making the relationship unbearable</li>
                <li>Desertion: Abandonment by spouse for two years or more</li>
                <li>Mental illness: Spouse is mentally unstable/incapable of fulfilling marital obligations</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Muslim Personal Law</h3>
            <p>
              In Islamic Law, marriage (Nikah) is a contract; grounds for contested divorce include Adultery, Desertion, Maintenance failure, Impotence, Venereal Disease, Husband’s absence, etc.<br />
              <b>Divorce by husband:</b> via Talaq, which is of two types: Talaq-e-Ahsan &amp; Talaq-e-Hasan.<br />
              <b>Divorce by wife:</b> Khul’ – Wife can initiate but must pay compensation.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section & Call-to-Action */}
      <section className="w-full py-16 px-4 bg-[#ece2d7]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Navigating Contested Divorce</h2>
          <p className="text-[#b88b6c] text-lg mb-4">
            A Contested Divorce Is A Challenging And Emotionally Draining Process, But It Opens The Doors For New Beginnings.
          </p>
          <button className="bg-[#d4b89c] text-[#232122] px-8 py-3 rounded-full font-semibold text-lg transition hover:bg-[#c7a788]">
            Talk To Legal Experts
          </button>
          {/* Illustration/image placeholder */}
          <div className="w-full max-w-3xl h-72 mt-12 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center">
            <span className="text-gray-500">[ Illustration Placeholder ]</span>
          </div>
        </div>
      </section>
    </div>
  );
}
