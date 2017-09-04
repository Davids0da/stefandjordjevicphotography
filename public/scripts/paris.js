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

// Carousel slide next with click on image 
var number = 0;
$(document).ready(function () {
    $("#myCarousel3 img").click(function () {
        $("#myCarousel3").carousel(++number);
    });
});


// Function for just Paris photo album for responsive left and right arrows 
var album = $('#paris').width();
var aaa = $('.main-page-photo-height').width();
var finale = (album - aaa) / 2;
$('.carousel-control').css('width', finale);
$('#myCarousel3').on('slid.bs.carousel', function (e) {
    e.preventDefault(e);
    var album = $('#paris').width();
    var slideFrom = $(this).find('.active').index();
    var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
    var final = (album - widthOfPhoto) / 2;
    $('.carousel-control').css('width', final);
});


//Function for responsive Image
$(document).ready(responsiveImage1);
$(window).resize(responsiveImage1);
function responsiveImage1() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var marginForSeeAll = marginInPercent * 2;
    var x1 = window.innerHeight - (marginInPercent * 2);
    var x2 = (x1 * 100) / 66.7;
    var y1 = (x1 * 66.7) / 100;
    $('.main-page-photo').css('width', x2);
    $('.main-page-photo-height').css('width', y1);
};

//Function for overflow
$(document).ready(functionForOverflow1);
$(window).resize(functionForOverflow1);
function functionForOverflow1() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var heightForOverflowDivs = window.innerHeight - marginInPercent;
    $('#slider-thumbs4').css('height', heightForOverflowDivs);
    $('#slider-thumbs4').css('overflow', 'scroll');
};