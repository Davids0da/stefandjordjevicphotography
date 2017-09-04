$('#slider-thumbs2 a').click(function () {
    $('#slider-thumbs2').fadeOut(500, function () {
        $("#carousel-bounding-box2").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel1').carousel({
        interval: 10000000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel1').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});

// Carousel slide next with click on image 
var number = 0;
$(document).ready(function(){
    $("#myCarousel1 img").click(function() {
        $("#myCarousel1").carousel(++number);
      });
}); 

// Function for responisve left and right arrow 
$(document).ready(function () {
    var album = $('#kolos').width();
    var aaa = $('.main-page-photo').width();
    var finale = (album - aaa) / 2;
    $('.carousel-control').css('width', finale);
    $('#myCarousel1').on('slid.bs.carousel', function () {
        var album = $('#paris').width();
        var slideFrom = $(this).find('.active').index();
        var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
        var final = (album - widthOfPhoto) / 2;
        $('.carousel-control').css('width', final);
    })
});


$(document).ready(responsiveImage);
$(window).resize(responsiveImage);
function responsiveImage() {
    var marginInPercent = ((window.innerHeight * 18) / 100 ) / 2; 
    var marginForSeeAll = marginInPercent * 2;
    var x1 = window.innerHeight - ( marginInPercent * 2 );
    var x2 = ( x1 * 100 ) / 66.7;
    $('.main-page-photo').css('width',x2);
};