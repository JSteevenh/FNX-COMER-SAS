document.addEventListener("DOMContentLoaded", function () {
    const testimoniosWrapper = document.querySelector(".testimonios-wrapper");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const totalTestimonios = document.querySelectorAll(".testimonio").length;
    
    let currentIndex = 0;
    const testimoniosPorVista = 2;
    const totalSlides = Math.ceil(totalTestimonios / testimoniosPorVista);

    function updateCarousel() {
        const offset = -(currentIndex * (100 / totalSlides)) + "%";
        testimoniosWrapper.style.transform = `translateX(${offset})`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    updateCarousel();
});

////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".beneficios-texto h2");

    fadeElements.forEach(element => {
        element.classList.add("show");
    });
});

////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".unirte-texto h2");

    function checkVisibility() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".texto-llamado-aliados H2, .boton-llamado-aliados");

    function checkVisibility() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navRight = document.querySelector(".nav-right");

    if (!menuToggle || !navRight) {
        return;
    }

    menuToggle.addEventListener("click", function () {
        navRight.classList.toggle("show");

        if (navRight.classList.contains("show")) {
            navRight.style.maxHeight = "500px"; 
        } else {
            navRight.style.maxHeight = "0px"; 
        }
    });
});
