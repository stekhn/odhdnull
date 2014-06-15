$(function() {
    //Code
 //    function appendTitles() {
	// 	for (var i=1; i<=4; i++) {
 //  			$('#data-viz').append('<img class="busses" src='images/bus.png'>');
 // 		}
	// }


			//var cloneIndex = $(".cloneObj").length;

		// function dublicate(times) {
		// for (i = 0; i < times; i++) {
		//     $("#first").clone().appendTo("body").show('slow');
		//        .attr("id", "clonedInput" +  cloneIndex)
		//        .find("*").each(function() {
		//            var id = this.id || "";
		//            var match = id.match(regex) || [];
		//            if (match.length == 3) {
		//                this.id = match[1] + (cloneIndex);
		//            }
		//        }
		//    cloneIndex++;

		//     }
		// }

		 $('#button').click(function(){
		    for (i = 0; i < 100; i++) {
		        $("#first").clone().append("#page");
		        $("#first").clone().show('slow');
		        }
		 });
});