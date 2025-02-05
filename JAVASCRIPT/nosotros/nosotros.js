document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".operador-track");
    const items = document.querySelectorAll(".operador-item");
    const totalItems = items.length;
    let index = 0;
    let totalGroups = Math.ceil(totalItems / 3);

    function moverCarrusel() {
        index++;
        if (index >= totalGroups) {
            index = 0; 
        }
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moverCarrusel, 3000);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".historia-texto h2, .imagen-historia-superior, .imagen-historia-inferior");

    fadeElements.forEach(element => {
        element.classList.add("show");
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".historia2-texto h2, .historia2-imagen");

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