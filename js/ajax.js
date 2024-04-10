$(document).ready(function(){
    $(".cta").click(function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        var target = $(this).attr("href"); // Obtiene el valor del atributo href del enlace
        var offset = $(target).offset().top; // Obtiene la posición vertical del elemento de destino

        // Desplaza suavemente la ventana hacia la posición del elemento de destino
        $("html, body").animate({
            scrollTop: offset
        }, 800);
    });
});

