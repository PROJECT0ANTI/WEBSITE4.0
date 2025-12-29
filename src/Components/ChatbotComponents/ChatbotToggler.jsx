import React from "react";

function ChatbotToggler({ onClick, showChatbot }) {
  return (
    <button className="chatbot-toggler" onClick={onClick}>
      <span
        className={`material-symbols-outlined ${
          showChatbot ? "closeIcon" : "chatIcon"
        }`}
      >
        {showChatbot ? "close" : "mode_comment"}
      </span>
    </button>
  );
}

export default ChatbotToggler;
