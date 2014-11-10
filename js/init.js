/**
 * Created by omkar on 08/10/14.
 */
$(document).ready(function() {
    $('.menu-bar').click(function(e) {
        $('.menu').fadeToggle();
    });

    $(document).click(function (e) {
        var container = $(".menu");
        var menubar = $(".menu-bar");

        if (!container.is(e.target) && container.has(e.target).length === 0 && !menubar.is(e.target) && menubar.has(e.target).length === 0 ){

                container.fadeOut();
        }
    });

});



