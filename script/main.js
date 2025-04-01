let currentWord = "";
let selectedVoice = null;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timeLeft = 0;
let timerInterval = null;
let wordHistory = [];

function loadVoices() {
  const voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voiceSelect");
  voiceSelect.innerHTML = '<option value="">Select Voice</option>';
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  if (!selectedVoice && voices.length > 0) {
    selectedVoice = voices[0];
  }
}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

function setVoice() {
  const voices = speechSynthesis.getVoices();
  const selectedIndex = document.getElementById("voiceSelect").value;
  if (selectedIndex !== "") {
    selectedVoice = voices[parseInt(selectedIndex)];
  }
}

function newWord() {
  const keys = Object.keys(wordList);
  currentWord = keys[Math.floor(Math.random() * keys.length)];
  document.getElementById("spellingInput").value = "";
  document.getElementById("result").textContent = "";
  speakWord();
}

function speakWord() {
  if (!currentWord) return;
  const sentence = `Your word is ${currentWord}. ${wordList[currentWord]} The word is ${currentWord}.`;
  const utterance = new SpeechSynthesisUtterance(sentence);
  if (selectedVoice) utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

function checkSpelling() {
  const userInput = document.getElementById("spellingInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (!currentWord) {
    result.textContent = "Click 'New Word' to start!";
    return;
  }

  if (userInput === currentWord) {
    result.textContent = "✅ Great job!";
    result.style.color = "green";
    document.getElementById("correctSound").play();
    speechSynthesis.speak(new SpeechSynthesisUtterance("Great job!"));
    if (window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    score++;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
    }
    document.getElementById("score").textContent = score;
    document.getElementById("highScore").textContent = highScore;

    wordHistory.push(currentWord);
    updateWordHistory();
    animateBee(true);
    newWord();
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
    document.getElementById("wrongSound").play();
    animateBee(false);
  }
}

function updateWordHistory() {
  const historyList = document.getElementById("wordHistory");
  historyList.innerHTML = "";
  wordHistory.slice().reverse().forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    historyList.appendChild(li);
  });
}

function resetGame() {
  score = 0;
  timeLeft = 0;
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("score").textContent = "0";
  document.getElementById("timer").textContent = "--";
  wordHistory = [];
  updateWordHistory();
  document.getElementById("result").textContent = "";
  document.getElementById("spellingInput").value = "";
  currentWord = "";
  animateBee(null);
}

function startTimer(duration = 60) {
  timeLeft = duration;
  document.getElementById("timer").textContent = timeLeft;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert(`⏰ Time's up! Final score: ${score}`);
    }
  }, 1000);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showHint() {
  if (!currentWord) return;
  const message = `${wordList[currentWord]}`;
  const utterance = new SpeechSynthesisUtterance(message);
  if (selectedVoice) utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

function animateBee(correct) {
  const bee = document.getElementById("beeMascot");
  if (!bee) return;
  bee.style.filter = correct === true ? "drop-shadow(0 0 8px lime)" : correct === false ? "drop-shadow(0 0 8px red)" : "none";
  bee.style.transition = "filter 0.3s ease";
}

document.getElementById("highScore").textContent = highScore;
window.addEventListener("load", loadVoices);
