
$( document ).ready(function() {
    // $("#gift").fadeOut();

    $('#gift').bind('change', function () {

    	if ($(this).is(':checked')){
    		$(".send-gift").fadeOut("fast");
    		$(".awesome").delay(500).fadeIn();
    	}
    	else{
    		$(".awesome").fadeOut("fast");
    		$(".send-gift").delay(500).fadeIn();
    	}
    });
    bannerImage();



});

$( window ).resize(function() {
    bannerImage();
});


 bannerImage = function(){
    if ($(window).width() < 479) {
      $( ".banner" ).css('background-image','url("http://lorempixel.com/467/150/")');
  }
  else if ($(window).width() < 768) {
      $( ".banner" ).css('background-image','url("http://lorempixel.com/767/150/")');
  }
  else if ($(window).width() < 992) {
      $( ".banner" ).css('background-image','url("http://lorempixel.com/210/150/")');
  }
    else if ($(window).width() < 1200) {
      $( ".banner" ).css('background-image','url("http://lorempixel.com/350/150/")');
  }
  else {
      $( ".banner" ).css('background-image','url("http://lorempixel.com/380/150/")');
  }
 }