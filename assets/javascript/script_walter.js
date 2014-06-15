$( document ).ready(function(){
	 $('#button').click(function(){
	    for (i = 0; i < 1000; i++) {
	        //var $new = $("#first").clone().appendTo("#data").hide();
	        //$new.show();
	        $("#first").clone().insertAfter('#first');
	    }
	    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});
});

