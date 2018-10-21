// FEEDER FEMALES

function Extracted(data){
		let photo = JSON.stringify(data);
		let a = photo.replace(/[{()"}]/g, '');
		let photoindexNumber = a.lastIndexOf("/") - 10;
		return photoTest = a.substring(photoindexNumber, photo.length);
};

function show_foto_replacement_bulls_one()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) { 
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-one') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200);

                    $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 0) {
                                   $('#modal-img' + i).attr('src', Extracted(data));     
                                        }
                                    });
                                }
                            });         
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-one')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
     }
} 

function show_foto_replacement_bulls_two()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) {
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-two') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200); 

                        $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 1) {
                                    $('#modal-img' + i).attr('src', Extracted(data));   
                                        }
                                    });
                                }
                            });             
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-two')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
    }
}

 function show_foto_replacement_bulls_three()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) {
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-three') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200); 

                        $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 2) {
                                    $('#modal-img' + i).attr('src', Extracted(data));  
                                        }
                                    });
                                }
                            });             
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-three')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
    }
} 

 function show_foto_replacement_bulls_four()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) {
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-four') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200);  

                        $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 3) {
                                   $('#modal-img' + i).attr('src', Extracted(data));    
                                        }
                                    });
                                }
                            });            
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-four')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
    }
} 

 function show_foto_replacement_bulls_five()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) {
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-five') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200);

                        $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 4) {
                                    $('#modal-img' + i).attr('src', Extracted(data));    
                                        }
                                    });
                                }
                            });              
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-five')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
    }
}  

function show_foto_replacement_bulls_six()
{
    let widthOfBrows = window.innerWidth;
    if (widthOfBrows >= 981) {
        $('#overlay').fadeIn(400, 
                function(){ 
                 
                    $('#modal-photo-six') 
                        .css('display', 'block') 
                        .animate({opacity: 1}, 200); 

                        $.ajax({
                        type: 'GET',
                        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
                        success: function (orders) {
                            $.each(orders, function (i, data) {
                                if (i === 5) {
                                   $('#modal-img' + i).attr('src', Extracted(data));   
                                        }
                                    });
                                }
                            });             
        });
         
         
        $('.photo_close, #overlay').click( function(){
                $('#modal-photo-six')
                .animate({opacity: 0}, 200, 
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                ); 
                 
        });
    }
} 