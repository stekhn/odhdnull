 $('#button').click(function(){
    for (i = 0; i < 1000; i++) {
        //var $new = $("#first").clone().appendTo("#data").hide();
        //$new.show();
        $("#first").clone().insertAfter('#first');
    }
    $("body").animate({ scrollTop: $(document).height() }, 1000);
});

