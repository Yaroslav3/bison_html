function show_video()
{
 
    $('#overlay').fadeIn(400, 
            function(){ 
             
                $('#modal_form') 
                    .css('display', 'block') 
                    .animate({opacity: 1, top: '50%'}, 200); 
                 
                document.getElementById('frame0').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                     
    });
     
     
    $('.modal_close, #overlay').click( function(){
             
            $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200, 
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            ); 
             
            document.getElementById('frame0').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
         
    });
} 