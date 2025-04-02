import {
  newWord,
  checkSpelling,
  startTimer,
  resetGame,
  toggleDarkMode,
  toggleStudyMode
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
  loadVoices();
  updateTrickyWords();
  document.getElementById("highScore").textContent = getHighScore();

  // Event listeners for controls
  document.getElementById("newWordBtn").addEventListener("click", newWord);
  document.getElementById("checkBtn").addEventListener("click", checkSpelling);
  document.getElementById("startTimerBtn").addEventListener("click", startTimer);
  document.getElementById("resetBtn").addEventListener("click", resetGame);
  document.getElementById("themeBtn").addEventListener("click", toggleDarkMode);
  document.getElementById("studyModeToggle").addEventListener("change", toggleStudyMode);
  document.getElementById("voiceSelect").addEventListener("change", setVoice);

  document.getElementById("hearWordBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) {
      speakWord(word);
    }
  });

  document.getElementById("hintBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) {
      const definition = wordList[word]?.definition;
      if (definition) showHint(word, definition);
    }
  });

  document.getElementById("sentenceBtn").addEventListener("click", () => {
    const word = window.currentWord;
    if (word) {
      const sentence = wordList[word]?.sentence;
      if (sentence) readSentence(word, sentence);
    }
  });

  // Pressing "Enter" submits spelling
  document.getElementById("spellingInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkSpelling();
    }
  });
});
