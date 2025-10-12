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
      text: "How can we help you?",
      type: "select",
      key: "service",
      options: ["Contested Divorce", "Muttual Divorce", "Child Custody", "Dowry Case/Domestic Violence Case","False Dowry and Domestic Violence Case","Issue not mentioned"]
    },
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
    const whatsappUrl = `https://wa.me/9266877791?text=${encodedMessage}`;
    
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
            💬 Talk to us
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