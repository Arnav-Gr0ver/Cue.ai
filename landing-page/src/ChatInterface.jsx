import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      content: 'Hello! I\'m your AI financial assistant. How can I help you analyze your documents today?' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [messages]);

  // Simulate bot response
  const getBotResponse = (userMessage) => {
    const responses = [
      "I've analyzed your document and found several key financial metrics that stand out. The primary indicators suggest...",
      "Based on the financial data provided, here are the main insights I've discovered in your documents...",
      "Let me break down these numbers for you. Looking at the key financial ratios...",
      "I've identified some interesting patterns in your financial documents. The trend analysis shows...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage = { role: 'bot', content: getBotResponse(inputMessage) };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen pt-16 bg-slate-50">
      {/* Chat container */}
      <div className="flex-1 flex flex-col max-w-6xl w-full mx-auto">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 shadow-sm'
                  }`}
                >
                  <div className={`text-sm font-medium mb-1 ${
                    message.role === 'user' ? 'text-blue-50' : 'text-slate-500'
                  }`}>
                    {message.role === 'user' ? 'You' : 'AI Assistant'}
                  </div>
                  <div className={message.role === 'user' ? 'text-white' : 'text-slate-700'}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-4 bg-white border border-slate-200 shadow-sm">
                  <div className="text-sm font-medium mb-1 text-slate-500">
                    AI Assistant
                  </div>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                    <span className="text-slate-400">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-slate-200 bg-white p-4">
          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
            <div className="flex space-x-4">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about your financial documents..."
                className="flex-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${
                  !inputMessage.trim() || isTyping
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                }`}
              >
                {isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;