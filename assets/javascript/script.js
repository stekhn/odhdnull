$( document ).ready(function(){
  // cost for wc and per item
  var total_wc_cost = 11500000000;
  var per_bus = 1000000;
  var per_nurse = 10000000;

  
  /**
   * Counter
   */

  var options = {
    useEasing : true,
    useGrouping : true,
    separator : '.',
    decimal : '.'
  };

  var demo = new countUp("count", 0, total_wc_cost, 0, 1.5, options);
  demo.start();

  /**
   * Button Handle
   */


  $('#button_bus').click(function(){
    var units = dublicateItems(per_bus, 'first_bus');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#group_bus_result').text(units);
    $('#group_bus_addition').show('slow');
    $('#group_nurse').show('slow');
  });


  $('#button_nurse').click(function(){
    var units = dublicateItems(per_nurse, 'first_nurse');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('#group_nurse_result').text(units);
    $('#group_nurse_addition').show('slow');
  });


  $('#button_user_input').click(function(){
    var name = $( "#user_item_name" ).val();
    var val = $( "#user_item_value" ).val();

    if (val === "" || val < 1000) {
      alert("please enter a number greater than 1000");
    }
    var itters = Math.ceil( total_wc_cost / val );
    
    $('#result_user_item_name').text(name);
    $('#result_user_item_value').text(itters);
    $('#group_user_addition').show('slow');

  });

  $('#scroll_top_button').click(function(){
    $( "html, body" ).scrollTop(0);
  });


  function dublicateItems(item_cost, itemId) {
    var max_itters = 1000;
    var itters = Math.ceil( total_wc_cost / item_cost );
    if (itters < max_itters) {
      max_itters = itters;
    }
    for (i = 0; i < max_itters; i++) {
      $('#' + itemId).clone().insertAfter('#' + itemId);
    }
    return itters;
  }
});
