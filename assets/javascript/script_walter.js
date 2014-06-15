$( document ).ready(function(){
  // cost for wc and per item
  var total_wc_cost = 14216790000;
  var per_bus = 100000000;
  var per_nurse = 1000000;

  $('#button_bus').click(function(){
    dublicateItems(per_bus, 'first_bus');

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#group_nurse').show('slow');
  });

  $('#button_nurse').click(function(){
    for (i = 0; i < 100; i++) {
      $("#first_nurse").clone().insertAfter('#first_nurse');
    }
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#group_last').show('slow');
  });

  $('#button_user_input').click(function(){
    var val = $( "#usersvalue" ).val();
    if (val === "" || val < 1000) {
      alert("please enter a number greater than 1000");
    } else {
      for (i = 0; i < val; i++) {
        $("#first_nurse").clone().insertAfter('#first_nurse');
      }
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $('#group_last').show('slow');
    }
  });

  $('#scroll_top_button').click(function(){
    $( "html, body" ).scrollTop(0);
  });


  function dublicateItems (item_cost, itemId) {
    var itters = Math.ceil( total_wc_cost / item_cost );
    for (i = 0; i < itters; i++) {
      $('#' + itemId).clone().insertAfter('#' + itemId);
    }
  }
});
