$('#slider-thumbs3 a').click(function () {
    $('#slider-thumbs3').fadeOut(500, function () {
        $("#carousel-bounding-box3").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel2').carousel({
        interval: 10000000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel2').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});