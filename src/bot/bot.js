import React, { useState } from 'react';
import './bot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Hi! What's your name?",
      type: "text",
      key: "name"
    },
    {
      id: 2,
      text: "What's your email address?",
      type: "email",
      key: "email"
    },
    {
      id: 3,
      text: "What service are you interested in?",
      type: "select",
      key: "service",
      options: ["Web Development", "Mobile App", "Consulting", "Other"]
    },
    {
      id: 4,
      text: "What's your budget range?",
      type: "select",
      key: "budget",
      options: ["Under $1000", "$1000-$5000", "$5000-$10000", "Above $10000"]
    },
    {
      id: 5,
      text: "When do you need this project completed?",
      type: "select",
      key: "timeline",
      options: ["ASAP", "Within 1 month", "Within 3 months", "No rush"]
    }
  ];

  const handleAnswer = (answer) => {
    const currentQ = questions[currentQuestion];
    setAnswers(prev => ({
      ...prev,
      [currentQ.key]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I'm interested in your services. Here are my details:
Name: ${answers.name || 'Not provided'}
Email: ${answers.email || 'Not provided'}
Service: ${answers.service || 'Not provided'}
Budget: ${answers.budget || 'Not provided'}
Timeline: ${answers.timeline || 'Not provided'}

Please get back to me soon!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    
    if (showWhatsApp) {
      return (
        <div className="whatsapp-section">
          <div className="whatsapp-icon">📱</div>
          <h3>Thank you for your answers!</h3>
          <p>Let's continue our conversation on WhatsApp for more details.</p>
          <button className="whatsapp-button" onClick={handleWhatsAppRedirect}>
            💬 Continue on WhatsApp
          </button>
          <button className="reset-button" onClick={resetChat}>
            🔄 Start Over
          </button>
        </div>
      );
    }

    return (
      <div className="question-section">
        <div className="question-text">{question.text}</div>
        <div className="question-number">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        
        {question.type === 'text' || question.type === 'email' ? (
          <input
            type={question.type}
            placeholder={`Enter your ${question.key}`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                handleAnswer(e.target.value.trim());
                e.target.value = '';
              }
            }}
            className="text-input"
          />
        ) : question.type === 'select' ? (
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}
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