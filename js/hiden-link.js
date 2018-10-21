$('.hidden-link').replaceWith(function(){
	return'<a href="'+$(this).data('link')+'">'+ '<i class="far fa-envelope"></i>' +$(this).text()+'</a>';
});