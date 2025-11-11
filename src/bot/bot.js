import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import './bot.css'; // Make sure this CSS file is in the same directory

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // This array is stable and doesn't need to be in the component
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

  // Memoize the sendEmail function with useCallback
  const sendEmail = useCallback(() => {
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
  }, [answers, questions.length]); // Dependencies for useCallback

  // Add `sendEmail` to the useEffect dependency array
  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      sendEmail();
    }
  }, [answers, questions.length, sendEmail]);

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

  const goBack = () => {
    if (showWhatsApp) {
      setShowWhatsApp(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }
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
              defaultValue={answers[question.key] || ''}
            />
          </form>
        ) : question.type === 'select' ? (
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${answers[question.key] === option ? 'active' : ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

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
