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

    $('#click-on-name').click(function () {
        $('.sub-menu-video').slideUp("normal");
        $('.sub-menu-photo').slideUp("normal");
    });
});

// Function for navigation bar to navigate to certain page
var array = [];
array.push('#mains')
$('#name a , .sub-menu-photo a , .sub-menu-video a , #biography a').click(function (e) {
    e.preventDefault(e);
    let to = $(this).attr('href');
    array.push(to);
    var penultimate = array[array.length - 2];
    $(penultimate).fadeOut(500, function () {
        $(to).fadeIn(700).css("display", "inline-block");
        film = $("#film");
        film.html(film.html());
        music = $("#music");
        music.html(music.html());
        commercial = $("#commercial");
        commercial.html(commercial.html());
    });
});


// Function for responsive top and bottom margin
$(document).ready(larg);
$(window).resize(larg);
function larg() {
    var klaus = (window.innerHeight - 667) / 2;
    $('.container-margins').css('margin-top', klaus);
    $('#rights').css('bottom', klaus);
    $('.soc-icon1').css('bottom', klaus + 10);
    $('.soc-icon2').css('bottom', klaus + 10);
};


// Function for focused links to be none pointer events
var array1 = [];
$('#name a , .sub-menu-photo a , .sub-menu-video a , #biography a').click(function (e) {
    let toe = $(this).attr('id');
    $("#" + toe).css("pointer-events", "none");
    $("#" + toe).css("color", "black");
    array1.push(toe);
    var pipiliti = array1[array1.length - 2];
    $('#' + pipiliti).css("pointer-events", "auto");
    $('#' + pipiliti).css("color", "grey");
});

// Carousel functions
jQuery(document).ready(function ($) {
    $('#myCarousel').carousel({
        interval: 100000
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
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});
jQuery(document).ready(function ($) {
    $('#myCarousel1').carousel({
        interval: 100000
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
    // When the carousel slides, auto update the text
    $('#myCarousel1').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});
jQuery(document).ready(function ($) {
    $('#myCarousel2').carousel({
        interval: 100000
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
    // When the carousel slides, auto update the text
    $('#myCarousel2').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});
jQuery(document).ready(function ($) {
    $('#myCarousel3').carousel({
        interval: 100000
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
    // When the carousel slides, auto update the text
    $('#myCarousel3').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});

// Slider
// jQuery(document).ready(function ($) {
//     var dragging = false,
//         scrolling = false,
//         resizing = false;
//     var imageComparisonContainers = $('.cd-image-container');
//     // checkPosition(imageComparisonContainers);
//     imageComparisonContainers.each(function () {
//         var actual = $(this);
//         actual.addClass('is-visible')
//         drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//     });
// });


// Fuctions for see-all and navigation in album
$('.sub-menu-photo a').click(function () {
    $("#see-all").fadeIn(400);
    $("#see-all-text").fadeIn(400);
});
$('#name a , .sub-menu-video a , #biography a').click(function (e) {
    $("#see-all").fadeOut(400);
    $("#see-all-text").fadeOut(400);
});

$('#slider-thumbs1 a').click(function () {
    $('#slider-thumbs1').fadeOut(400, function () {
        $("#carousel-bounding-box1").fadeIn(400).css("display", "inline");
    });
}); $('#slider-thumbs2 a').click(function () {
    $('#slider-thumbs2').fadeOut(400, function () {
        $("#carousel-bounding-box2").fadeIn(400).css("display", "inline");
    });
}); $('#slider-thumbs3 a').click(function () {
    $('#slider-thumbs3').fadeOut(400, function () {
        $("#carousel-bounding-box3").fadeIn(400).css("display", "inline");
    });
});
$('#slider-thumbs4 a').click(function () {
    $('#slider-thumbs4').fadeOut(400, function () {
        $("#carousel-bounding-box4").fadeIn(400).css("display", "inline");
    });
});


// Function for see-all
var array2 = [];
$('.sub-menu-photo a').click(function (e) {
    let toes = $(this).attr('id');
    array2.push(toes);
    $('#see-all-box').click(function () {
        if (toes == "bo") {
            $('#carousel-bounding-box1').fadeOut(500, function () {
                $("#slider-thumbs1").fadeIn(500).css("display", "inline");
            });
        }
        else if (toes == "ko") {
            $('#carousel-bounding-box2').fadeOut(500, function () {
                $("#slider-thumbs2").fadeIn(500).css("display", "inline");
            });
        }
        else if (toes == "ci") {
            $('#carousel-bounding-box3').fadeOut(500, function () {
                $("#slider-thumbs3").fadeIn(500).css("display", "inline");
            });
        }
        else if (toes == "ju") {
            $('#carousel-bounding-box4').fadeOut(500, function () {
                $("#slider-thumbs4").fadeIn(500).css("display", "inline");
            });
        }
    });
});

// Function for slideshow
$("#slideshow > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow > div:first').fadeOut(1000).next().delay(1000).fadeIn(2000).end().appendTo('#slideshow');
}, 5000);

