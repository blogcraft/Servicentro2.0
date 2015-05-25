$(document).ready(function() {
	$(".letra").hide();
	$('.nombre').click(function(event){
		event.preventDefault();
		$(this).siblings().find('.letra:visible').siblings().find( "i" ).toggleClass("fa-minus-square fa-plus-square" );
		$(this).siblings().find('.letra').slideUp('slow');
		$( 'i', this).toggleClass("fa-minus-square fa-plus-square" );
		$('.letra', this).toggle('slow');
	});
});