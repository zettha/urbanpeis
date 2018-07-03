window.onload = function () {
    $("#hamburguesa").on("click", function () {
        $(".lista").toggle("slow");
    });
}

//flecha cabecera
$(function () {
            $('.arrow').bind("click", function () {
                var dest = $(".scrol").offset().top;
                $("html, body").animate({scrollTop: dest},1000);
            });
        });



//velocidad de animacion de carousel
$(".carousel").carousel({
    interval: 3000
});

//parrafo activo carousel
$('.carousel').on('slide.bs.carousel', function (ev) {

    $(".cont > p")
        .removeClass("active")
        .eq(ev.to)
        .addClass("active");
});

// animación
$(".animado").click(function () {
    $(this).toggleClass("animated jello", 2000)
});

//nav hamburguesa aparicion del color de fondo
$(".fa-bars").on("click", function () {
    $(this).toggleClass("fondo-hamburguesa");
});

// posicionar el nav fijo despues del fondo-inicio
posicionarMenu();

$(window).scroll(function () {
    posicionarMenu();
});
function posicionarMenu() {
    var altura_del_header = $('.header').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header) {
        $('.menu').addClass('fixed');
        $('.lp').removeClass('aparece');
        $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.menu').removeClass('fixed');
        $('.lp').addClass('aparece');
        $('.wrapper').css('margin-top', '0');
    }
}


//Scrool top desde la parte de abajo hacia arriba.
$(document).ready(function() {
	$('.flecha').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});


//scrool nav pc

//Scrool Eventos
$(document).ready(function() {
	$('.eventos-pc').click(function(){  
		$('html, body').animate({scrollTop:850}, 'slow'); 
		return false;
	});
});

//Scrool grupos
$(document).ready(function() {
	$('.grupos-pc').click(function(){  
		$('html, body').animate({scrollTop:1730}, 'slow'); 
		return false;
	});
});

//Scrool galeria
$(document).ready(function() {
	$('.galeria-pc').click(function(){  
		$('html, body').animate({scrollTop:3250}, 'slow'); 
		return false;
	});
});

//Scrool siguenos
$(document).ready(function() {
	$('.siguenos-pc').click(function(){  
		$('html, body').animate({scrollTop:4535}, 'slow'); 
		return false;
	});
});

//Scrool donde
$(document).ready(function() {
	$('.donde-pc').click(function(){  
		$('html, body').animate({scrollTop:4800}, 'slow'); 
		return false;
	});
});

//scrool nav hamburguesa
//Scrool Eventos
$(document).ready(function() {
	$('.eventos-mvl').click(function(){  
		$('html, body').animate({scrollTop:810}, 'slow'); 
		return false;
	});
});

//Scrool Eventos
$(document).ready(function() {
	$('.eventos-mvl').click(function(){  
		$('html, body').animate({scrollTop:810}, 'slow'); 
		return false;
	});
});

//Scrool grupos
$(document).ready(function() {
	$('.grupos-mvl').click(function(){  
		$('html, body').animate({scrollTop:1075}, 'slow'); 
		return false;
	});
});

//Scrool galeria
$(document).ready(function() {
	$('.galeria-mvl').click(function(){  
		$('html, body').animate({scrollTop:4050}, 'slow'); 
		return false;
	});
});

//Scrool siguenos
$(document).ready(function() {
	$('.siguenos-mvl').click(function(){  
		$('html, body').animate({scrollTop:7430}, 'slow'); 
		return false;
	});
});

//Scrool donde
$(document).ready(function() {
	$('.donde-mvl').click(function(){  
		$('html, body').animate({scrollTop:7805}, 'slow'); 
		return false;
	});
});