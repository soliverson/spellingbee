import wordList from './wordData.js';
import { updateWordHistory, updateTrickyWords } from './ui.js';
import {
  getHighScore,
  setHighScore,
  getTrickyWords,
  saveTrickyWords
} from './storage.js';
import { speakWord } from './voiceUtils.js';

let score1 = 0;
let score2 = 0;
let currentPlayer = 1;
let highScore = getHighScore();
let timeLeft = 0;
let timerInterval = null;
let wordHistory = [];
let trickyWords = getTrickyWords();
export let currentWord = "";
window.currentWord = "";

function updateScoreDisplay() {
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;
  document.getElementById("highScore").textContent = highScore;
}

function switchPlayerIfNeeded() {
  const mode = document.querySelector('input[name="playerMode"]:checked')?.value;
  if (mode === "2") {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    const turnMsg = new SpeechSynthesisUtterance(`Player ${currentPlayer}, it's your turn.`);
    speechSynthesis.speak(turnMsg);
  }
}

export function newWord() {
  const keys = Object.keys(wordList);
  currentWord = keys[Math.floor(Math.random() * keys.length)];
  window.currentWord = currentWord;

  document.getElementById("spellingInput").value = "";
  document.getElementById("result").textContent = "";

  speakWord(currentWord);
}

export function checkSpelling() {
  const userInput = document.getElementById("spellingInput").value.trim().toLowerCase();
  const correct = currentWord.toLowerCase();
  const alternates = wordList[currentWord].alternates || [];
  const isCorrect = userInput === correct || alternates.includes(userInput);

  if (isCorrect) {
    if (currentPlayer === 1) {
      score1++;
    } else {
      score2++;
    }

    const currentScore = Math.max(score1, score2);
    if (currentScore > highScore) {
      highScore = currentScore;
      setHighScore(highScore);
    }

    updateScoreDisplay();

    wordHistory.push(currentWord);
    updateWordHistory(wordHistory);

    const successMsg = new SpeechSynthesisUtterance("Great job!");
    speechSynthesis.speak(successMsg);
    if (window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    newWord();
  } else {
    document.getElementById("result").textContent = "❌ Try again!";
    if (!trickyWords.includes(currentWord)) {
      trickyWords.push(currentWord);
      saveTrickyWords(trickyWords);
    }

    switchPlayerIfNeeded();
  }
}

export function startTimer(duration = 60) {
  if (timerInterval) return;

  timeLeft = parseInt(duration);
  if (isNaN(timeLeft) || timeLeft <= 0) timeLeft = 60;

  document.getElementById("timer").textContent = `${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      document.getElementById("timer").textContent = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;

      document.getElementById("timer").textContent = "⏰ Time's up!";
      document.getElementById("spellingInput").disabled = true;
      document.getElementById("checkBtn").disabled = true;
      document.getElementById("newWordBtn").disabled = true;

      alert(`⏰ Time's up!\nPlayer 1 Score: ${score1}\nPlayer 2 Score: ${score2}`);
    }
  }, 1000);

  document.getElementById("spellingInput").disabled = false;
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("newWordBtn").disabled = false;
}

export function resetGame() {
  score1 = 0;
  score2 = 0;
  currentPlayer = 1;
  timeLeft = 0;

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;

  wordHistory = [];
  currentWord = "";
  window.currentWord = "";

  document.getElementById("result").textContent = "";
  document.getElementById("spellingInput").value = "";
  document.getElementById("spellingInput").disabled = false;
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("newWordBtn").disabled = false;
  document.getElementById("timer").textContent = "--";

  updateWordHistory(wordHistory);
  updateScoreDisplay();
}

export function clearTrickyWords() {
  trickyWords = [];
  saveTrickyWords(trickyWords);
  updateTrickyWords();
}

export function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

export function toggleStudyMode() {
  const enabled = document.getElementById("studyModeToggle").checked;
  if (enabled && currentWord) {
    speakWord(currentWord);
  }
}
