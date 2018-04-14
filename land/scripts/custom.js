$(document).ready(function(){
	
	"use strict";	
	



//------------------------------------------------------------------------
//						FULL HEIGHT SECTION SCRIPT
//------------------------------------------------------------------------
	$("#content").css("min-height",$( window ).height());
	$( window ).resize(function() {
		$("#content").css("min-height",$( window ).height());
	})
		
	 
	 
//------------------------------------------------------------------------
//						INTRO SUPERSLIDER SETTINGS
//------------------------------------------------------------------------
	$("#slides").superslides({
		play: 15000,
		animation: "slide",
		inherit_width_from:"#intro"
	});

		
	
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   




//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------	
	
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
		    contactphone: $('#contact_phone').val(),
					contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
					
					//Use button to display messages
                    //$('#contact_submit').button('complete');
					
					//Redirect to other site
                    //window.location.href = "http://yoursite.com";
					
					//Use modal popups to display messages
					$('#modalContact .modal-title').html('<i class="icon-hotairballoon"></i>Well done!<b>Your message has been successfully sent!</b>');
					$('#modalContact').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
					
					//Use button to display messages
                    //$('#contact_submit').button('error');
					
					//Redirect to other site
                    //window.location.href = "http://yoursite.com";
					
					//Use modal popups to display messages
					$('#modalContact .modal-title').html('<i class="icon-caution"></i>Oh no!<br>Something went wrong!');
					$('#modalContact').modal('show');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    }); 
	  
	


//------------------------------------------------------------------------------------
//						REGISTRATION FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#register_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
			username: "required",
			password: {
     			required: true,
      			minlength: 4
    		}
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            },
			username: "What's your username?",
			password: {
      			required: "What's your password?",
      			minlength: jQuery.format("At least {0} characters")
    		}
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });
	
});