window.addEventListener("load", function() {
    // Затримка в 2 секунди (2000 мс)
    setTimeout(function() {
      const preloader = document.querySelector(".preloader");
      preloader.style.display = "none";
    }, 2000); // Затримка перед приховуванням прелоудера
  });