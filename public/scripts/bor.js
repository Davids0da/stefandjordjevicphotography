$('#slider-thumbs1 a').click(function () {
    $('#slider-thumbs1').fadeOut(500, function () {
        $("#carousel-bounding-box1").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel').carousel({
        interval: 10000000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});