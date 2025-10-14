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
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide every 6 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  
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
        <section className="bg-[#f6f2ef] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#b88b6c] font-semibold mb-2">Unsaathi's Visionary</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232122]">Meet The Founder</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Founder Image: Order first on mobile */}
          <div className="w-full order-1 md:order-2">
            <img 
              src='/assets/GAURAV-SHARMA-UNSAATHI.jpg' 
              className='object-cover w-full h-auto max-h-[600px] rounded-2xl shadow-lg' 
              alt="Gaurav Sharma, Founder of Unsaathi" 
            />
          </div>

          {/* Founder Details: Order second on mobile */}
          <div className="w-full order-2 md:order-1 text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-[#232122] mb-4">Adv. GAURAV SHARMA</h3>

            {/* Biography */}
            <div className="text-base md:text-lg text-[#726964] space-y-5">
              <p>
                Gaurav Sharma, the founder of Unsaathi, has always been driven by a deep sense of purpose. With a rich academic background in Economics and Law from Delhi University, his motivation stems from a desire to offer compassionate legal support that prioritizes emotional well-being.
              </p>
              <p>
                Through his visionary leadership, Unsaathi is transforming the divorce process in India. Gaurav's focus is on breaking the stigma around divorce and helping clients embrace new beginnings with confidence, peace of mind, and a renewed sense of hope.
              </p>
            </div>

                        {/* --- INTEGRATED QUOTE CARD --- */}
            <div className="bg-white p-8 rounded-2xl font-serif text-[#232122] relative my-8 shadow-sm">
              <span className="absolute top-4 left-6 text-7xl text-[#eaddd1] opacity-70 -z-1">“</span>
              <p className="text-lg md:text-xl leading-relaxed italic">
                Divorce is one of life’s hardest decisions, but it doesn’t have to define you... Together, we’ll turn this chapter into a new beginning filled with hope.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-5 mt-8">
              <a href="https://www.linkedin.com/in/gaurav-sharma-82a87125b" className="text-[#b88b6c] hover:text-[#9c7150] transition-colors" aria-label="LinkedIn">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM5 8H0v12h5V8zm7.982 0H8.014v12h4.968v-6.2c0-3.368 4.02-3.368 4.02 0V20h4.998v-7.2c0-5.54-7.01-5.54-7.01 0V8z"/></svg>
              </a>
              <a href="https://www.instagram.com/gauravlaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#b88b6c] hover:text-[#9c7150] transition-colors" aria-label="Instagram">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.465a4.898 4.898 0 00-1.772 1.153 4.942 4.942 0 00-1.153 1.772c-.247.637-.415 1.363-.465 2.428C2.013 8.944 2 9.283 2 12s.013 3.056.06 4.122c.05 1.065.218 1.79.465 2.428a4.898 4.898 0 001.153 1.772 4.942 4.942 0 001.772 1.153c.637.247 1.363.415 2.428.465C8.944 21.987 9.283 22 12 22s3.056-.013 4.122-.06c1.065-.05 1.79-.218 2.428-.465a4.898 4.898 0 001.772-1.153 4.942 4.942 0 001.153-1.772c.247-.637.415-1.363.465-2.428C21.987 15.056 22 14.717 22 12s-.013-3.056-.06-4.122c-.05-1.065-.218-1.79-.465-2.428a4.898 4.898 0 00-1.153-1.772 4.942 4.942 0 00-1.772-1.153c-.637-.247-1.363-.415-2.428-.465C15.056 2.013 14.717 2 12 2zm0 2c2.67 0 2.987.01 4.042.059.975.044 1.502.207 1.857.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.355.3.882.344 1.857.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.044.975-.207 1.502-.344 1.857a3.42 3.42 0 01-.748 1.15 3.41 3.41 0 01-1.15.748c-.355.137-.882.3-1.857.344-1.055.048-1.372.058-4.042.058s-2.987-.01-4.042-.058c-.975-.044-1.502-.207-1.857-.344a3.42 3.42 0 01-1.15-.748 3.41 3.41 0 01-.748-1.15c-.137-.355-.3-.882-.344-1.857-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.044-.975.207-1.502.344-1.857.182-.466.398-.8.748-1.15a3.41 3.41 0 011.15-.748c.355-.137.882-.3 1.857-.344C9.013 4.01 10.33 4 12 4zm0 10a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zm5-1a1 1 0 110-2 1 1 0 010 2z" clip-rule="evenodd" /></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>


        {/* Section 6: Real Stories */}
        <section className="text-center py-20 bg-[#f6f2ef]">
  <h2 className="text-3xl md:text-4xl font-bold text-[#232122] mb-4">
    Real Stories Of New Beginnings
  </h2>
  <p className="text-base md:text-lg text-[#726964] max-w-3xl mx-auto mb-12">
    Explore inspiring stories from our clients who found clarity and strength with Unsaathi.
    Their journeys reflect resilience and the power of compassionate support in transforming
    challenges into new beginnings.
  </p>

  {/* Slider Container */}
  <div className="relative max-w-4xl mx-auto">
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentTestimonial * 100}%)`,
        }}
      >
        {[
          {
            text: "All my expectations were surpassed. The approach that Gaurav took in my divorce case not only saved me time but also gave me emotional closure. I now approach co-parenting with balance and confidence.",
            name: "Neha Kapoor, Delhi",
          },
          {
            text: "Unsaathi created a safe space for me to heal during one of the most turbulent times of my life. Their sensitivity and legal clarity helped me rebuild my confidence step by step.",
            name: "Ankit Mehra, Gurgaon",
          },
          {
            text: "Their compassionate and organized approach changed how I saw divorce. Instead of fear, I found freedom, clarity, and a supportive hand guiding me every step of the way.",
            name: "Priya Malhotra, Mumbai",
          },
          {
            text: "From day one, Unsaathi felt more like a friend than a legal service. The process was smooth, transparent, and full of emotional understanding — I couldn’t have asked for better support.",
            name: "Rohit Bansal, Bangalore",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="min-w-full px-6 md:px-12"
          >
            <div className="bg-white border border-[#e2d2c0] rounded-2xl p-10 shadow-md">
              <p className="text-lg italic text-[#5f554f] leading-relaxed mb-6">
                “{testimonial.text}”
              </p>
              <p className="text-[#b88b6c] font-semibold text-lg">
                — {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Slider Controls */}
    <div className="flex justify-center mt-6 gap-3">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentTestimonial === index
                ? "bg-[#b88b6c] scale-110"
                : "bg-[#e2d2c0]"
            }`}
          ></button>
        ))}
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
