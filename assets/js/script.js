// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links").querySelector("ul");
  const icon = document.getElementById("toggle-icon");

  toggleBtn.addEventListener("click", () => {
    icon.classList.add("fade");
    setTimeout(() => {
      navLinks.classList.toggle("active");
      icon.textContent = navLinks.classList.contains("active") ? "x" : "☰";
      icon.classList.remove("fade");
    },200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
      const images = carousel.querySelectorAll('.carousel-img');
      let current = 0;
      images[current].classList.add('active');

      setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
      }, 3000);
    });
  });
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   const carousel = document.querySelector('.scroll-carousel');
  //   const progressBar = document.querySelector('.scroll-progress');

  //   carousel.addEventListener('scroll', () => {
  //     const scrollLeft = carousel.scrollLeft;
  //     const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  //     const scrollPercent = (scrollLeft / scrollWidth) * 100;
  //     progressBar.style.width = `${scrollPercent}%`;
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.scroll-carousel');

    carousels.forEach((carousel) => {
      const progressBar = carousel.previousElementSibling;
      if (!progressBar || !progressBar.classList.contains('scroll-progress')) return;

      carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        const scrollPercent = (scrollLeft / scrollWidth) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      });
    });
  });
