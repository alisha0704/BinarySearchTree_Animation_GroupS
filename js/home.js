$( document ).ready(function() {	
	$('a.thumbnail').hover(function() {
		$(this).children('img.static').hide();
	}, function() {
		$(this).children('img.static').show();
	}); 
});