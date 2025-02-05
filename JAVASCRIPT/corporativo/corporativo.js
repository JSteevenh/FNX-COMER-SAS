
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".texto-experiencia h2, .imagen-izquierda, .imagen-derecha");

    fadeElements.forEach(element => {
        element.classList.add("show");
    });
});
///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".texto-emprendedor h2, .imagen-emprendedor");

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

///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".texto-contacto h2, .formulario-contacto");

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