$( document ).ready(function(){
   $('#button_bus').click(function(){
      for (i = 0; i < 50; i++) {
          //var $new = $("#first").clone().appendTo("#data").hide();
          //$new.show();
          $("#first_bus").clone().insertAfter('#first_bus');
      }
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $('#group_nurse').show('slow');
  });

   $('#button_nurse').click(function(){
      for (i = 0; i < 100; i++) {
          //var $new = $("#first").clone().appendTo("#data").hide();
          //$new.show();
          $("#first_nurse").clone().insertAfter('#first_nurse');
      }
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $('#group_last').show('slow');
  });


   $('#button_user_input').click(function(){
    var val = $( "#usersvalue" ).val();
    if (val === "" || val<1000) {
          alert("please enter a number greater than 1000");
    } else {
      for (i = 0; i < val; i++) {
        var $new = $("#first").clone().appendTo("#data").hide();
        $new.show();
        $("#first_nurse").clone().insertAfter('#first_nurse');
      }
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $('#group_last').show('slow');


    }
  });

  $('#scroll_top_button').click(function(){
    $( "html, body" ).scrollTop(0);
  });
});
