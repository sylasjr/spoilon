
$( document ).ready(function() {
    // $("#gift").fadeOut();
       var playerVal, 
        compVal,
        playerScore = 1,
        compScore = 1;

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


    $('.game .player .btn').on('click',function(){
       $('.game .computer .btn').parent().children().removeClass("btn-warning").css('opacity','0.3');


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

        randomNumber ();
    })

    function randomNumber() {
         compVal =  (Math.floor(Math.random()*3)+1);
    }

    function computerChoice (){
      $('.game .computer .btn').css('opacity','1');
      $('.game .computer .btn').parent().children().removeClass("btn-warning");
      if(compVal == 1){
        $('.game .computer .paper').addClass("btn-warning");
      }
      else if (compVal == 2){
        $('.game .computer .rock').addClass("btn-warning");
      }
      else{
        $('.game .computer .scissors').addClass("btn-warning");
      }
    }

    function keepScore() {
     var  playerPoint = $('.player .points'),
          compPoint   = $('.computer .points');
        if(playerScore == 2){
            playerPoint.find('.one').addClass('playerPoint');
        }
        else if(playerScore == 3){
            playerPoint.find('.two').addClass('playerPoint');
        }
        else if(playerScore == 4){
            playerPoint.find('.three').addClass('playerPoint');
        }

        if(compScore == 2){
            compPoint.find('.one').addClass('compPoint');
        }
        else if(compScore == 3){
            compPoint.find('.two').addClass('compPoint');
        }
        else if(compScore == 4){
            compPoint.find('.three').addClass('compPoint');
        }
    }



    $('.game a').on('click', function(){
      // var playerVal  = $(".player .form-control").val(),
      // compVal        = $(".computer .form-control").val(),
      computerChoice();

      var paper      = 1,
      rock           = 2,
      scissors       = 3;


      if(playerVal == paper && compVal == rock || playerVal == rock && compVal == scissors || playerVal == scissors && compVal == paper ) {
        $(".player .me").addClass("bounceIn animated").find('img').addClass('winner player').removeClass('challenge');;
        setTimeout(function(){$(".me").removeClass("bounceIn animated").find('img').removeClass('winner player').addClass('challenge')}, 1000);
        playerScore ++;
        keepScore();
      }
      else if(playerVal == compVal) {
        $(".game .me").addClass("wobble animated");
        setTimeout(function(){$(".me").removeClass("wobble animated");}, 1000);


      }
      else if(compVal == paper && playerVal == rock || compVal == rock && playerVal == scissors || compVal == scissors && playerVal == paper) {
        $(".computer .me").addClass("bounceIn animated").find('img').addClass('winner oponent').removeClass('challenge');
        setTimeout(function(){$(".me").removeClass("bounceIn animated").find('img').removeClass('winner oponent').addClass('challenge')}, 1000);
        compScore  ++;
        keepScore();

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









