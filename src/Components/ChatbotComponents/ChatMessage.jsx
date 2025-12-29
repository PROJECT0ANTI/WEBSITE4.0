import React from "react";

function ChatMessage({ message }) {
  
  return (
    <li className={`chat ${message.type}`}>
      {message.type === "incoming" && (
        <span className="material-symbols-outlined">smart_toy</span>
      )}
      <p className="chatbot-msg" >{message.text}</p>
    </li>
  );
}

export default ChatMessage;
