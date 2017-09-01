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

// Carousel slide next with click on image 
var number = 0;
$(document).ready(function(){
    $("#myCarousel2 img").click(function() {
        $("#myCarousel2").carousel(++number);
      });
}); 



$(document).ready(function () {
    var album = $('#juveline').width();
    var aaa = $('.main-page-photo').width();
    var finale = ( album - aaa ) / 2;
    $('.carousel-control').css('width', finale);
    $('#myCarousel2').on('slid.bs.carousel', function () {
        var album = $('#paris').width();
        var slideFrom = $(this).find('.active').index();
        var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
        var final = ( album - widthOfPhoto ) / 2;
        $('.carousel-control').css('width', final);
    })    
});
