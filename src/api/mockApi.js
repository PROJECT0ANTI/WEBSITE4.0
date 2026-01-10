// src/api/mockApi.js

import { chatbotEngine } from "../lib/ChatbotEngine.js";

/**
 * Mock API handler for development (client-side)
 * Simulates network delay for realism
 */
export const callChatApi = async (message) => {
  return new Promise((resolve, reject) => {
    try {
      // Simulate slight network delay (optional)
      setTimeout(() => {
        const response = chatbotEngine.getResponse(message);
        
        resolve({
          response: response,
          timestamp: new Date().toISOString(),
        });
      }, 50); // 50ms delay for realism
    } catch (error) {
      console.error("Chat API Error:", error);
      reject({
        error: "Failed to get response from chatbot",
        details: error.message,
      });
    }
  });
};

export default callChatApi;
