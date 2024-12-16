// Вкажіть тут назву поточної теми
const CURRENT_THEME = 'new_year'; // Змінюйте на 'default', 'new_year' тощо

// Автоматично підключаємо CSS-файл для вибраної теми
const themeLink = document.getElementById('theme-style');
themeLink.href = `./css/${CURRENT_THEME}/style.css`
const themeLinkMobile = document.getElementById('theme-style-mobile');
themeLinkMobile.href = `./css/${CURRENT_THEME}/style_mobile.css`