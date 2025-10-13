import React, { useState, useEffect, useRef } from 'react';
import man from '../../bannerImages/man animation.json';
import woman from '../../bannerImages/women.json';
import Lottie from 'lottie-react';
import time from '../../bannerImages/time.json'
import effort from '../../bannerImages/effort.json'
import peace_of_mind from '../../bannerImages/peace-of-mind.json'

// === IMPORTANT ===
// Enter your WhatsApp number here
const whatsappNumber = "919266877791";

// --- Divorce Insight Quiz Component ---
const DivorceInsightQuiz = ({ onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConclusion, setShowConclusion] = useState(false);
  const quizRef = useRef(null); // Create a ref for the quiz container

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

  // Effect to handle clicks outside the quiz
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (quizRef.current && !quizRef.current.contains(event.target)) {
        onRestart(); // Call the function passed from parent to close the quiz
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onRestart]);


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
    if (score <= 3) return { title: "Building on a Strong Foundation", text: "Your answers suggest that while there may be challenges, your relationship has a strong foundation. Exploring couples counseling could help strengthen your bond." };
    if (score <= 7) return { title: "Navigating Uncertainty", text: "You seem to be at a crossroads. Mediation or a legal consultation could help you understand options like Judicial Separation without pressure." };
    if (score <= 12) return { title: "Considering a New Path", text: "Your responses indicate significant challenges. It may be time to understand your legal rights. An expert consultation can provide a clear roadmap." };
    return { title: "Prioritizing Safety and Security", text: "Your answers raise serious safety concerns. It is crucial to seek immediate legal guidance. Your safety is the highest priority." };
  };

  const conclusion = getConclusion();

  return (
    <div ref={quizRef} className="w-full max-w-2xl mx-auto bg-[#f5f1ed] p-8 rounded-2xl shadow-xl font-serif text-[#3d3d3d] mt-8">
      {showConclusion ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#c48e53] mb-4">{conclusion.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{conclusion.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full transition hover:bg-[#a97d4a]"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              Talk to Our Experts
            </button>
            <button
              className="bg-transparent border-2 border-[#c48e53] text-[#c48e53] font-bold px-8 py-3 rounded-full transition hover:bg-[#f9f6f2]"
              onClick={onRestart}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-[#c48e53] uppercase tracking-widest">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </p>
            <h2 className="text-2xl font-bold mt-2">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
          </div>
          <div className="flex flex-col gap-4 mt-3">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-4 bg-[#f9f6f2] border border-gray-200 rounded-lg font-semibold hover:bg-[#c48e53] hover:text-white hover:border-[#c48e53] transition-all duration-200"
                onClick={() => handleAnswerClick(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// --- Features Table Component ---
const FeaturesTable = () => {
  const features = [
    { feature: "Holistic Approach", benefit: "We focus on healing and growth, not just the legal outcome." },
    { feature: "Tailored Expertise", benefit: "Access to the best divorce lawyers and specialized consultants." },
    { feature: "Convenience & Clarity", benefit: "Online services and clear, step-by-step guidance reduce stress." },
    { feature: "Dedicated Care", benefit: "Your emotional and legal needs are our top priority." },
  ];

  return (
    <div className="overflow-x-auto mt-24">
      <table className="w-full min-w-[600px] max-w-4xl mx-auto border-collapse rounded-2xl shadow-lg overflow-hidden">
        <thead className="bg-[#f5e7db]">
          <tr>
            <th className="py-4 px-6 text-left text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Feature</th>
            <th className="py-4 px-6 text-left text-xl font-bold text-[#b88b6c] border-b border-[#e0d6cc]">Your Benefit</th>
          </tr>
        </thead>
        <tbody>
          {features.map((item, idx) => (
            <tr key={idx} className="bg-white hover:bg-[#faf5eb] transition-colors duration-200">
              <td className="py-5 px-6 font-semibold text-[#3d3d3d] border-b border-[#e0d6cc]">{item.feature}</td>
              <td className="py-5 px-6 text-[#726964] border-b border-[#e0d6cc]">{item.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


// --- Main Page Component ---
const WhyUnsaathiPage = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleRestartQuiz = () => {
    setIsQuizStarted(false); // This will bring back the "Start Quiz" button
  };

  return (
    <div className="min-h-screen bg-[#F5EFE9] font-serif py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Full-Page Banner Section with Integrated Quiz */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 w-full">
            {/* Left Animation */}
            <div className={`w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex-shrink-0 transition-opacity duration-500 ${isQuizStarted ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
              <Lottie animationData={man} loop={true} className="w-full h-auto" />
            </div>

            {/* Center Content: Quiz or Intro Text */}
            <div className="w-full max-w-4xl">
              {!isQuizStarted ? (
                <>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#232122] mb-6 leading-tight tracking-tight">
                    Worried if divorce is the right decision?
                  </h1>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#726964] leading-relaxed mb-4">
                    Take a quick quiz
                  </h2>
                  <p className="text-sm text-[#726964] max-w-xl mx-auto mb-8">
                    In a country like India, where the marital bond is revered as a covenant spanning seven lifetimes, divorce isn't just a legal procedure—it's a wrenching personal and cultural reckoning. This confidential 5-question quiz is designed to help you reflect on your relationship and understand which path might be right for you.
                  </p>
                  <button
                    className="bg-[#c48e53] text-white font-bold px-8 py-3 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
                    onClick={() => setIsQuizStarted(true)}
                  >
                    Start Your Insight Quiz
                  </button>
                </>
              ) : (
                <DivorceInsightQuiz onRestart={handleRestartQuiz} />
              )}
            </div>

            {/* Right Animation */}
            <div className={`w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex-shrink-0 transition-opacity duration-500 ${isQuizStarted ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
              <Lottie animationData={woman} loop={true} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* These sections will now appear below the full-screen banner */}
        <section className='my-10'>
          <h1 className="text-4xl sm:text-xxl lg:text-xxl font-extrabold text-[#232122] justify-center mb-6 leading-tight tracking-tight ml-[200px]">
            Why Unsaathi is Your Ideal Divorce Partner
          </h1>

          <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-[#726964] leading-relaxed ">
            Choosing the right partner is crucial. Unsaathi stands out by offering a compassionate, expert-driven approach that blends emotional well-being with legal expertise.
          </h3>
          <FeaturesTable className="mt-6" />
        </section>

        <section className="text-center mt-24 mb-12">
          <p className="text-lg text-[#726964] mb-6">
            Unsaathi makes your personal and legal journey smoother, ensuring you find harmony and peace of mind.
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-[#b88b6c] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-[#a5775c] transition-transform transform hover:scale-105"
          >
            Ready to start your journey with a trusted guide?
          </button>
        </section>


        <section className="bg-[#f9f3ee] py-20 px-6 font-serif">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#b88b6c] mb-2">
              Unsaathi For You
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#232122] mb-6">
              What You Will Save With Our Divorce Services
            </h1>
            <p className="text-lg text-[#726964] max-w-3xl mx-auto leading-relaxed mb-16">
              Our divorce services are designed to serve your best interests, ensuring a seamless journey of personal transformations.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1: Time */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  {/* === IMAGE PLACEHOLDER === */}
                  {/* Replace this div with your <img /> or <Lottie /> component */}
                  <div className="w-40 h-32 rounded-md flex items-center justify-center">
                    <Lottie animationData={time} loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Time</h2>
                <p className="text-base text-[#726964]">
                  With Unsaathi's divorce services, we handle all the legal complexities for you, giving you enough time to heal and rebuild your life.
                </p>
              </div>

              {/* Card 2: Money */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  {/* === IMAGE PLACEHOLDER === */}
                  {/* Replace this div with your <img /> or <Lottie /> component */}
                  <div className="w-40 h-32 rounded-md flex items-center justify-center">
                    <Lottie animationData={effort } loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Money</h2>
                <p className="text-base text-[#726964]">
                  Unsaathi's affordable divorce solutions and expert separation guidance ensure that you receive the best legal support without any hidden costs or uncertain financial burdens.
                </p>
              </div>

              {/* Card 3: Peace of Mind */}
              <div className="bg-[#f5efe9] p-8 rounded-2xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  {/* === IMAGE PLACEHOLDER === */}
                  {/* Replace this div with your <img /> or <Lottie /> component */}
                  <div className="w-40 h-32 rounded-md flex items-center justify-center">
                    <Lottie animationData={peace_of_mind} loop={true} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#232122] mb-3">Peace of Mind</h2>
                <p className="text-base text-[#726964]">
                  Unsaathi takes the stress out of your divorce journey by managing everything from filing a petition to getting support after the divorce, allowing you to prioritise your emotional well-being.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUnsaathiPage;
