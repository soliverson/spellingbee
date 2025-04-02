export function updateScore(score, highScore) {
    document.getElementById("score1").textContent = score;
    document.getElementById("highScore").textContent = highScore;
  }
  
  export function updateResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
  }
  
  export function updateWordHistory(history) {
    const historyList = document.getElementById("wordHistory");
    historyList.innerHTML = "";
    history.slice().reverse().forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      historyList.appendChild(li);
    });
  }
  
  export function updateTrickyWords(trickyWords = [], speakWordCallback = () => {}) {
    const list = document.getElementById("trickyWords");
    if (!list || !Array.isArray(trickyWords)) return;
  
    list.innerHTML = "";
    trickyWords.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      li.onclick = () => speakWordCallback(word);
      list.appendChild(li);
    });
  }
  
  export function animateBee(correct) {
    const bee = document.getElementById("beeMascot");
    if (!bee) return;
    bee.style.filter =
      correct === true
        ? "drop-shadow(0 0 8px lime)"
        : correct === false
        ? "drop-shadow(0 0 8px red)"
        : "none";
    bee.style.transition = "filter 0.3s ease";
  }
  