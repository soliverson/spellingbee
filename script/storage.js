export function getHighScore() {
    return parseInt(localStorage.getItem("highScore")) || 0;
  }
  
  export function setHighScore(score) {
    localStorage.setItem("highScore", score);
  }
  
  export function getTrickyWords() {
    return JSON.parse(localStorage.getItem("trickyWords")) || [];
  }
  
  export function saveTrickyWords(trickyWords) {
    localStorage.setItem("trickyWords", JSON.stringify(trickyWords));
  }
  