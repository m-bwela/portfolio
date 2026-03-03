import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css';

const quickReplies = [
  { label: '💼 Projects', value: 'projects' },
  { label: '🛠️ Skills', value: 'skills' },
  { label: 'ℹ️ About Tye', value: 'about' },
  { label: '📄 Resume', value: 'resume' },
  { label: '📞 Contact', value: 'contact' },
  { label: '🌐 Socials', value: 'socials' },
  { label: '🎓 Education', value: 'education' },
  { label: '💡 Fun Fact', value: 'fun' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const getTimeGreeting = () => {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  };

  const [messages, setMessages] = useState([
    { text: `${getTimeGreeting()}! 👋 Welcome to Tye's portfolio. I'm here to help you explore his work, skills, and experience. What would you like to know?`, sender: 'bot', suggestions: ['💼 Projects', '🛠️ Skills', 'ℹ️ About Tye'] }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const chatResponses = {
    greeting: {
      responses: [
        "Hey there! 👋 Great to hear from you. What would you like to know about Tye?",
        "Welcome! 😊 I'd love to help you learn more about Tye's work. What are you curious about?",
        "Hello! Thanks for stopping by. Feel free to ask me anything about Tye's skills, projects, or experience!"
      ],
      suggestions: ['💼 Projects', '🛠️ Skills', '📄 Resume']
    },
    skills: {
      responses: [
        'Tye is proficient in React, Node.js, JavaScript, HTML/CSS and building responsive web applications. Check out the <a href="/skills" class="chatbot-link">Skills page</a> for more details.',
        'Tye\'s technical skills include web development with React, JavaScript, and working with APIs. View the complete skillset on the <a href="/skills" class="chatbot-link">Skills page</a>.'
      ],
      suggestions: ['💼 Projects', '📄 Resume', '📞 Contact']
    },
    about: {
      responses: [
        'Tye is a result-driven web developer and computer science student with a passion for building responsive, user-friendly applications. Learn more on the <a href="/about" class="chatbot-link">About page</a>.',
        'To know more about Tye\'s background, interests, and what drives him, check out the <a href="/about" class="chatbot-link">About page</a>.'
      ],
      suggestions: ['🛠️ Skills', '🎓 Education', '💡 Fun Fact']
    },
    experience: {
      responses: [
        'Tye has experience in web development, focusing on creating responsive and user-friendly applications. Details are available on the <a href="/resume" class="chatbot-link">Resume page</a>.',
        'Tye has worked on various web development projects using modern technologies. See the <a href="/resume" class="chatbot-link">Resume page</a> for the full work history.'
      ],
      suggestions: ['💼 Projects', '🛠️ Skills', '📞 Contact']
    },
    contact: {
      responses: [
        'You can contact Tye through the <a href="/contact" class="chatbot-link">Contact form</a> on this website, or check out the <a href="/online-presence" class="chatbot-link">Online Presence page</a> for all social links.',
        'Feel free to use the <a href="/contact" class="chatbot-link">Contact page</a> to get in touch with Tye! He typically responds within 24 hours. 📩'
      ],
      suggestions: ['🌐 Socials', '💼 Projects']
    },
    projects: {
      responses: [
        'Check out <a href="/projects" class="chatbot-link">Tye\'s projects</a> to see the portfolio of work. Each project showcases different technologies and problem-solving approaches! 🚀',
        'Tye has worked on several projects that showcase different skills. You can view them in the <a href="/projects" class="chatbot-link">Projects page</a>.'
      ],
      suggestions: ['🛠️ Skills', '📞 Contact', '📄 Resume']
    },
    resume: {
      responses: [
        'You can view and download <a href="/resume" class="chatbot-link">Tye\'s resume</a> from the Resume page. It includes education, experience, and skills. 📄',
        'Feel free to download Tye\'s resume from the <a href="/resume" class="chatbot-link">Resume page</a>.'
      ],
      suggestions: ['💼 Projects', '🛠️ Skills', '📞 Contact']
    },
    home: {
      responses: [
        'You can return to the <a href="/" class="chatbot-link">Home page</a> at any time.',
        'The <a href="/" class="chatbot-link">Home page</a> contains an overview of Tye\'s portfolio.'
      ],
      suggestions: ['ℹ️ About Tye', '💼 Projects']
    },
    socials: {
      responses: [
        'You can find all of Tye\'s social media profiles on the <a href="/online-presence" class="chatbot-link">Online Presence page</a>. Connect on Twitter, LinkedIn, GitHub, Stack Overflow, and WhatsApp! 🌐',
        'Check out the <a href="/online-presence" class="chatbot-link">Online Presence page</a> to connect with Tye across all platforms.'
      ],
      suggestions: ['📞 Contact', 'ℹ️ About Tye']
    },
    education: {
      responses: [
        'Tye is a knowledgeable computer science student with a strong foundation in software engineering principles. Check the <a href="/resume" class="chatbot-link">Resume page</a> for full education details. 🎓',
        'Tye\'s academic background in computer science complements his practical web development experience. More details on the <a href="/resume" class="chatbot-link">Resume page</a>.'
      ],
      suggestions: ['🛠️ Skills', '💼 Projects', '💡 Fun Fact']
    },
    availability: {
      responses: [
        'Tye is currently open to new opportunities and freelance projects! Feel free to reach out through the <a href="/contact" class="chatbot-link">Contact page</a>. 🤝',
        'Looking to hire or collaborate? Tye is available! Get in touch via the <a href="/contact" class="chatbot-link">Contact page</a> or <a href="/online-presence" class="chatbot-link">social media</a>.'
      ],
      suggestions: ['📞 Contact', '📄 Resume', '🌐 Socials']
    },
    fun: {
      responses: [
        '💡 Fun fact: Tye is passionate about solving complex problems and turning ideas into clean, functional code. He believes every bug is just a feature waiting to be understood! 🐛',
        '💡 Did you know? Tye loves exploring new technologies and frameworks. When he\'s not coding, he\'s probably learning something new in the tech world! 🌟',
        '💡 Here\'s one: Tye built this entire portfolio from scratch using React — including me, this chatbot you\'re talking to right now! 🤖',
        '💡 Fun fact: Tye is a big fan of anime and his favorite series is One Piece 🎌',
        '💡 Tye is a Manchester United fan ⚽'
      ],
      suggestions: ['ℹ️ About Tye', '💼 Projects', '🛠️ Skills']
    },
    thanks: {
      responses: [
        'You\'re welcome! 😊 Glad I could help. Anything else you\'d like to know?',
        'No problem at all! Feel free to ask if you have more questions. I\'m always here! 💙',
        'Happy to help! Don\'t hesitate to come back anytime. 🙌'
      ],
      suggestions: ['💼 Projects', '📞 Contact', '💡 Fun Fact']
    },
    default: {
      responses: [
        "I'm not sure how to help with that, but you can try asking about Tye's skills, projects, experience, or how to contact him! 🤔",
        "Interesting question! I might not have the answer, but Tye would love to hear from you via the <a href=\"/contact\" class=\"chatbot-link\">Contact page</a>."
      ],
      suggestions: ['💼 Projects', '🛠️ Skills', '📞 Contact']
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = (text) => {
    if (text.trim() === '') return;

    const newMessages = [...messages, { text, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const { response, suggestions } = getBotResponse(text);
      setMessages(currentMessages => [...currentMessages, { text: response, sender: 'bot', suggestions }]);

      document.querySelector('.chatbot-input')?.focus();
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickReply = (reply) => {
    sendMessage(reply);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let type = 'default';

    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('howdy') || input.includes('sup')) {
      type = 'greeting';
    } else if (input.includes('thank') || input.includes('cheers') || input.includes('appreciate')) {
      type = 'thanks';
    } else if (input.includes('skill') || input.includes('know') || input.includes('tech') || input.includes('stack') || input.includes('language')) {
      type = 'skills';
    } else if (input.includes('about') || input.includes('who') || input.includes('bio')) {
      type = 'about';
    } else if (input.includes('experience') || input.includes('work history') || input.includes('background')) {
      type = 'experience';
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('message') || input.includes('phone')) {
      type = 'contact';
    } else if (input.includes('project') || input.includes('portfolio') || input.includes('built') || input.includes('work')) {
      type = 'projects';
    } else if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      type = 'resume';
    } else if (input.includes('home') || input.includes('main page') || input.includes('landing')) {
      type = 'home';
    } else if (input.includes('social') || input.includes('twitter') || input.includes('linkedin') || input.includes('github') || input.includes('stack overflow') || input.includes('connect') || input.includes('whatsapp')) {
      type = 'socials';
    } else if (input.includes('education') || input.includes('school') || input.includes('university') || input.includes('study') || input.includes('degree')) {
      type = 'education';
    } else if (input.includes('hire') || input.includes('available') || input.includes('freelance') || input.includes('open') || input.includes('opportunity')) {
      type = 'availability';
    } else if (input.includes('fun') || input.includes('fact') || input.includes('interesting') || input.includes('surprise') || input.includes('random')) {
      type = 'fun';
    }

    const category = chatResponses[type];
    const randomIndex = Math.floor(Math.random() * category.responses.length);
    return { response: category.responses[randomIndex], suggestions: category.suggestions };
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window" aria-live="polite">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-status-dot"></span>
              <h3>Tye's Assistant</h3>
            </div>
            <button className="close-button" onClick={toggleChat} aria-label="Close chat">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                <div className={`message ${message.sender}`}>
                  {message.sender === 'bot' ? (
                    <span dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    message.text
                  )}
                </div>
                {message.sender === 'bot' && message.suggestions && (
                  <div className="quick-replies">
                    {message.suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        className="quick-reply-btn"
                        onClick={() => handleQuickReply(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            {isTyping && (
              <div className="message bot typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="quick-replies-bar">
            {quickReplies.map((qr, i) => (
              <button key={i} className="quick-reply-chip" onClick={() => handleQuickReply(qr.label)}>
                {qr.label}
              </button>
            ))}
          </div>
          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="chatbot-input"
            />
            <button type="submit" className="send-button" disabled={!inputValue.trim()}>
              <span>➤</span>
            </button>
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