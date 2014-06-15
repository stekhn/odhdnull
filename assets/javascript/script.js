$( document ).ready(function(){
  /**
   * Cost for WorldCup and per Item
   */

  var total_wc_cost = 11500000000;
  var per_nurse = 15852;
  var per_administration_assistant = 8400;
  var per_busdriver = 6636;
  var per_social = 576;
  var per_child = 624;


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


  $('#button_nurse').click(function(){
    var units = dublicateItems(per_nurse, 'first_nurse');
    $("html, body").animate({ scrollTop: $(document).height()}, 1000);
    $('#group_nurse_result').text(units);
    $('#group_nurse_addition').show('slow');
    $('#group_administration_assistant').show('slow');
  });


  $('#button_administration_assistant').click(function(){
    var units = dublicateItems(per_administration_assistant, 'first_administration_assistant');
    $("html, body").animate({ scrollTop: $(document).height()}, 1000);
    $('#group_administration_assistant_result').text(units);
    $('#group_administration_assistant_addition').show('slow');
    $('#group_bus').show('slow');
  });


  $('#button_bus').click(function(){
    var units = dublicateItems(per_busdriver, 'first_bus');
    $("html, body").animate({ scrollTop: $(document).height()}, 1000);
    $('#group_bus_result').text(units);
    $('#group_bus_addition').show('slow');
    $('#group_social').show('slow');
  });


  $('#button_social').click(function(){
    var units = dublicateItems(per_social, 'first_social');
    $("html, body").animate({ scrollTop: $(document).height()}, 1000);
    $('#group_social_result').text(units);
    $('#group_social_addition').show('slow');
    $('#group_child').show('slow');
  });


  $('#button_child').click(function(){
    var units = dublicateItems(per_child, 'first_child');
    $("html, body").animate({ scrollTop: $(document).height()}, 1000);
    $('#group_child_result').text(units);
    $('#group_child_addition').show('slow');
    $('#group_user_input').show('slow');
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
    $('#group_last').show('slow');

  });


  $('#scroll_top_button').click(function(){
    $( "html, body" ).scrollTop(0);
  });

});
