$('#slider-thumbs1 a').click(function () {
    $('#slider-thumbs1').fadeOut(500, function () {
        $("#carousel-bounding-box1").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel').carousel({
        interval: false
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

// Carousel slide next with click on image 
var number = 0;
$(document).ready(function () {
    $("#myCarousel img").click(function () {
        $("#myCarousel").carousel(++number);
    });
});


$(document).ready(function () {
    var album = $('#bor').width();
    var aaa = $('.main-page-photo').width();
    var finale = (album - aaa) / 2;
    $('.bor-cc').css('width', finale);
    $('#myCarousel').on('slid.bs.carousel', function () {
        var album = $('#bor').width();
        var slideFrom = $(this).find('.active').index();
        var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
        var final = (album - widthOfPhoto) / 2;
        $('.bor-cc').css('width', final);
    })
});


$(document).ready(responsiveImage1);
$(window).resize(responsiveImage1);
function responsiveImage1() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var marginForSeeAll = marginInPercent * 2;
    var x1 = window.innerHeight - (marginInPercent * 2);
    var x2 = (x1 * 100) / 66.7;
    $('.main-page-photo').css('width', x2);
};

$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control.left").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control.right").click();
       return false;
    }
});