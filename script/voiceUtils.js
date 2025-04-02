import wordList from './wordData.js';

let selectedVoice = null;

export function loadVoices() {
  const voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voiceSelect");
  voiceSelect.innerHTML = '<option value="">Select Voice</option>';
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  if (voices.length > 0 && !selectedVoice) {
    selectedVoice = voices[0];
  }
}

speechSynthesis.onvoiceschanged = loadVoices;

export function setVoice() {
  const voices = speechSynthesis.getVoices();
  const index = parseInt(document.getElementById("voiceSelect").value);
  if (!isNaN(index)) {
    selectedVoice = voices[index];
  }
}

export function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(`The word is ${word}`);
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
