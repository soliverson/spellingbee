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

import { updateTrickyWords } from './ui.js';
import { getHighScore } from './storage.js';

window.addEventListener("DOMContentLoaded", () => {
  console.log("🔁 DOM fully loaded");

  // ✅ Always update tricky words with speakWord callback
  updateTrickyWords(speakWord);

  // ✅ Set high score
  document.getElementById("highScore").textContent = getHighScore();

  // ✅ Wire up Clear Tricky Words Button AFTER DOM is ready
  const clearBtn = document.getElementById("clearTrickyWordsBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearTrickyWords);
    console.log("🧹 Clear Tricky Words button wired up.");
  } else {
    console.warn("⚠️ clearTrickyWordsBtn not found in DOM");
  }

  // ✅ Load voices on user interaction (iOS fix)
  document.body.addEventListener("click", function initVoicesOnce() {
    loadVoices();
    document.body.removeEventListener("click", initVoicesOnce);
  });

  // ✅ Hook up game buttons
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
