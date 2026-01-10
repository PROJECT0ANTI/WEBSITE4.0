// src/lib/ChatbotEngine.js

import { chatbotData } from "./chatbotData";

export class ChatbotEngine {
  constructor() {
    this.weights = chatbotData.weights;
    this.general_question = chatbotData.general_question;
    this.response = chatbotData.response;
    this.jobs = chatbotData.jobs;
    this.negative_response = chatbotData.negative_response;
    this.stopwords = new Set([
      "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from",
      "has", "he", "in", "is", "it", "its", "of", "on", "or", "that", "the",
      "to", "was", "will", "with", "you", "your", "this", "these", "those",
      "i", "me", "my", "we", "us", "they", "them", "their", "what", "which",
      "who", "when", "where", "why", "how", "about", "more", "tell", "can",
      "do", "does", "did", "have", "get", "got", "would", "should", "could",
      "first", "second", "third", "one", "two", "three", "offer", "offering"
    ]);
  }

  getResponse(inputQuestion) {
    if (!inputQuestion || inputQuestion.length < 3) {
      return "Please enter a valid question. 😊";
    }

    const cleaned = this.removePunctuation(inputQuestion);
    const tokens = this.tokenize(cleaned);

    const filteredTokens = tokens.filter(
      (t) => !this.stopwords.has(t.toLowerCase()) && t.length >= 2
    );

    if (filteredTokens.length === 0) {
      return "I'm in developing stage for that question. Ask me about our services, team, or company! 😊";
    }

    const sortedTokens = this.sortByWeight(filteredTokens);
    console.log("Query tokens:", sortedTokens);

    // Check for job keywords
    for (const token of sortedTokens) {
      if (["job", "opening", "career", "careers", "jobs", "vacancy", "openings"].includes(token.toLowerCase())) {
        return this.jobs[0];
      }
    }

    // Try service matches first (highest priority)
    const serviceMatch = this.matchServicesImproved(filteredTokens, cleaned);
    if (serviceMatch) {
      return serviceMatch;
    }

    // Then try general questions
    const generalMatch = this.matchGeneral(sortedTokens);
    if (generalMatch) {
      return generalMatch;
    }

    return "I'm in developing stage for that question. Ask me about our services, team, or company! 😊";
  }

  matchServicesImproved(filteredTokens, originalText) {
    const responseKeys = Object.keys(this.response);
    let bestMatch = null;
    let bestScore = 0;
    let bestMatchLength = 0;

    for (const key of responseKeys) {
      let score = 0;
      const keyTokens = this.tokenize(key);
      const keyLower = key.toLowerCase();

      // BEST: Exact substring match
      if (originalText.includes(keyLower)) {
        score = keyTokens.length * 10;
      } else {
        // GOOD: Count token matches
        for (const token of filteredTokens) {
          if (keyTokens.some(kt => kt.toLowerCase() === token.toLowerCase())) {
            score += 1;
          }
        }
      }

      const currentMatchLength = key.split(" ").length;

      if (score > bestScore || (score === bestScore && currentMatchLength > bestMatchLength)) {
        bestScore = score;
        bestMatch = key;
        bestMatchLength = currentMatchLength;
      }
    }

    if (bestMatch && bestScore > 0) {
      return this.response[bestMatch];
    }

    return null;
  }

  matchGeneral(sortedTokens) {
    let bestMatch = null;
    let bestScore = 0;

    for (const key of Object.keys(this.general_question)) {
      const score = this.scoreMatch(key, sortedTokens);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = key;
      }
    }

    if (bestMatch && bestScore > 0) {
      return String(this.general_question[bestMatch]);
    }

    return null;
  }

  scoreMatch(key, tokens) {
    const keyTokens = this.tokenize(key);
    let score = 0;

    for (const token of tokens) {
      for (const keyToken of keyTokens) {
        if (token.toLowerCase() === keyToken.toLowerCase()) {
          score += 1;
        }
      }
    }

    return score;
  }

  tokenize(text) {
    const tokens = text.match(/\w+/g) || [];
    return tokens.map(t => t.toLowerCase());
  }

  removePunctuation(text) {
    return text.replace(/[^\w\s]/g, " ");
  }

  sortByWeight(tokens) {
    return tokens.sort((a, b) => {
      const weightA = this.weights[a.toLowerCase()] || 0;
      const weightB = this.weights[b.toLowerCase()] || 0;
      return weightB - weightA;
    });
  }
}

export const chatbotEngine = new ChatbotEngine();
