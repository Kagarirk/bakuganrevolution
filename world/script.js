let selectedPokemon = null;
let hunger = 100;
let happiness = 100;
let energy = 100;
let xp = 0;
let level = 1;

function selectPokemon(pokemon) {
  selectedPokemon = pokemon;
  document.querySelector('.pokemon-selection').classList.add('hidden');
  document.getElementById('pokemon-status').classList.remove('hidden');
  document.getElementById('pokemon-name').innerText = pokemon;
  document.getElementById('pokemon-image').src = `${pokemon.toLowerCase()}.gif`;
}

function updateStats() {
  document.getElementById('hunger').innerText = hunger;
  document.getElementById('happiness').innerText = happiness;
  document.getElementById('energy').innerText = energy;
  document.getElementById('xp').innerText = xp;
  document.getElementById('level').innerText = level;

  // Перевірка на прогрес рівня
  if (xp >= 100) {
    levelUp();
  }
}

function levelUp() {
  level++;
  xp = 0;
  document.getElementById('message').innerText = `🎉 Вітаємо! ${selectedPokemon} досяг рівня ${level}!`;
  setTimeout(() => {
    document.getElementById('message').innerText = '';
  }, 3000);
}

function feedPokemon() {
  if (hunger < 100) hunger += 10;
  xp += 10;
  updateStats();
}

function playWithPokemon() {
  if (energy > 10 && happiness < 100) {
    energy -= 10;
    happiness += 20;
    xp += 15;
  }
  updateStats();
}

function restPokemon() {
  if (energy < 100) {
    energy += 20;
    xp += 5;
  }
  updateStats();
}

// Автоматичне зниження параметрів з часом
setInterval(() => {
  if (hunger > 0) hunger -= 5;
  if (happiness > 0) happiness -= 5;
  if (energy > 0) energy -= 5;
  updateStats();

  // Якщо один із показників критичний
  if (hunger <= 0 || happiness <= 0 || energy <= 0) {
    document.getElementById('message').innerText = `${selectedPokemon} почувається погано! 😢`;
  }
}, 5000);
