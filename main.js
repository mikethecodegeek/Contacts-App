/**
 * Created by Admin on 4/14/16.
 */
$(document).ready(init);

function init() {
    $('#myform').css('background-color','red');
    $("#addContact").click(function() {
        $('form').css('display','block');
    });

    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 980) {
            $("img").removeClass("img-circle");
        }
        if (viewportWidth > 980) {
            $("img").addClass("img-circle");
        }
    });
  
}