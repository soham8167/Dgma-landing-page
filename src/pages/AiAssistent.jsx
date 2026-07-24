import React, { useState, useRef, useEffect } from "react";
import {
  FiSend,
  FiCompass,
  FiBookOpen,
  FiFileText,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

const TRY_ASKING_PROMPTS = [
  {
    id: 1,
    text: "Find a ship recycling facility in Gujarat",
    icon: <FiMapPin className="w-3.5 h-3.5 text-amber-600" />,
  },
  {
    id: 2,
    text: "Which institutes offer ETO courses?",
    icon: <FiAward className="w-3.5 h-3.5 text-amber-600" />,
  },
  {
    id: 3,
    text: "Download the latest maritime handbook",
    icon: <FiBookOpen className="w-3.5 h-3.5 text-amber-600" />,
  },
  {
    id: 4,
    text: "Explain STCW certification requirements",
    icon: <FiFileText className="w-3.5 h-3.5 text-amber-600" />,
  },
  {
    id: 5,
    text: "Show maritime regulations for ship recycling",
    icon: <FiCompass className="w-3.5 h-3.5 text-amber-600" />,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! I'm the Maritime India AI Assistant — your guide to India's maritime ecosystem. I can help you find ship recycling facilities, training institutes, publications, regulations, and more. Try asking me one of the example questions below, or type your own.",
  },
];

const AiAssistent = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // 1. Add user question to messages
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    // 2. Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: "bot",
        text: `Here is information regarding "${query}": Based on DG Shipping circulars and official maritime data, you can find detailed guidelines and directory listings on the official Maritime India portal.`,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F3EEE3] text-[#2C2A29] font-sans flex flex-col justify-between p-4 md:p-8">
      {/* MAIN CONTAINER */}
      <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col pt-4 pb-24">
        {/* HEADER SECTION */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 shadow-xs">
            {/* Bot Icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-[#2A2421]">
                Maritime India AI Assistant
              </h1>
              <span className="px-2.5 py-0.5 bg-[#E8DFC8] text-[#5C4A28] rounded-full text-[11px] font-medium tracking-tight">
                Proposed Enhancement
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#6B655F] mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Online · Powered by Maritime India Knowledge Base</span>
            </div>
          </div>
        </div>

        {/* PROPOSED ENHANCEMENT BANNER */}
        <div className="bg-[#FAF3DC]/80 border border-[#E8D9B5] rounded-xl p-4 mb-8 flex items-start gap-3">
          <span className="text-amber-600 text-sm mt-0.5">✨</span>
          <p className="text-xs md:text-sm text-[#5C4D2E] leading-relaxed">
            <strong className="text-[#42351A]">Proposed Enhancement:</strong>{" "}
            This AI assistant is a concept demonstration. In the live platform,
            it will provide real-time answers from India's official maritime
            knowledge base, DG Shipping circulars, facility directories, and
            STCW regulations.
          </p>
        </div>

        {/* TRY ASKING SECTION / SUGGESTION CHIPS */}
        <div className="mb-8">
          <p className="text-[11px] font-serif uppercase tracking-widest text-[#8A837A] mb-3">
            TRY ASKING
          </p>
          <div className="flex flex-wrap gap-2.5">
            {TRY_ASKING_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleSend(prompt.text)}
                className="flex items-center gap-2 px-3.5 py-2 bg-white/90 hover:bg-white border border-[#E5DEC3] hover:border-[#C4B792] rounded-full text-xs font-medium text-[#3A3530] shadow-2xs hover:shadow-xs transition-all cursor-pointer text-left"
              >
                {prompt.icon}
                <span>{prompt.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CHAT MESSAGES CONVERSATION AREA */}
        <div className="space-y-4 mb-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 items-start ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Bot Avatar Icon */}
              {msg.sender === "bot" && (
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`p-4 rounded-2xl max-w-[85%] text-xs md:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#2C2A29] text-white rounded-tr-none shadow-xs"
                    : "bg-white text-[#2C2A29] border border-[#E6E0D2] rounded-tl-none shadow-xs"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="bg-white px-4 py-3 border border-[#E6E0D2] rounded-2xl rounded-tl-none shadow-xs text-xs text-[#8A837A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#8A837A] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#8A837A] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#8A837A] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* BOTTOM INPUT FIXED BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything about India's maritime ecosystem..."
              className="w-full bg-[#F8F6F0] text-sm text-[#2C2A29] placeholder-[#948D85] px-5 py-3.5 rounded-full border border-[#E0D9C8] focus:border-[#2C2A29] focus:outline-none shadow-inner"
            />
          </div>

          <button
            onClick={() => handleSend()}
            disabled={!inputQuery.trim()}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs ${
              inputQuery.trim()
                ? "bg-[#2C2A29] text-white hover:bg-black"
                : "bg-[#7E7A75] text-[#D1CCC5] cursor-not-allowed"
            }`}
          >
            <FiSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAssistent;