//nav responsve
window.onload = function() {
			$("#hamburguesa").on("click", function() {
				$(".lista").toggle("slow");
			});
		}
//parrafo activo del carousel
$('.carousel').carousel();
$('body').on('click','.carousel-control',function() {
   $(this).closest('.carousel').carousel( $(this).data('slide') );
}); 
		$('.carousel').on('slide.bs.carousel', function() {
			if ($('.active').next().length > 0) {
				$(".active").toggleClass("active").next().toggleClass("active");
			} else {
				$(".contenedor").find(".active").toggleClass("active");
				$(".contenedor").children(".p0").toggleClass("active");
			}
		}) 
