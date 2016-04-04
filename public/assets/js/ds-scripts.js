$(document).ready(function(){

	//tooltips
	$("body").on('mouseover', '.tooltip', function(){
		var tooltip = $(".tooltip").data("tooltip");
		var tooltipCont = '<span class="tooltip-cont">' + tooltip + '</span>';

		$(tooltipCont).hide().prependTo('.tooltip').fadeIn(80);
	})
	$("body").on('mouseout', '.tooltip', function(){
		$('.tooltip-cont').fadeOut(80, function() {
			$(this).remove();
		});
	})

});