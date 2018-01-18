$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 ); //duration
	});

	$('#button-5').click(function() {
		$(this).animate({
			opacity: 0.4,
			fontSize: '24px',
		}, 500 );
	});

	$("#button-6").click(function(){
		$(this).animate({
				backgroundColor: "#fafafa"
		}, 1000 );
	});

});
