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
    skills: [
      'Tye is proficient in React, Node.js, JavaScript, HTML/CSS and building responsive web applications. Check out the <a href="/skills" class="chatbot-link">Skills page</a> for more details.',
      'Tye\'s technical skills include web development with React, JavaScript, and working with APIs. View the complete skillset on the <a href="/skills" class="chatbot-link">Skills page</a>.'
    ],
    about: [
      'You can learn more about Tye on the <a href="/about" class="chatbot-link">About page</a>.',
      'To know more about Tye\'s background and interests, check out the <a href="/about" class="chatbot-link">About page</a>.'
    ],
    experience: [
      'Tye has experience in web development, focusing on creating responsive and user-friendly applications. Details are available on the <a href="/resume" class="chatbot-link">Resume page</a>.',
      'Tye has worked on various web development projects using modern technologies. See the <a href="/resume" class="chatbot-link">Resume page</a> for the full work history.'
    ],
    contact: [
      'You can contact Tye through the <a href="/contact" class="chatbot-link">Contact form</a> on this website, or check out the <a href="/online-presence" class="chatbot-link">Online Presence page</a> for all social links.',
      'Feel free to use the <a href="/contact" class="chatbot-link">Contact page</a> to get in touch with Tye!'
    ],
    projects: [
      'Check out <a href="/projects" class="chatbot-link">Tye\'s projects</a> to see the portfolio of work.',
      'Tye has worked on several projects that showcase different skills. You can view them in the <a href="/projects" class="chatbot-link">Projects page</a>.'
    ],
    resume: [
      'You can view <a href="/resume" class="chatbot-link">Tye\'s resume</a> in the Resume page.',
      'Feel free to download Tye\'s resume from the <a href="/resume" class="chatbot-link">Resume page</a>.'
    ],
    home: [
      'You can return to the <a href="/" class="chatbot-link">Home page</a> at any time.',
      'The <a href="/" class="chatbot-link">Home page</a> contains an overview of Tye\'s portfolio.'
    ],
    socials: [
      'You can find all of Tye\'s social media profiles on the <a href="/online-presence" class="chatbot-link">Online Presence page</a>.',
      'Check out the <a href="/online-presence" class="chatbot-link">Online Presence page</a> to connect with Tye on Twitter, LinkedIn, GitHub, and Stack Overflow.'
    ],
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
      
      // Focus the input field again after sending for better mobile experience
      document.querySelector('.chatbot-input')?.focus();
    }, 600);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return getRandomResponse('greeting');
    } else if (input.includes('skill') || input.includes('know') || input.includes('tech') || input.includes('stack')) {
      return getRandomResponse('skills');
    } else if (input.includes('about') || input.includes('who') || input.includes('bio')) {
      return getRandomResponse('about');
    } else if (input.includes('experience') || input.includes('work history') || input.includes('background')) {
      return getRandomResponse('experience');
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('message')) {
      return getRandomResponse('contact');
    } else if (input.includes('project') || input.includes('portfolio')) {
      return getRandomResponse('projects');
    } else if (input.includes('resume') || input.includes('cv')) {
      return getRandomResponse('resume');
    } else if (input.includes('home') || input.includes('main page') || input.includes('landing')) {
      return getRandomResponse('home');
    } else if (input.includes('social') || input.includes('twitter') || input.includes('linkedin') || input.includes('github') || input.includes('stack overflow') || input.includes('connect')) {
      return getRandomResponse('socials');
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
        <div className="chatbot-window" aria-live="polite">
          <div className="chatbot-header">
            <h3>Chat with Tye's Assistant</h3>
            <button className="close-button" onClick={toggleChat} aria-label="Close chat">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}`}
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
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