function createGarland() {
  const garlandContainer = document.getElementById('garland');
  const numLights = 20;  // Кількість елементів на гірлянді
  for (let i = 0; i < numLights; i++) {
      const light = document.createElement('div');
      light.classList.add('garland-light');
      garlandContainer.appendChild(light);
  }
}

window.onload = createGarland;
