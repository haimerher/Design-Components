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

});