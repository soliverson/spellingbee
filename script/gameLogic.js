import wordList from './wordData.js';
import { updateWordHistory } from './ui.js';
import { getHighScore, setHighScore, getTrickyWords, saveTrickyWords } from './storage.js';
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

    newWord(); // give a new word without switching players (they stay on correct answer)
  } else {
    document.getElementById("result").textContent = "❌ Try again!";
    if (!trickyWords.includes(currentWord)) {
      trickyWords.push(currentWord);
      saveTrickyWords(trickyWords);
    }

    switchPlayerIfNeeded(); // only switch if incorrect
  }
}

export function startTimer(duration = 60) {
  timeLeft = duration;
  document.getElementById("timer").textContent = timeLeft;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`⏰ Time's up! Player 1: ${score1}, Player 2: ${score2}`);
    }
  }, 1000);
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
  updateWordHistory(wordHistory);
  updateScoreDisplay();
  document.getElementById("timer").textContent = "--";
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
