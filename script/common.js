$(function(){
	//hamburger
	function toggleNav() {
		var body = document.body;
  		var hamburger = document.getElementById('js-hamburger');

  		hamburger.addEventListener('click', function() {
    		body.classList.toggle('nav-open');
  		});
	}
	toggleNav();
	
	//modal
	$(".modalon").on("click",function(){
		$(".modal-cover").show();
		$("#modal-"+$(this).data("id")).fadeIn(300);
	});
	$(".sel.cansel").on("click",function(){
		$(".modal").fadeOut(300);
	});
	$(".modal-cover").on("click",function(){
		$(".modal").fadeOut(300);
	});
	

	//Swithing lang
	$(".switch.ja").on("click",function(){
		$.cookie('language', 'ja', {expires:30, path: '/'});
	});
	$(".switch.es").on("click",function(){
		$.cookie('language', 'es', {expires:30, path: '/'});
	});
	$(".switch.pt").on("click",function(){
		$.cookie('language', 'pt', {expires:30, path: '/'});
	});
	$(".switch.en").on("click",function(){
		$.cookie('language', 'en', {expires:30, path: '/'});
	});
	var langset = $(".lang-switch").data("langset");
	$(".switch").removeClass("sel");
	$(".switch."+langset).addClass("sel");
})
