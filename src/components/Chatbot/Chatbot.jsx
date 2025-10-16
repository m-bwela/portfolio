import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Tye's assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const chatResponses = {
    greeting: ["Hello! How can I assist you today?", "Hi there! What would you like to know about Tye?"],
    skills: ["Tye is proficient in React, Node.js, JavaScript, HTML/CSS and building responsive web applications.", "Tye's technical skills include web development with React, JavaScript, and working with APIs."],
    experience: ["Tye has experience in web development, focusing on creating responsive and user-friendly applications.", "Tye has worked on various web development projects using modern technologies."],
    contact: ["You can contact Tye through the contact form on this website, or via LinkedIn and Twitter links in the footer.", "Feel free to use the contact form to get in touch with Tye!"],
    projects: ["Check out the Projects section to see Tye's portfolio of work.", "Tye has worked on several projects that showcase different skills. You can view them in the Projects section."],
    resume: ["You can view Tye's resume in the Resume section.", "Feel free to download Tye's resume from the Resume section."],
    default: ["I'm not sure how to help with that. Could you try asking something else?", "Interesting question! You might want to contact Tye directly about that."]
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // Process the message and respond
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(currentMessages => [...currentMessages, { text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return getRandomResponse('greeting');
    } else if (input.includes('skill') || input.includes('know') || input.includes('tech') || input.includes('stack')) {
      return getRandomResponse('skills');
    } else if (input.includes('experience') || input.includes('work') || input.includes('background')) {
      return getRandomResponse('experience');
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return getRandomResponse('contact');
    } else if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return getRandomResponse('projects');
    } else if (input.includes('resume') || input.includes('cv')) {
      return getRandomResponse('resume');
    } else {
      return getRandomResponse('default');
    }
  };

  const getRandomResponse = (type) => {
    const responses = chatResponses[type];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Tye's Assistant</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      )}
      
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        <span className="chatbot-icon">
          {isOpen ? '×' : '💬'}
        </span>
      </button>
    </div>
  );
}