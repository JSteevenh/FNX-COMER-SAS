//EFECTO EN EL CONTENIDO DEL HEADER
document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");

    function checkScroll() {
        const heroPosition = heroContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        console.log("heroPosition:", heroPosition, "windowHeight:", windowHeight); 

        if (heroPosition < windowHeight - 100) {
            heroContent.classList.add("show");
            console.log("Clase 'show' agregada"); 
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.querySelector(".hero-content h1");

    function verificarScroll() {
        if (!heroTitle) return;
        
        const rect = heroTitle.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            heroTitle.classList.add("show");
        }
    }

    window.addEventListener("scroll", verificarScroll);
    
    verificarScroll();
});


//EFECTO EN LAS TARJETAS
document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards-container");

    function checkScroll() {
        if (!cardsContainer) return;

        const rect = cardsContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {  
            requestAnimationFrame(() => {
                cardsContainer.classList.add("show"); 
            });
            window.removeEventListener("scroll", checkScroll); 
        }
    }

    if (cardsContainer.getBoundingClientRect().top > window.innerHeight) {
        window.addEventListener("scroll", checkScroll);
    }

    checkScroll(); 
});

//EFECTO DE RECIBE EN TU PAIS
document.addEventListener("DOMContentLoaded", function () {
    const recibeContent = document.querySelector(".recibe-pais-content");
    const recibeImages = document.querySelector(".recibe-pais-images");
    const btnRecibe = document.querySelector(".btn-recibe");

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const recibePosition = recibeContent.getBoundingClientRect().top;
        const imagesPosition = recibeImages.getBoundingClientRect().top;
        const buttonPosition = btnRecibe.getBoundingClientRect().top;

        if (recibePosition < windowHeight - 100) {
            recibeContent.classList.add("show");
        }
        if (imagesPosition < windowHeight - 100) {
            recibeImages.classList.add("show");
        }
        if (buttonPosition < windowHeight - 100) {
            btnRecibe.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

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


//EFECTO DE REFERENCIAS
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll(".referencias-header h3, .referencias-header h2, .referencias-container");
    const filasReferencias = document.querySelectorAll(".fila-referencias"); 

    function verificarScroll() {
        elementos.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            console.log(`Elemento: ${elemento.tagName}, Posición: ${rect.top}`); 
            if (rect.top < window.innerHeight * 0.9) {
                elemento.classList.add("show");
            }
        });

        filasReferencias.forEach((fila) => {
            const rectFila = fila.getBoundingClientRect();
            if (rectFila.top < window.innerHeight * 0.9) {
                fila.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", verificarScroll);
    verificarScroll();
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

































