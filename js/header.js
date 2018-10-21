$(function () {
    let location = window.location.href;
    let cur_url = location.split('/').pop();
 
    $('.dws-menu li').each(function () {
        let link = $(this).find('a').attr('href');
 		
        if (cur_url == link)
        {
            $(this).addClass('active-menu');
        }
    });
});