import {
  newWord,
  checkSpelling,
  startTimer,
  resetGame,
  toggleDarkMode,
  toggleStudyMode,
  clearTrickyWords
} from './gameLogic.js';

import {
  speakWord,
  showHint,
  readSentence,
  loadVoices,
  setVoice
} from './voiceUtils.js';

import wordList from './wordData.js';
import { updateTrickyWords } from './ui.js';
import { getHighScore } from './storage.js';

window.addEventListener("DOMContentLoaded", () => {
  console.log("🔁 DOM fully loaded");

  updateTrickyWords();
  document.getElementById("highScore").textContent = getHighScore();

  // ✅ Safely attach listener to Clear Tricky Words button
  const clearBtn = document.getElementById("clearTrickyWordsBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearTrickyWords);
    console.log("🧹 Clear Tricky Words button found and wired up.");
  } else {
    console.warn("⚠️ clearTrickyWordsBtn not found in DOM");
  }

  // Defer voice loading until user interacts (iOS fix)
  document.body.addEventListener("click", function initVoicesOnce() {
    loadVoices();
    document.body.removeEventListener("click", initVoicesOnce);
  });

  // Button listeners
  document.getElementById("newWordBtn").addEventListener("click", newWord);
  document.getElementById("checkBtn").addEventListener("click", checkSpelling);
  document.getElementById("startTimerBtn").addEventListener("click", () => startTimer(60));
  document.getElementById("resetBtn").addEventListener("click", resetGame);
  document.getElementById("themeBtn").addEventListener("click", toggleDarkMode);
  document.getElementById("studyModeToggle").addEventListener("change", toggleStudyMode);
  document.getElementById("voiceSelect").addEventListener("change", setVoice);

  document.getElementById("hearWordBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) speakWord(word);
  });

  document.getElementById("hintBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) showHint(word);
  });

  document.getElementById("sentenceBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) readSentence(word);
  });

  document.getElementById("spellingInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkSpelling();
    }
  });
});
