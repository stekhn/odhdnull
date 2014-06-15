$( document ).ready(function(){
	
	/**
	 * Counter
	 */

	var options = {
	  useEasing : true, 
	  useGrouping : true, 
	  separator : '.', 
	  decimal : '.' 
	};

	var demo = new countUp("count", 0, 10800000000, 0, 2.5, options);
	demo.start();

	/**
	 * Button Handle
	 */

	$('#button').click(function(){
	    for (i = 0; i < 1000; i++) {
	        //var $new = $("#first").clone().appendTo("#data").hide();
	        //$new.show();
	        $("#first").clone().insertAfter('#first');
	    }
	    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});
});

