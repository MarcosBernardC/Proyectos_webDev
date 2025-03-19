// Animación de cortinas
window.onload = function(){
    document.querySelector(".curtain-left").style.transform = "translateX(-100%)";
    document.querySelector(".curtain-right").style.transform = "translateX(100%)";
    setTimeout(() => {
        document.querySelector(".container").style.opacity = "1";
    }, 1500);
};

// Mostrar menú interactivo
function mostrarMenu(){
    document.getElementById("menu").style.display = "block";
}