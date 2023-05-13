const button = document.getElementById('speak-btn');
const textArea = document.getElementById('text-area');

button.addEventListener('click', () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(textArea.value))
    console.log(textArea.value)
})