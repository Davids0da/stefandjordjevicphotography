$('#slider-thumbs4 a').click(function () {
    $('#slider-thumbs4').fadeOut(500, function () {
        $("#carousel-bounding-box4").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel3').carousel({
        interval: 10000000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel3').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});

// Function for just Paris photo album for responsive left and right arrows 
    var album = $('#paris').width();
    var aaa = $('.main-page-photo-height').width();
    var finale = ( album - aaa ) / 2;
    $('.carousel-control').css('width', finale);
    $('#myCarousel3').on('slid.bs.carousel', function () {
        var album = $('#paris').width();
        var slideFrom = $(this).find('.active').index();
        var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
        var final = ( album - widthOfPhoto ) / 2;
        $('.carousel-control').css('width', final);
    });    


