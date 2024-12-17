const bulbs = document.querySelectorAll('.bulb');

function randomBlink() {
    bulbs.forEach(bulb => {
        const randomTime = Math.random() * 2 + 1; // випадковий час для миготіння (1-3 секунди)
        bulb.style.animationDuration = `${randomTime}s`;
    });
}

setInterval(randomBlink, 1000); // змінюємо тривалість анімації кожну секунду