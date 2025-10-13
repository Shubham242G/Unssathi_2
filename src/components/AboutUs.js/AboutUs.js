import React, { useState } from 'react';
import ConnectWithUnsaathi from '../home/connectWithUnsaathi';
import Lottie from 'lottie-react';
import aboutAnimation from '../../bannerImages/about-us-banner-anim.json';
import { Link } from 'react-router-dom';


const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition">
    {children}
  </a>
);

export default function AboutUsPage() {
   const [isStarted, setIsStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showConclusion, setShowConclusion] = useState(false);
  
    const quizQuestions = [
      {
        question: "Which statement best describes the communication in your relationship?",
        options: [
          { text: "We talk openly and resolve conflicts constructively.", value: 0 },
          { text: "We talk, but important issues are often avoided.", value: 1 },
          { text: "Arguments are frequent and rarely resolved.", value: 2 },
          { text: "We barely speak to each other anymore.", value: 3 }
        ]
      },
      {
        question: "How do you feel about the future of your relationship?",
        options: [
          { text: "Hopeful and committed to making it work.", value: 0 },
          { text: "Uncertain, but willing to try.", value: 1 },
          { text: "Pessimistic, I feel we are drifting apart.", value: 2 },
          { text: "I believe the relationship may be over.", value: 3 }
        ]
      },
      {
        question: "Are there concerns about safety, respect, or trust?",
        options: [
          { text: "No, I feel completely safe and respected.", value: 0 },
          { text: "There have been minor breaches of trust.", value: 1 },
          { text: "I sometimes feel disrespected or unheard.", value: 2 },
          { text: "Yes, I have concerns about my emotional or physical safety.", value: 4 }
        ]
      },
      {
        question: "If children are involved, what is your main concern regarding them?",
        options: [
          { text: "Ensuring they feel loved and supported by both parents.", value: 0 },
          { text: "How to co-parent effectively if we separate.", value: 2 },
          { text: "I'm worried about their well-being in the current environment.", value: 3 },
          { text: "This question is not applicable.", value: 0 }
        ]
      },
      {
        question: "When you think about separation, what is your biggest question?",
        options: [
          { text: "Is it possible to separate amicably?", value: 1 },
          { text: "What are my legal rights and obligations?", value: 2 },
          { text: "How do we handle property and finances?", value: 2 },
          { text: "How can I ensure my and my children's safety?", value: 4 }
        ]
      }
    ];
  
    const handleAnswerClick = (value) => {
      setScore(prevScore => prevScore + value);
  
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowConclusion(true);
      }
    };
  
    const getConclusion = () => {
      if (score <= 3) {
        return {
          title: "Building on a Strong Foundation",
          text: "Your answers suggest that while there may be challenges, your relationship has a strong foundation of communication and hope. Exploring couples counseling could provide you with new tools to strengthen your bond further."
        };
      }
      if (score <= 7) {
        return {
          title: "Navigating Uncertainty",
          text: "It sounds like you are at a crossroads, facing uncertainty but still open to solutions. This is a common stage where mediation or a trial separation (Judicial Separation) can provide clarity. A legal consultation could help you understand these options without pressure."
        };
      }
      if (score <= 12) {
        return {
          title: "Considering a New Path",
          text: "Your responses indicate significant and persistent challenges. It may be time to understand your legal rights regarding divorce, property division, and child custody. An expert consultation can provide a clear roadmap for your next steps."
        };
      }
      return {
        title: "Prioritizing Safety and Security",
        text: "Your answers raise serious concerns about safety and well-being. It is crucial to seek immediate legal guidance, especially concerning domestic violence or dowry-related issues. Your safety is the highest priority, and legal protections are available."
      };
    };
  
    const restartQuiz = () => {
      setIsStarted(true);
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowConclusion(false);
    };
    
    const conclusion = getConclusion();
  return (
    <div className="bg-[#F5EFE9] font-serif overflow-x-hidden"> {/* Prevents horizontal scroll on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Unravelling Unsaathi - Premium Version */}
        <section className="py-24 md:py-36 ">
          <div className="grid md:grid-cols-2 items-center gap-20 max-w-7xl mx-auto px-6">

            {/* Left side - Text content */}
            <div className="text-left space-y-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#232122] tracking-tight">
                Unravelling Unsaathi
              </h1>
              <p className="text-lg md:text-xl text-[#726964] max-w-lg leading-relaxed">
                Empowering you with peace of mind, guiding you towards a brighter future,
                and redefining the divorce landscape in India.
              </p>

              {/* --- CTA Button --- */}
              <div className="pt-4">
                <Link to='/connect_With_Us'>
                <button className="px-8 py-3 border-2 border-[#d4a373] text-[#b58850] rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#d4a373] hover:text-white shadow-md hover:shadow-lg ">
                  Explore Our Services
                </button>
                </Link>
              </div>
            </div>

            {/* Right side - Lottie animation */}
            <div className="flex justify-center md:justify-start">
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                className="w-full md:w-[90%] lg:w-[85%] h-auto max-h-[600px]"
              />
            </div>
          </div>
        </section>



        {/* Section 5: Stress-Free Guidance */}
        {/* Section 2: Divorce In India. Think Unsaathi. */}
<section className="py-24 md:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 lg:gap-24">
    
    {/* Left side - Image */}
    <div className="w-full h-[550px] rounded-2xl shadow-xl overflow-hidden order-last md:order-first">
      <img 
        src='/assets/About_Us_Page_2nd_image.webp' 
        className='object-cover w-full h-full' 
        alt="A compassionate legal consultation session" 
      />
    </div>
    
    {/* Right side - Text content */}
    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#232122] tracking-tight mb-6">
        Divorce In India. Think Unsaathi.
      </h2>
      
      {/* Lead Paragraph (replaces H4) */}
      <p className="text-xl text-[#726964] mb-8">
        Getting a divorce in India can be stress-free with the right guidance, support, and compassionate legal care.
      </p>

      {/* Main Body Paragraph (Consolidated) */}
      <p className="text-lg text-[#726964] leading-relaxed mb-10">
        While divorce in India is often seen as a taboo that brings emotional stress, Unsaathi is breaking these barriers. We provide empathetic support and expert legal guidance, transforming a difficult process into an empowering journey of personal growth and new beginnings.
      </p>
      
      {/* WhatsApp CTA Link */}
      <div>
        <a 
          href="https://wa.me/919266877791" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#d5bfa7] text-[#232122] px-8 py-4 rounded-full font-semibold
                     transition-all duration-300 ease-in-out
                     hover:bg-[#c4ab92] hover:shadow-md hover:-translate-y-1"
        >
          Book An Appointment
        </a>
      </div>
    </div>
  </div>
</section>


        {/* Section 3: Mission and Vision */}
        <section className="py-16 md:py-20 space-y-16">
          <div className="text-center">
            <p className="text-[#b88b6c] font-semibold mb-2">The Unsaathi Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232122]">Divorce Is Not The End, It's A Brand New Beginning.</h2>
            <p className="max-w-4xl mx-auto text-base md:text-lg text-[#726964] mt-6">
              Unsaathi is committed to providing compassionate divorce services and expert separation guidance. We understand that the emotional stress of divorce can be overwhelming, so we empower our clients with the support and guidance to overcome the tough times legally and emotionally. We strongly believe divorce is not the end but the beginning of a new life.
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
                <a href="www.linkedin.com/in/gaurav-sharma-82a87125b" className="text-[#b88b6c]" aria-label="LinkedIn">
              <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9h4v12H4zm6.563 0h3.682v1.645h.053a4.105 4.105 0 0 1 3.699-2.034c3.954 0 4.69 2.603 4.69 5.986V21h-4v-5.855c0-1.344-.028-3.074-1.873-3.074-1.876 0-2.162 1.464-2.162 2.972V21h-4z"/></svg>
            </a>
                <a href="https://www.instagram.com/gauravlaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#b88b6c] mt-1" aria-label="Instagram">
              <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3h-8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img src='/assets/GAURAV-SHARMA-UNSAATHI.jpg' className='object-cover w-full h-auto md:h-[600px] rounded-2xl shadow-lg' alt="Gaurav Sharma, Founder of Unsaathi" />
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
          <ConnectWithUnsaathi />
        </section>

      </div>
    </div>
  );
}
