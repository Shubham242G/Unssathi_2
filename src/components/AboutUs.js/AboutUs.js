import React from 'react';
import ConnectWithUnsaathi from '../home/connectWithUnsaathi';
import Lottie from 'lottie-react';
import aboutAnimation from '../../bannerImages/about-us-banner-anim.json';

// SocialIcon component remains the same
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition">
    {children}
  </a>
);

export default function AboutUsPage() {
  return (
    <div className="bg-[#F5EFE9] font-serif overflow-x-hidden"> {/* Prevents horizontal scroll on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Unravelling Unsaathi */}
        <section className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#232122] mb-4">Unravelling Unsaathi</h1>
          <p className="text-base md:text-lg text-[#726964] max-w-3xl mx-auto mb-8">
            Empowering you with peace of mind, guiding you towards a brighter future, and redefining the divorce landscape in India.
          </p>
          {/* Lottie Animation - Adjusted for proportion and responsiveness */}
          <div className="flex justify-center max-w-xl mx-auto">
            <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto" />
          </div>
        </section>

        {/* Section 2: Divorce In India. Think Unsaathi */}
        <section className="text-center py-16 md:py-20">
          <p className="text-[#b88b6c] font-semibold mb-2">Divorce In India</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-6">Divorce In India. Think Unsaathi</h2>
          <div className="max-w-4xl mx-auto text-base md:text-lg text-[#726964] space-y-6">
            <p>
              Unsaathi provides more than just divorce services; we are your compassionate ally, taking you towards a fresh start. Coping with a divorce can be emotionally and financially overwhelming. We strive to guide you through this challenging time with expertise, unparalleled support, and empathy, ensuring you come out of this phase more confident and stronger.
            </p>
            <p>
              Our wide range of divorce services is designed to meet your unique requirements. Whether you need legal representation from the best divorce lawyer near you or avail separation guidance from expert divorce consultants, we are here for you. We look after every aspect of a divorce, from the complexities of matrimonial disputes to the emotional stress of legal separation.
            </p>
            <p>
              We take pride in being not just legal experts but emotional anchors. We understand that the emotional stress of divorce can be difficult, but with Unsaathi, you will not have to face it alone. Our team of empathetic experts provides the legal aid you need to cope with the challenges ahead. We offer more than just legal guidance; we are here to help you heal, grow, and reconstruct your life.
            </p>
            <p>
              Choosing Unsaathi means choosing a friend that's committed to your well-being. We provide affordable divorce lawyer services without compromising on quality, ensuring that everyone has access to the best legal representation. With us, you can trust that your divorce will be handled with the utmost professionalism, transparency, and care.
            </p>
            <p>
              Let Unsaathi help you turn the page and embrace a future filled with hope, strength, and new beginnings.
            </p>
          </div>
          <div className="mt-10">
            <button className="bg-[#d5bfa7] text-[#232122] px-8 py-3 rounded-full font-semibold hover:bg-[#c4ab92] transition-transform transform hover:scale-105">
              Let's Talk
            </button>
          </div>
        </section>

        {/* Section 3: Mission and Vision */}
        <section className="py-16 md:py-20 space-y-16">
          <div className="text-center">
            <p className="text-[#b88b6c] font-semibold mb-2">The Unsaathi Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232122]">At Unsaathi Divorce Is Not The End, It's A Brand New Beginning.</h2>
            <p className="max-w-4xl mx-auto text-base md:text-lg text-[#726964] mt-6">
              Unsaathi is committed to providing compassionate divorce services and expert separation guidance. We understand that the emotional stress of divorce can be overwhelming, so we empower our clients with the support and guidance to overcome the tough times legally and emotionally. We strongly believe divorce is not the end but the beginning of a new life.
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#b88b6c] font-semibold mb-2">Unsaathi Vision</p>
            <p className="max-w-4xl mx-auto text-base md:text-lg text-[#726964]">
              Unsaathi envisions a future where divorce is perceived as a path to healing and approached with compassion. We aim to revolutionize the notion of getting a divorce in India by providing seamless and tailored divorce services. With our separation guidance and one-on-one counselling, we help individuals and families move on with renewed hope and courage.
            </p>
          </div>
        </section>

        {/* Section 4: Meet The Founder */}
        <section className="py-16 md:py-20">
          <div className="text-center">
            <p className="text-[#b88b6c] font-semibold mb-2">Unsaathi's Visionary</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-12">Meet The Founder</h2>
          </div>
          {/* Added responsive ordering for mobile */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-[#232122] mb-1">GAURAV SHARMA</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-[#e0d6cc] text-sm px-3 py-1 rounded-full">LLB, Faculty of Law</span>
                <span className="bg-[#e0d6cc] text-sm px-3 py-1 rounded-full">MBA, IMT Ghaziabad</span>
              </div>
              <div className="text-base md:text-lg text-[#726964] space-y-4">
                <p>
                  Gaurav Sharma, the founder of Unsaathi, has always been driven by a deep sense of purpose. With a rich academic background in Economics and Law from Delhi University, Gaurav's expertise is extensive and deeply rooted in his passion for bridging the gap between law and personal well-being. His motivation for founding Unsaathi stems from a desire to offer individuals facing divorce compassionate legal support that prioritizes emotional well-being alongside legal guidance.
                </p>
                <p>
                  Through his visionary leadership, Unsaathi is transforming the divorce process in India, providing clients with the tools to navigate this challenging phase with confidence, peace of mind, and a renewed sense of hope. Gaurav's leadership at Unsaathi focuses on breaking the stigma around divorce, providing expert legal advice, and helping clients embrace new beginnings with confidence and peace of mind. Through his work, Gaurav is reshaping the divorce landscape in India.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <SocialIcon href="#">LinkedIn</SocialIcon>
                <SocialIcon href="#">Other</SocialIcon>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
                <img src='/assets/GAURAV-SHARMA-UNSAATHI.jpg' className='object-cover w-full h-auto md:h-[600px] rounded-2xl shadow-lg' alt="Gaurav Sharma, Founder of Unsaathi"/>
            </div>
          </div>
        </section>

        {/* Section 5: Stress-Free Guidance */}
        <section className="py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img src='/assets/About_Us_Page_2nd_image.webp' className='object-cover w-full h-auto md:h-[600px] rounded-2xl shadow-lg' alt="Compassionate legal guidance session"/>
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-6">
              Getting A Divorce In India Can Be Stress-Free With The Right Guidance, Support, And Compassionate Legal Care.
            </h2>
            <div className="text-base md:text-lg text-[#726964] space-y-4">
              <p>
                Divorce in India is still often seen as a taboo, bringing emotional stress and societal pressure. Many fear the complexities of the process and the stigma attached. Unsaathi is breaking these barriers by offering compassionate support and expert legal guidance, making divorce a stress-free and empowering journey toward a brighter future.
              </p>
              <p>
                Unsaathi is transforming the way divorce is handled in India by providing empathetic support and expert legal guidance. Focused on care and understanding, Unsaathi helps individuals navigate the complexities of divorce with confidence, turning a difficult process into a journey of personal growth and new beginnings.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-[#d5bfa7] text-[#232122] px-8 py-3 rounded-full font-semibold hover:bg-[#c4ab92] transition-transform transform hover:scale-105">
                Book An Appointment
              </button>
            </div>
          </div>
        </section>

        {/* Section 6: Real Stories */}
        <section className="text-center py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-4">Real Stories Of New Beginnings. How Unsaathi Transformed Divorce Into Hope</h2>
          <p className="text-base md:text-lg text-[#726964] max-w-3xl mx-auto mb-12">
            Explore inspiring stories from our clients who found clarity and strength with Unsaathi. Their journeys reflect resilience and the power of compassionate support in transforming challenges into new beginnings.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Testimonial 1 */}
            <div className="border border-[#d5bfa7] p-8 text-left md:w-1/2 bg-white/50 rounded-lg shadow-sm">
              <p className="text-6xl text-[#d5bfa7] -mt-4">“</p>
              <p className="text-base md:text-lg text-[#726964] italic">
                "All my expectations were surpassed. The approach that Gaurav took in my divorce case not only saved me time, but tonnes of money as well. With their guidance, I regained my confidence and navigated co-parenting with a newfound perspective."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="border border-[#d5bfa7] p-8 text-left md:w-1/2 bg-white/50 rounded-lg shadow-sm">
              <p className="text-6xl text-[#d5bfa7] -mt-4">“</p>
              <p className="text-base md:text-lg text-[#726964] italic">
                "Unsaathi created a safe space for me to heal during such a turbulent time in my life. Their sensitivity towards my background and struggles made all the difference. From legal advice to emotional support, I had it all."
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Contact Form */}
        <section className="py-16 md:py-20">
            <ConnectWithUnsaathi/>
        </section>

      </div>
    </div>
  );
}
