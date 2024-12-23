// Вкажіть тут назву поточної теми
const CURRENT_THEME = 'new_year'; // Змінюйте на 'default', 'new_year' тощо

// Автоматично підключаємо CSS-файл для вибраної теми
const themeLink = document.getElementById('theme-style');
themeLink.href = `./css/${CURRENT_THEME}/style.css`
const themeLinkMobile = document.getElementById('theme-style-mobile');
themeLinkMobile.href = `./css/${CURRENT_THEME}/style_mobile.css`
const themePreloader = document.getElementById('theme-preloader');
themePreloader.href = `./css/${CURRENT_THEME}/preloader.css`

const themeHero = document.getElementById('hero');
themeHero.src = `./css/${CURRENT_THEME}/img/hero.jpg`
const themeTg = document.getElementById('tg');
themeTg.src = `./css/${CURRENT_THEME}/img/telegram_icon.svg`
const themeFb = document.getElementById('fb');
themeFb.src = `./css/${CURRENT_THEME}/img/facebook_icon.svg`
const themeGh = document.getElementById('gh');
themeGh.src = `./css/${CURRENT_THEME}/img/github_icon.svg`