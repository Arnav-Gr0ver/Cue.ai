function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");
    
    if (!input.value.trim()) return;

    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + input.value;
    userMessage.classList.add("chat-message");
    chatBox.appendChild(userMessage);

    let aiMessage = document.createElement("div");
    aiMessage.classList.add("chat-message");
    chatBox.appendChild(aiMessage);

    let response = "Analyzing your document..."; // Placeholder AI response
    typeEffect(aiMessage, "Finagen AI: " + response, 50);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}