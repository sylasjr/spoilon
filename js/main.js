
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

    var playerVal, compVal = Math.floor((Math.random() * 3) + 1);

    $('.game .player .btn').on('click',function(){
        $(this).parent().children().removeClass("btn-success");
        $(this).addClass("btn-success");
        $('.computer img').css('opacity','0.3');
        $('.computer .me span').removeClass("hidden");

        if($(this).hasClass('paper')){

          playerVal=1;

        }
        else if($(this).hasClass('rock')){
          playerVal=2;
        }
        else{
          playerVal=3;
        }

        computerChoice();



    })

    function computerChoice (){
      $('.game .computer .btn').parent().children().removeClass("btn-success");
      if(compVal == 1){
        $('.game .computer .paper').addClass("btn-warning");
      }
      else if (compVal == 2){
        $('.game .computer .rock').addClass("btn-warning");
      }
      else{
        $('.game .computer .scissor').addClass("btn-warning");
      }
    }



    $('.game a').on('click', function(){
      // var playerVal  = $(".player .form-control").val(),
      // compVal        = $(".computer .form-control").val(),
      paper          = 1,
      rock           = 2,
      scissors       = 3;

      if(playerVal == paper && compVal == rock) {
        $(".message").text("Player Wins");
      }
      else if (playerVal == rock && compVal == scissors) {
        $(".message").text("Player Wins");
      }
      else if (playerVal == scissors && compVal == paper) {
        $(".message").text("Player Wins");
      }

      if(playerVal == compVal) {
         $(".message").text("It is a tie");
      }

      if(compVal == paper && playerVal == rock) {
        $(".message").text("Trent Wins");
      }
      else if (compVal == rock && playerVal == scissors) {
        $(".message").text("Trent Wins");
      }
      else if (compVal == scissors && playerVal == paper) {
       $(".message").text("Trent Wins");
      }

        $('.computer img').css('opacity','1');
        $('.computer .me span').addClass('hidden');








    });




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









