function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$(document).ready(function(){
	$("#pointer").click(function (){	
		ga('send', 'click', 'button', 'pointer');
	   	$('html, body').animate({
	    	scrollTop: $("#page2").offset().top
	     	}, 1000);
  	});

	$("#btn_send").click(function(){
      	var email = $("#email").val();
       	if (!validateEmail(email)) {
       	    $("#email").css("color", "red");
           	ga('send', 'error', 'email', email);
       	} else {
       	    $("#email").val("");
       	    alert("Ваш e-mail учтен.");
           	ga('send', 'ok', "email", email);
       	}
   	});

    $( "#email" ).keyup(function(){
        $("#email").css("color", "black");
    });

 	$( "#email" ).focus(function() {
		ga('send', 'focus', 'edittext', 'send');
	});
	
	$("#btn_try").click(function() {
		ga('send', 'pageview', 'button', 'try');
		$("#btn_try").css("display", "none");
		$("#page3").css("display", "block");
		$('html, body').animate({
	          	scrollTop: $("#page3").offset().top
	       	}, 1000);
	});
});