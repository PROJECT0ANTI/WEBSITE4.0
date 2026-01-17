// src/Components/ChatbotComponents/Chatbot.jsx

import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./Chat.css";
import Features from "./Features";
import { callChatApi } from "../../api/mockApi";

function Chatbot({ showChatbot, onClose }) {
  // Conversation history
  const [conversationHistory, setConversationHistory] = useState([
    { text: "Welcome to Anti-AI. How can I help you?", type: "incoming", id: Date.now() },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [textareaVisible, setTextareaVisible] = useState(false);

  const chatboxRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [conversationHistory]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleFeatureClick = (feature) => {
    if (feature === "Other") {
      setTextareaVisible(true);
    } else {
      setTextareaVisible(false);
      sendMessage(feature);
    }
  };

  const sendMessage = async (messageText) => {
    if (!messageText || !messageText.trim()) return;

    // Add user message
    const userMessageId = Date.now();
    const userMessage = {
      text: messageText,
      type: "outgoing",
      id: userMessageId,
    };

    setConversationHistory((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Call the chatbot API
      const data = await callChatApi(messageText);

      // Add bot response
      const botMessage = {
        text: data.response || "Sorry, I couldn't understand that.",
        type: "incoming",
        id: Date.now() + 1,
      };

      setConversationHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Add error message
      const errorMessage = {
        text: "Sorry, something went wrong. Please try again.",
        type: "incoming",
        id: Date.now() + 1,
      };

      setConversationHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (isLoading) return;
    sendMessage(inputMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chatbot ${showChatbot ? "show" : ""}`}>
      {/* Header */}
      <header className="header-chat">
        <img
          src="/static/robot-assistant.png"
          alt="Profile"
          className="profile-image"
        />
        <div className="chat-logo">
          <img
            src="../static/anti-ai-updated-logo.png"
            alt="Anti AI Logo"
            className="anti-ai-logo"
          />
          <p>Your Virtual Assistant</p>
        </div>
        <span className="close-btn material-symbols-outlined" onClick={onClose}>
          close
        </span>
      </header>

      {/* Features Section */}
      <Features onFeatureClick={handleFeatureClick} />

      {/* Chat Messages */}
      <ul className="chatbox" ref={chatboxRef}>
        {conversationHistory.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <li className="chat incoming">
            <div className="chat-content">
              <p className="thinking">Thinking...</p>
            </div>
          </li>
        )}
      </ul>

      {/* Chat Input */}
      {textareaVisible && (
        <div className="chat-input">
          <textarea
            ref={textareaRef}
            placeholder="Enter a message..."
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            id="send-btn"
            className="material-symbols-outlined"
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
          >
            send
          </button>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
