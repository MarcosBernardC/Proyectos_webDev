// main.js - Configuración inicial del SPA

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Definir las rutas de las vistas
    const routes = {
        "about_me": "./templates/about_me.html",
        "habilidades": "./templates/habilidades.html",
        "proyectos": "templates/proyectos.html",
        "contacto": "./templates/contacto.html"
    };

    function navigateTo(route) {
        const url = routes[route] || routes[""];
        fetch(url)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(error => console.error("Error cargando la vista", error));
    }

    window.addEventListener("hashchange", () => {
        const route = location.hash.replace("#", "");
        navigateTo(route);
    });

    navigateTo(location.hash.replace("#", "")); // Cargar la vista inicial
});