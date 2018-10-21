$(document).ready(function() {
	
	let extracted = function (data) {
    let photo = JSON.stringify(data);
    let a = photo.replace(/[{()"}]/g, '');
    let photoindexNumber = a.lastIndexOf("/") - 10;
    return photoTest = a.substring(photoindexNumber, photo.length);;
	};
	
	$("#saveRCall").click(function(e) {
    e.preventDefault();


    let url = 'http://admin.pristinebison.com/saveRequestCall';
    let phone = $("#phone").val(); 
    let description = $("#description").val();
    let timeCallBack =  $("#timeCallBack").val();

        $.ajax({
            type:'GET',
            data:{phone:phone, description:description, timeCallBack:timeCallBack},
            url:url,
            timeout: 600000,
            success:function(data) {



                if(data.message == "error"){
                $('.messages').append("div").html("fill in all the fields");
                  console.log(data);
                 }

                if(data.message== "success"){
                    let phone = document.getElementById("phone");
                    let description = document.getElementById("description");
                    let timeCallBack = document.getElementById("timeCallBack");
                    let saveRCall = document.getElementById("saveRCall");
                    let ok = document.getElementById("ok");
                    phone.remove();
                    description.remove();
                    timeCallBack.remove();
                    saveRCall.remove();
                    ok.innerHTML = '<img class="ok" src="img/ok2.jpg"/>';
                    saveRCall.remove();
                    console.log(data);

                }
			}
        });
    });
	
	
    $.ajax({
        type: 'GET',
        url: 'http://admin.pristinebison.com/replacement_bulls_photo',
        success: function (orders) {
            $.each(orders, function (i, data) {
                console.log(data);
                $('#myImg' + i).attr('src', extracted(data));
            });
        }
    });

    $.ajax({
        type: 'GET',
        url: 'http://www.admin.exampletest.info/replacement_bulls_text',
        success: function (orders) {
            $.each(orders, function (i, data) {
                $('#text' + i).append(data.text);
            });
        }
    });

    $.ajax({
        type: 'GET',
        url: 'http://admin.pristinebison.com/contact',
        success: function (orders) {
            $.each(orders, function (i, data) {
                $('#contact-name' + i).append(data.name + ' ' ).append(data.surname);
                $('#contact-phone' + i).append(data.phone);
                $('#contact-email' + i).append(data.email);
                $('#contact-address' + i).append(data.address);
            });
        }
    });

   const options = {
        "theme": "snow",
        "modules": {
            "toolbar": false
        },
        readOnly: true
    };

    getData();


    let editor = new Quill('#editor-replacement-bulls', options);

    function getData() {

        $.ajax({
            url: 'http://admin.pristinebison.com/replacement_bulls_text/editor',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                $.each(data, function (i, value) {
                    data = undefined;
                    console.log(value);
                    editor.root.innerHTML = value.text;
                });
            },
        });
    }


    
//------------------footer---------------------//

 $.ajax({
        type: 'GET',
        url: 'http://admin.pristinebison.com/banner_photo',
        success: function (orders) {
            $.each(orders, function (i, data) {
                $('#banner_photo').css('background-image', 'url(' + extracted(data) + ')');

            });
        }
    });

    $.ajax({
        type: 'GET',
        url: 'http://admin.pristinebison.com/logo_footer',
        success: function (orders) {
            $.each(orders, function (i, data) {
                $('.logo_footer').css('background-image', 'url(' + extracted(data) + ')');
                 $('#mobile-img').attr('src', extracted(data));
            });
        }
    });
});