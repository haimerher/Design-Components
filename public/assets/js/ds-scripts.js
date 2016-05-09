$(document).ready(function(){

	//tooltips
	$("body .tooltip").before('<div class="wrap-tooltip">');

	$("body").on('mouseover', '.tooltip', function(){
		var tooltip = $(".tooltip").data("tooltip");
		var tooltipCont = '<span class="tooltip-cont">' + tooltip + '</span>';
		var x = $('.tooltip').offset();
		var w = $('.tooltip').width();
		// $(tooltipCont).hide().preppend('.tooltip').fadeIn(80);

		$('.tooltip').before(tooltipCont);
		$('.tooltip-cont').offset({ top: x.top+50, left: x.left });
	})
	$("body").on('mouseout', '.tooltip', function(){
		$('.tooltip-cont').fadeOut(80, function() {
			$(this).remove();
		});
	})

	//SIDEBAR
	$(".burger-sidebar").on('click', function(){ 
      if($(".cont-sidebar").hasClass("hide")){
          $(".cont-sidebar").removeClass("hide");
      } else {
          $(".cont-sidebar").addClass("hide");
      }

      if($('.sub-sidebar').children('nav').is(':visible')){
          $('.sub-sidebar').children('nav').toggle();
      } else { return false; }
  }); 

  $(".sub-sidebar").on('click', function(){
      $(this).children('nav').toggle();
  });

  /*MODALBOX*/
  $('body').on('click', '.open-modal', function(){
 		var modalBtn= $(this).data('target');
 		$('#'+modalBtn).fadeIn(350);
    $('#'+modalBtn).find('.modalbox').slideDown(300);
 	});

  $('body').on('click', '.modalbox .dismiss', function(){
 		$('.modal-wrap').fadeOut(200);
    $('.modal-wrap .modalbox').slideUp(200);
 	});

  /*ADDING ERROR CLASS TO FORM-ADDONS ON INPUT-GROUP*/
  if($('.input-group input[type="text"]').hasClass('error')){
    $( '.input-group input.error' ).prev( ".form-addons" ).addClass('error');
  }
});