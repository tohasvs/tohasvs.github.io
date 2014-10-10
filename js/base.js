function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$(document).ready(function(){
	$("#pointer").click(function (){	
		ga('send', 'event', 'btn_arrow', 'click');
	   	$('html, body').animate({
	    	scrollTop: $("#page2").offset().top
	     	}, 1000);
  	});

	$("#btn_send").click(function(){
      	var email = $("#email").val();
       	if (!validateEmail(email)) {
       	    $("#email").css("color", "red");
           	ga('send', 'event', 'btn_send', 'click', 'failure email');
       	} else {
       	    $("#email").val("");
       	    alert("Ваш e-mail учтен.");
           	ga('send', 'event', 'btn_send', 'click', 'success email');
           	ga('send', 'event', 'db_email', email);
       	}
   	});

    $( "#email" ).keyup(function(){
        $("#email").css("color", "black");
    });
	
	$("#btn_try").click(function() {
		ga('send', 'event', 'btn_try', 'click');

		$("#btn_try").css("display", "none");
		$("#page3").css("display", "block");
		$('html, body').animate({
	          	scrollTop: $("#page3").offset().top
	       	}, 1000);
	});
	$(".pointer_container").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		 $(this).removeClass("animated")  
	});

	$(".pointer_container").hover(function(){
  		$(this).addClass("animated");        
	});
});
