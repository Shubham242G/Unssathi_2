import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './bot.css'; // Make sure this CSS file is in the same directory

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const questions = [
    { id: 1, text: "Hi! What's your name?", type: "text", key: "name" },
    { id: 2, text: "What's your email address?", type: "email", key: "email" },
    { 
      id: 3, 
      text: "How can we help you?", 
      type: "select", 
      key: "service", 
      options: ["Contested Divorce", "Mutual Divorce", "Child Custody", "Dowry Case/Domestic Violence Case", "False Dowry and Domestic Violence Case", "Issue not mentioned"] 
    },
  ];

  // This effect triggers the email sending process once all answers are in.
  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      sendEmail();
    }
  }, [answers, questions.length]);

  const handleAnswer = (answer) => {
    const currentQ = questions[currentQuestion];
    const newAnswers = { ...answers, [currentQ.key]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const sendEmail = () => {
    if (Object.keys(answers).length !== questions.length) return;

    const templateParams = {
      name: answers.name || "Not provided",
      email: answers.email || "Not provided",
      service: answers.service || "Not provided"
    };

    emailjs.send(
      'service_kranxad', 
      'template_2gdcgwl', 
      templateParams, 
      'am1VZPuktoi7yeO5J'
    )
      .then((response) => {
        console.log('SUCCESS! Email sent.', response.status, response.text);
      }, (error) => {
        console.log('FAILED... Email not sent.', error);
      });
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I'm interested in your services. Here are my details:\nName: ${answers.name || 'Not provided'}\nEmail: ${answers.email || 'Not provided'}\nService: ${answers.service || 'Not provided'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919266877791?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  // --- NEW: Function to go back ---
  const goBack = () => {
    // If on the final screen, go back to the last question
    if (showWhatsApp) {
      setShowWhatsApp(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }
    // Otherwise, go to the previous question index
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    
    if (showWhatsApp) {
      return (
        <div className="whatsapp-section">
          <div className="whatsapp-icon">📱</div>
          <h3>Thank you!</h3>
          <p>We've received your details. Let's talk on WhatsApp.</p>
          
          <div className="final-buttons-container">
            <button className="whatsapp-button" onClick={handleWhatsAppRedirect}>
              💬 Talk to us on WhatsApp
            </button>
            <button className="back-button" onClick={goBack}>
              ← Go Back
            </button>
            <button className="reset-button" onClick={resetChat}>
              🔄 Start Over
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="question-section">
        <div className="question-header">
          <div className="question-text">{question.text}</div>
          <div className="question-number">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        {question.type === 'text' || question.type === 'email' ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.elements[0];
            if (input.value.trim()) {
              handleAnswer(input.value.trim());
            }
          }}>
            <input
              type={question.type}
              placeholder={`Enter your ${question.key}`}
              className="text-input"
              autoFocus
              // --- NEW: Prefill the input with the existing answer ---
              defaultValue={answers[question.key] || ''}
            />
          </form>
        ) : question.type === 'select' ? (
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                // --- NEW: Add 'active' class if this option was selected ---
                className={`option-button ${answers[question.key] === option ? 'active' : ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        {/* --- NEW: Renders the "Previous" button if not on the first question --- */}
        {currentQuestion > 0 && (
          <button className="back-button" onClick={goBack}>
            ← Previous
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>🤖 Chat Assistant</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chatbot-content">
            {renderQuestion()}
          </div>
        </div>
      )}
      
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </div>
  );
};

export default ChatBot;
