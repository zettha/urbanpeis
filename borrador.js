//nav responsve
window.onload = function () {
    $("#hamburguesa").on("click", function () {
        $(".lista").toggle("slow");
    });
}

//velocidad de animacion de carousel
$(".carousel").carousel({interval: 3000});

//parrafo activo carousel
$('.carousel').on('slide.bs.carousel', function (ev) {
    debugger;
    $(".contenedor > p")
        .removeClass("active")
        .eq(ev.to)
        .addClass("active");
});

 // animación
    $(".animado").click(function(){
      $(this).toggleClass("animated jello",2000 ) 
    });
