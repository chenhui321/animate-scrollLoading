;(function () {

	'use strict';


	var burgerMenu = function() {

		$('body').on('click', function(event){

			event.preventDefault();
	//console.log(preventDefault)
			if ( $('#background').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});
	}




   var wordsAminate = function() {
		  var words =$('#words');
			if ( words.length > 0 ){
				words.waypoint(function( direction ){
					if (direction === 'down' && !$(this.element).hasClass('animated')){
						setTimeout(function(){
							words.find('.to-animate').each(function(k){
							var el = $(this);

							setTimeout(function () {
									el.addClass('fadeInUp animated');
							},k * 200, 'easeInOutExpo');
						});
						},200);
						$(this.element).addClass('animated');
					}
				}, { offset: '80%' } )
			}
		}

	 /*var wordsAminate = function(){
	 	var words = $('#words');
	 	if ( words.length > 0 ) {
	 		words.waypoint( function( direction){

	 			if( direction ==='down' && !$(this.element).hasClass('animated')){

	 				setTimeout(function() {
	 					words.find('.to-animate').each( function(k) {
	 						var el = $(this);

	 						setTimeout ( function () {
	 							el.addClass('fadeInUp animated');
	 						},  k * 200, 'easeInOutExpo' );

	 					});
	 				}, 200);

	 				$(this.element).addClass('animated');


	 			}
	 		}, { offset: '80%' } );
	 	}
	};*/


   var introAnimate = function() {
     if ( $('#introduction').length > 0 ) {

 			$('#introduction').waypoint( function( direction ) {

 				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


 					setTimeout(function() {
 						$('#introduction .to-animate').each(function( k ) {
 							var el = $(this);

 							setTimeout ( function () {
 								el.addClass('fadeInRight animated');
 							},  k * 200, 'easeInOutExpo' );

 						});
 					}, 200);


 					$(this.element).addClass('animated');

 				}
 			} , { offset: '80%' } );

 		}
   }



var planmouse =function() {

	   $('#plan').mouseover(function(){

  			$(this).css("background-image","url(images/img_7.jpg)");
				$(this).css("opacity","0.7");
				$(this).css("background-size","150%");
				$('#plan h2').css("color","white");
				$('#plan p.fgrey').css("color","white");
        $('.introbutton1').css('background-color','transparent');
				$('.introbutton1').css('border','2px solid white');

				var buttonmouse =function() {
					 $('.introbutton1').mouseover(function(){
						 $('.introbutton1').css('transition-duration','0.3s');
						 $('.introbutton1').css('background-color','#52d3aa')
						 $('.introbutton1').css('border','2px solid #52d3aa');
					 });
					 $('.introbutton1').mouseout(function() {
						 $('.introbutton1').css('transition-duration','0.3s');
						 $('.introbutton1').css('background-color','transparent')
						 $('.introbutton1').css('border','2px solid #fff');
					 });
				 }
			})

		 $('#plan').mouseout(function(){
			 $(this).css("background-color","#fff");
			 $(this).css("background-image","none");
			 $('#plan h2').css("color","black");
			 $('#plan p.fgrey').css("color","#929292");
			 $('.introbutton1').css('background-color','#52d3aa');
			 $('.introbutton1').css('border','2px solid #52d3aa');
   })
 }


   var developmouse =function() {

  	 $('#develope').mouseover(function(){

	  		$(this).css("background-image","url(images/img_8.jpg)");
		  	$(this).css("opacity","0.7");
  			$(this).css("background-size","150%");
  			$('#develope h2').css("color","white");
	  		$('#develope p.fgrey').css("color","white");
		  	$('.introbutton2').css('background-color','transparent');
			  $('.introbutton2').css('border','2px solid white');

				var buttonmouse =function() {
            var This= $(this);
					 $('.introbutton2').mouseover(function(){
						This.css('transition-duration','0.3s');
						This.css('background-color','#52d3aa')
						This.css('border','2px solid #52d3aa');
					});
					$('.introbutton2').mouseout(function() {
						This.css('transition-duration','0.3s');
						This.css('background-color','transparent')
						This.css('border','2px solid #fff');
					})
				}

  		})

	   $('#develope').mouseout(function(){
		   $(this).css("background-color","#fff");
  		 $(this).css("background-image","none");
	  	 $('#develope h2').css("color","black");
		   $('#develope p.fgrey').css("color","#929292");
		   $('.introbutton2').css('background-color','#52d3aa');
		   $('.introbutton2').css('border','2px solid #52d3aa');
    })
   }

	 var launchmouse =function() {

  	 $('#launch').mouseover(function(){

	  		$(this).css("background-image","url(images/img_10.jpg)");
		  	$(this).css("opacity","0.7");
  			$(this).css("background-size","150% ");
  			$('#launch h2').css("color","white");
	  		$('#launch p.fgrey').css("color","white");
		  	$('.introbutton3').css('background-color','transparent');
			  $('.introbutton3').css('border','2px solid white');

				var buttonmouse =function() {
           var This= $(this);
		 			$('.introbutton3').mouseover(function(){

		  			 This.css('transition-duration','0.5s');
		  			 This.css('background-color','#52d3aa')
		  			 This.css('border','2px solid #52d3aa');
		  		 });
		  		 $('.introbutton3').mouseout(function() {
		  			 This.css('transition-duration','0.5s');
		  			 This.css('background-color','transparent')
		  			 This.css('border','2px solid #fff');
		  		 })



		 	 }
  		})

	   $('#launch').mouseout(function(){
		   $(this).css("background-color","#fff");
  		 $(this).css("background-image","none");
	  	 $('#launch h2').css("color","black");
		   $('#launch p.fgrey').css("color","#929292");
		   $('.introbutton3').css('background-color','#52d3aa');
		   $('.introbutton3').css('border','2px solid #52d3aa');
    })
   }

	 var buttonmouse =function() {


			$('.introbutton3').mouseover(function(){
 			 $(this).css('transition-duration','0.5s');
 			 $(this).css('background-color','#52d3aa')
 			 $(this).css('border','2px solid #52d3aa');
 		 });
 		 $('.introbutton3').mouseout(function() {
 				$(this).css('transition-duration','0.5s');
 			 $(this).css('background-color','transparent')
 			 $(this).css('border','2px solid #fff');
 		 })



	 }


  var workAnimate = function() {
    if ( $('#Work').length > 0 ) {

      $('#Work').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            $('#Work .to-animate').each(function( k ) {
              var el = $(this);

              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );

            });
          }, 200);


          $(this.element).addClass('animated');

        }
      } , { offset: '80%' } );

    }
  };




  var TEMAnimate = function(){
		var tem = $('#TEM');
		if ( tem.length > 0 ) {
			tem.waypoint( function( direction){

				if( direction ==='down' && !$(this.element).hasClass('animated')){

					var sec = tem.find('.to-animate').length;
						sec = parseInt((sec * 200) - 400);


					setTimeout(function() {
          	tem.find('.to-animate').each( function(k) {
              var el = $(this);

              setTimeout ( function () {
                el.addClass('fadeInDown animated');
              },  k * 200, 'easeInOutExpo' );

            });
          }, 200);

					setTimeout(function() {
						tem.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);



          $(this.element).addClass('animated');


				}
			}, { offset: '80%' } );
		}
	};



  var serviceAnimate = function(){
		var Ser = $('#service');
		if( Ser.length > 0 ){
			Ser.waypoint(function(direction){
				if( direction = 'down' && !$(this.element).hasClass('animated')){
					var abc = Ser.find('.to-animate-2').length,
					abc = parseInt((abc * 300) + 400 ) ;

					setTimeout(function(){
						Ser.find('.to-animate').each(function(k){
							var el =$(this);
							setTimeout(function(){
								el.addClass('fadeInUp animated');
							},k * 200,'easeInOutExpo')
						});

					},200);

					setTimeout(function(){
						Ser.find('.to-animate-2').each(function(k){
						  var el =$(this);
							setTimeout(function(){
								el.addClass('bounceIn animated')
							},k * 200,'easeInOutExpo')
						})
					},abc);

					$(this.element).addClass('animated');
				}
			},{ offset: '85%'});
		}
	}

  var aboutAnimate = function(){
		var abt = $('#ABOUT');
		if (abt.length > 0){
			abt.waypoint(function(direction){
				if (direction == 'down' && !$(this.element).hasClass('animated')){
					setTimeout(function(){
						abt.find('.to-animate').each(function(k){
							var el=$(this);
							setTimeout(function(){
								el.addClass('fadeInUp animated')
							},k*200,'easeInOutExpo')
						})
					},200)
           $(this.element).addClass('animated');
				}
			},{ offset:'85%'});
		}
	}


	var touchAnimate = function(){
		var tou = $('#TOUCH');
		if (tou.length > 0){
			tou.waypoint(function(direction){
				if (direction == 'down' && !$(this.element).hasClass('animated')){
					setTimeout(function(){
						tou.find('.to-animate').each(function(k){
							var el=$(this);
							setTimeout(function(){
								el.addClass('fadeInUp animated')
							},k*200,'easeInOutExpo')
						})
					},200)
					 $(this.element).addClass('animated');
				}
			},{ offset:'85%'});
		}
	}

$(function(){

  wordsAminate();
  burgerMenu();

  // Animations
  introAnimate();
  workAnimate();
  TEMAnimate();
  serviceAnimate();
  aboutAnimate();
	touchAnimate();
	planmouse();
  developmouse();
	launchmouse();
	buttonmouse();
});


}());
