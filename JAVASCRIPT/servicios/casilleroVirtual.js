document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".compra-texto h2, .btn-naranja");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".compra-texto h2, .btn-naranja, .imagen-superior img, .imagen-inferior img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".imagen-gratuito, .texto-gratuito h2");

    function verificarVisibilidad() {
        elementos.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                elemento.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});


document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".texto-beneficios h2, .imagen-beneficios");

    function verificarVisibilidad() {
        elementos.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) {
                elemento.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();
});

document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".texto-llamado h2");

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

