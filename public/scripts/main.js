// Function for navigation bar (SlideUp and SlideDown)
$(document).ready(function () {
    $('#photography').click(function () {
        if ($("ul.sub-menu-photo:visible").length != 0) {
            $("ul.sub-menu-photo").slideUp("normal");
        }
        else {
            $('.sub-menu-photo').slideDown("normal");
            $('.sub-menu-photo').css('display', 'block');
            $('.sub-menu-video').slideUp("normal");
        }
    });

    $('#video').click(function () {
        if ($("ul.sub-menu-video:visible").length != 0) {
            $("ul.sub-menu-video").slideUp("normal");
        }
        else {
            $('.sub-menu-photo').slideUp("normal");
            $('.sub-menu-video').slideDown("normal");
            $('.sub-menu-video').css('display', 'block');
        }
    });

    $('#biography').click(function () {
        $('.sub-menu-video').slideUp("normal");
        $('.sub-menu-photo').slideUp("normal");
    });
});


