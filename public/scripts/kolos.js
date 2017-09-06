$('#slider-thumbs2 a').click(function () {
    $('#slider-thumbs2').fadeOut(500, function () {
        $("#carousel-bounding-box2").fadeIn(400).css("display", "inline");
    });
});

jQuery(document).ready(function ($) {
    $('#myCarousel1').carousel({
        interval: false
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
$(document).ready(function () {
    $("#myCarousel1 img").click(function () {
        var currentIndex = $('div.active').index();
        $("#myCarousel1").carousel(++currentIndex);
    });
});

// Function for responisve left and right arrow 
$(document).ready(function () {
    var album = $('#kolos').width();
    var aaa = $('.main-page-photo').width();
    var finale = (album - aaa) / 2;
    $('.kolos-cc').css('width', finale);
    $('#myCarousel1').on('slid.bs.carousel', function () {
        var album = $('#kolos').width();
        var slideFrom = $(this).find('.active').index();
        var widthOfPhoto = $('.item:eq(' + slideFrom + ') img').width();
        var final = (album - widthOfPhoto) / 2;
        $('.kolos-cc').css('width', final);
    })
});


$(document).ready(responsiveImage);
$(window).resize(responsiveImage);
function responsiveImage() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var marginForSeeAll = marginInPercent * 2;
    var x1 = window.innerHeight - (marginInPercent * 2);
    var x2 = (x1 * 100) / 66.7;
    $('.main-page-photo').css('width', x2);
};

$(document).keydown(function (e) {
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


$("#myCarousel1").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $("#myCarousel1").carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -5) {
            $("#myCarousel1").carousel('prev');
        }
    });
    $("#myCarousel1").on("touchend", function () {
        $(this).off("touchmove");
    });
});

$(document).ready(function () {
    $("#carousel-bounding-box2").fadeOut(1);
    $('#loader-wrapper1').delay(5000).fadeOut(500, function () {
        $("#carousel-bounding-box2").fadeIn(600);
    });
}); 