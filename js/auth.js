document.querySelector('.hero button').addEventListener('click', () => {
    document.getElementById('auth-modal').style.display = 'flex';
  });
// Отримати модальне вікно та сам блок контенту
const authModal = document.getElementById('auth-modal');
const authModalContent = document.querySelector('#auth-modal .modal-content');

// Функція для закриття модального вікна
function closeAuthModal() {
    authModal.style.display = 'none';
}

// Додавання обробника подій для кліку поза модальним блоком
authModal.addEventListener('click', function(event) {
    if (!authModalContent.contains(event.target)) {
        closeAuthModal();
    }
});

function switchToRegister() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';

}

const users = [
    {
        id: 'user-1',
        username: 'admin',
        password: 'password123' // У реальному застосунку паролі слід зберігати хешованими
    }
];

// Функція для обробки реєстрації
function registerUser(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const username = document.getElementById('register-username').value.replace(/'/g, "\'");
    const password = document.getElementById('register-password').value;

    // Перевірка, чи існує користувач
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Користувач з таким ім\'ям вже існує!');
        return;
    }

    // Додавання нового користувача
    const newUser = {
        id: `user-${users.length + 1}`,
        username,
        password
    };
    users.push(newUser);

    alert('Реєстрація успішна! Тепер можете увійти.');
    document.getElementById('register-form').reset();
}

// Функція для обробки авторизації
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.replace(/'/g, "\'");
    const password = document.getElementById('login-password').value;

    // Перевірка відповідності логіну та пароля
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert(`Ласкаво просимо, ${user.username}!`);
        document.getElementById('login-form').reset();

        // Перехід на сторінку гри
        window.location.href = 'game.html';
    } else {
        alert('Невірний логін або пароль!');
    }
}

// Додавання обробників подій для форм
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', registerUser);

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', loginUser);
