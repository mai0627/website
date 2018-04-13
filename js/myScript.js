$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//Scroll Function

$(window).scroll(function(){
	if($(document).scrollTop() >726) {
		$('nav').addClass('shrink');
	}
	else{
		$('nav').removeClass('shrink');
	}
});

$(window).scroll(function(){
	if($(document).scrollTop() >726) {
		$('.navbar-brand').addClass('addCol');
	}
	else{
		$('.navbar-brand').removeClass('addCol');
	}
});