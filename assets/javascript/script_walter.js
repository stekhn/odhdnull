$( document ).ready(function(){
	 $('#button_bus').click(function(){
	    for (i = 0; i < 1000; i++) {
	        //var $new = $("#first").clone().appendTo("#data").hide();
	        //$new.show();
	        $("#first_bus").clone().insertAfter('#first_bus');
	    }
	    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	   	$('group_nurse').show():
	});

	 $('#button_nurse').click(function(){
	    for (i = 0; i < 1000; i++) {
	        //var $new = $("#first").clone().appendTo("#data").hide();
	        //$new.show();
	        $("#first").clone().insertAfter('#first');
	    }
	    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	    $('group_nurse').show():
	});

});
