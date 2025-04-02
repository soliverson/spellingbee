import wordList from './wordData.js';

let selectedVoice = null;
const preferredVoices = ["Samantha", "Google US English"];

export function loadVoices() {
  const voices = speechSynthesis.getVoices().filter(v => v.lang === "en-US");
  const voiceSelect = document.getElementById("voiceSelect");
  voiceSelect.innerHTML = "";

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name}`;
    voiceSelect.appendChild(option);
  });

  // Try to select Samantha or Google US English
  selectedVoice = voices.find(v => preferredVoices.includes(v.name)) || voices[0];
  if (selectedVoice) {
    voiceSelect.value = selectedVoice.name;
  }
}

speechSynthesis.addEventListener("voiceschanged", loadVoices);

export function setVoice() {
  const selectedName = document.getElementById("voiceSelect").value;
  const voices = speechSynthesis.getVoices();
  selectedVoice = voices.find(voice => voice.name === selectedName);
}

export function speakWord(word) {
  if (!word) return;
  const utterance = new SpeechSynthesisUtterance(`The word is ${word}.`);
  if (selectedVoice) utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
}

export function showHint(word) {
  const definition = wordList[word]?.definition || "No definition available.";
  const utter = new SpeechSynthesisUtterance(definition);
  if (selectedVoice) utter.voice = selectedVoice;
  speechSynthesis.speak(utter);
}

export function readSentence(word) {
  const sentence = wordList[word]?.sentence || "No sentence available.";
  const utter = new SpeechSynthesisUtterance(sentence);
  if (selectedVoice) utter.voice = selectedVoice;
  speechSynthesis.speak(utter);
}
