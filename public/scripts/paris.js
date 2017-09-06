$('#slider-thumbs4 a').click(function () {
    $('#slider-thumbs4').fadeOut(500, function () {
        $("#carousel-bounding-box4").fadeIn(400).css("display", "inline");
    }); 
});

jQuery(document).ready(function ($) {
    $('#myCarousel3').carousel({
        interval: false
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
$(document).ready(function(){
    $("#myCarousel3 img").click(function() {
        var currentIndex = $('div.active').index();
        $("#myCarousel3").carousel(++currentIndex);
      });
}); 


// Function for just Paris photo album for responsive left and right arrows 
$(document).ready(function(){
    var album1 = $('#paris').width();
    var aaa1 = $('.main-page-photo-height').width();
    var finale1 = (album1 - aaa1) / 2;
    $('.paris-cc').css('width', finale1);
    $('#myCarousel3').on('slid.bs.carousel', function (e) {
        var album1 = $('#paris').width();
        var slideFrom1 = $(this).find('.active').index();
        var widthOfPhoto1 = $('.item:eq(' + slideFrom1 + ') img').width();
        var final1 = (album1 - widthOfPhoto1) / 2;
        $('.paris-cc').css('width', final1);
    });
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
    if ($(window).width() <= 1025) {
        $('.main-page-photo-height').css('width','450px');
    }
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