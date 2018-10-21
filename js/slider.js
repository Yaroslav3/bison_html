let text_slide_cur = 1;
let next_slide = document.querySelector(".next");
let prev_slide = document.querySelector(".prev");

next_slide.addEventListener("click", function(){
	hidetext_slide();
});

function showtext_slide(){
	if (text_slide_cur >= 2) {
		text_slide_cur = 0;
	}
	text_slide_cur++;
    $('#slide'+(text_slide_cur)).css({opacity: 0}).animate({opacity: 1}, 200);
    $('.banner-page-squere'+(text_slide_cur)).css({opacity: 0.5}).animate({opacity: 1}, 200);
}
function hidetext_slide(){
    $('.banner-page-squere'+(text_slide_cur)).css({opacity: 1}).animate({opacity: 0.5}, 200);
    $('#slide'+(text_slide_cur)).css({opacity: 1}).animate({opacity: 0}, 200,function(){showtext_slide();});
}

prev_slide.addEventListener("click", function() {
	$('.banner-page-squere'+(text_slide_cur)).css({opacity: 1}).animate({opacity: 0.5}, 200);
	$('#slide'+(text_slide_cur)).css({opacity: 1}).animate({opacity: 0}, 200, function(){prev_show_slide();});
	text_slide_cur--;
});
function prev_show_slide() {
	if (text_slide_cur <= 0) {
		text_slide_cur = 2;
	}
	$('#slide'+(text_slide_cur)).css({opacity: 0}).animate({opacity: 1}, 200);
	$('.banner-page-squere'+(text_slide_cur)).css({opacity: 0.5}).animate({opacity: 1}, 200);
}
