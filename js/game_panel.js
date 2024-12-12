function openModal(modalId) {
    document.getElementById(modalId).classList.add('open');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open');
}

function loadContent(contentId) {
    document.getElementById('content-area').innerHTML = `<h1>Loading ${contentId}...</h1>`;
}

// Для мобільної версії відкриття чату
function toggleChat() {
    const chat = document.getElementById('chat-area');
    chat.classList.toggle('open');
}