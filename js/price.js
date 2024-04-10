$(document).ready(function(){
    $("#cta").click(function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        var target = $("#price").offset().top; // Obtiene la posición vertical de la sección de precios

        // Desplaza suavemente la ventana hacia la posición de la sección de precios
        $("html, body").animate({
            scrollTop: target
        }, 800);
    });
});