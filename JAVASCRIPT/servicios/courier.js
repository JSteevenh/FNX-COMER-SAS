document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".package-texto h2, .package-imagen-superior, .package-imagen-inferior");

    fadeElements.forEach(element => {
        element.classList.add("show");
    });
});

/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".package-btn-naranja");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".shipping-text h2");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".shipping-image");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".pick-them-text h2");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".pick-them-image");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".texto-contactusCourier h2");

    function verificarVisibilidad() {
        if (elemento) {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});
