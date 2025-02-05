//EFECTO DE  EN SERVICIOS
document.addEventListener("DOMContentLoaded", function () {
    function mostrarElementosAlHacerScroll() {
        let elementos = document.querySelectorAll('.servicios-header h3, .servicios-header h2, .servicios-container, .servicio');
        
        elementos.forEach((elemento) => {
            let posicion = elemento.getBoundingClientRect().top;
            let alturaPantalla = window.innerHeight;
            
            if (posicion < alturaPantalla - 100) {
                elemento.classList.add('show');
            }
        });
    }

    window.addEventListener("scroll", mostrarElementosAlHacerScroll);
    mostrarElementosAlHacerScroll();
});

//EFECTO DE ENVIOS ENTREGADOS
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll(".hemos-entregado-content h3, .hemos-entregado-content h2, .btn-entregado, .imagen-perro");

    function verificarScroll() {
        elementos.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                elemento.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", verificarScroll);
    verificarScroll(); 
});

//EFECTO DE OBJETIVO
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".objetivo-titulo, .objetivo-imagen");

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