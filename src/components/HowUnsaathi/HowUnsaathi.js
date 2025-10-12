import Lottie from "lottie-react";
import React from "react";
import data from "../../bannerImages/women.json";

const HowUnsaathiWorksPage = () => {
  return (
    <div className="min-h-screen bg-[#f5e7db]">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            How Unsaathi Works?
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Unsaathi streamlines your divorce journey with our expert divorce
            services, compassionate divorce lawyers, and simplified legal
            processes, ensuring clarity, confidence, and emotional support at
            every step.
          </p>

          {/* Lottie Animation */}
          <div className="flex justify-center mt-8 md:mt-10">
            <Lottie
              animationData={data}
              loop={true}
              className="w-[220px] md:w-[300px] lg:w-[340px] h-auto opacity-95"
            />
          </div>
        </div>
      </section>

      {/* A Resolute Steps Towards a Peaceful and a Brighter Tomorrow */}
      <section className="bg-[#f5e7db] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-lg text-[#c48e53] font-semibold mb-3">
            A Resolute Steps Towards a Peaceful and a Brighter Tomorrow
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-12">
            Let's Take Steps Towards Your Brighter Future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                num: "1.",
                title: "Share Your Story",
                text: "You can simply fill out a questionnaire to share your story with us before availing of the divorce services. This will give us a headstart in understanding your case.",
              },
              {
                num: "2.",
                title: "Choose Your Tailored Solution",
                text: "You can choose the mode of support from Unsaathi. Whether you need legal services for family...",
              },
              {
                num: "3.",
                title: "Get On A Call",
                text: "Schedule a call and choose an online divorce lawyer or visit an expert offline. Unsaathi will adapt according to your preferences, ensuring you get a tailored experience.",
              },
              {
                num: "4.",
                title: "Tailored Guidance At Every Step",
                text: "No two divorces are the same. That's why we offer personalized support through experienced...",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#faf6f2] rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
              >
                <span className="text-6xl font-serif text-gray-300">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-4 mb-3 text-[#232122]">
                  {step.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-lg text-[#c48e53] font-semibold mb-4">
            Unsaathi Process
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What To Expect From Our Divorce Consultants?
          </h2>
          <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto mb-14 leading-relaxed">
            Unsaathi brings you tailored divorce services, wholehearted support,
            and expert separation guidance, turning your divorce into an
            opportunity to rebuild your life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                num: "01",
                title: "Empowering New Beginnings",
                text: "At Unsaathi, we look at divorce as a step towards growth, healing and a fulfilling future.",
              },
              {
                num: "02",
                title: "Tailored Guidance",
                text: "Every divorce case is...",
              },
              {
                num: "03",
                title: "Healing Space",
                text: "We become your guide to emotional strength and allow you to heal and grow.",
              },
              {
                num: "04",
                title: "Anytime, Anywhere",
                text: "Whether you need a...",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#faf6f2] rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
              >
                <h4 className="text-4xl font-serif font-bold text-gray-300">
                  {item.num}
                </h4>
                <h3 className="font-serif text-2xl font-semibold mt-4 mb-3 text-[#232122]">
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Prepare For The Divorce Section */}
      <section className="bg-[#f5e7db] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How To Prepare For The Divorce?
          </h2>
          <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Navigating the divorce process can be challenging and emotionally
            demanding. By preparing yourself mentally, emotionally, and
            practically, you can approach this transition with clarity and
            strength, ensuring a smoother path toward a new beginning.
          </p>

          {/* Two rows of 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Comprehend Your Emotions",
                text: "Divorce often brings a whirlwind of feelings. Take time to acknowledge and process your emotions...",
              },
              {
                title: "Gather Important Documents",
                text: "Collect and organize essential documents, such as financial statements, tax returns, and property deeds...",
              },
              {
                title: "Define Your Goals",
                text: "Before entering the divorce process, define what you hope to achieve...",
              },
              {
                title: "Get Legal Guidance",
                text: "Consult with a divorce lawyer early in the process. They can provide insights into your rights...",
              },
              {
                title: "Plan for Finances",
                text: "Assess your financial situation and create a budget that reflects your new lifestyle...",
              },
              {
                title: "Emphasise Self-Care",
                text: "During this challenging time, it's vital to prioritize self-care. Engage in activities that bring you joy...",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#faf6f2] rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-2xl font-semibold mb-3 text-[#232122]">
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Supports Your Journey Section */}
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2 text-left">
      <h3 className="text-lg text-[#c48e53] font-semibold mb-3">
        Unsaathi Divorce Consultants
      </h3>
      <h2 className="font-serif text-4xl font-bold text-neutral-900 mb-6">
        Who Supports Your Journey
      </h2>
      <div className="space-y-5 text-neutral-700 leading-relaxed">
        <p>
          Unsaathi thrives because of its dedicated team of expert divorce
          consultants and seasoned divorce lawyers. With a profound
          knowledge of legal complexities and emotional challenges, we are
          always ready to assist.
        </p>
        <p>
          The Unsaathi team comprises highly experienced divorce lawyers
          and skilled divorce consultants, each bringing a wealth of
          expertise to the table. With backgrounds in family law,
          mediation, and emotional support, they are qualified to manage a
          vast array of cases.
        </p>
      </div>
    </div>

    {/* ✅ Responsive, proportional image */}
    <div className="md:w-1/2 flex justify-center">
      <div className="w-full max-w-md">
        <img
          src="/assets/how_unsaathi_works_image_2.webp"
          alt="Unsaathi Divorce Consultants"
          className="w-full h-110 rounded-2xl object-cover shadow-md"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HowUnsaathiWorksPage;
