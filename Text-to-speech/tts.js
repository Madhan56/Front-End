document.addEventListener("DOMContentLoaded", () => {
  const speakButton = document.querySelector("button");
  const textInput = document.getElementById("text-input");
  const voiceSelect = document.getElementById("selection");

  let voices = [];

  function getVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    // clearing if there are anything in the html before
    voices.forEach((voice, index) => {
      const options = document.createElement("option");
      options.textContent = `${voice.name} (${voice.lang})`;
      options.value = index;
      voiceSelect.appendChild(options);
    });
  }

  getVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
  }
  // updating voice list if there have been any changes

  speakButton.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices[voiceSelect.value];
      speech.voice = selectedVoice;
      window.speechSynthesis.speak(speech);
    }
  });
});
