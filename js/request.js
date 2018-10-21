


function show_request()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal-request') 
                    .css('display', 'block') 
                    .animate({opacity: 1}, 200);     
    });
     
     
    $('.request_close, #overlay').click( function(){
            $('#modal-request')
            .animate({opacity: 0}, 200, 
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            ); 
             
    });
} 


