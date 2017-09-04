// Function for responsive top and bottom margin
$(document).ready(larg);
$(window).resize(larg);
function larg() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var marginInPercentMobile = ((window.innerHeight * 18) / 100) / 4;
    var marginForSeeAll = marginInPercent * 2;
    var x1 = window.innerHeight - (marginInPercent * 2);
    var x2 = (x1 * 100) / 66.7;
    $('.main-page-photo').css('width', x2);
    $('.container-margins').css('margin-top', marginInPercent);
    $('#rights').css('bottom', marginInPercent);
    $('.soc-icon1').css('bottom', marginInPercent + 10);
    $('.soc-icon2').css('bottom', marginInPercent + 10);
    $('#see-all').css('bottom', marginForSeeAll + 10);
    $('#see-all-text').css('bottom', marginForSeeAll);
    if ($(window).width() <= 1025) {
        $('.container-margins').css('margin-top', marginInPercentMobile);
        $('#rights').css('bottom', marginInPercentMobile);
        $('.soc-icon1').css('bottom', marginInPercentMobile + 10);
        $('.soc-icon2').css('bottom', marginInPercentMobile + 10);
        $('#see-all').css('bottom', marginForSeeAll / 2 + 10);
        $('#see-all-text').css('bottom', marginForSeeAll / 2);
    }
};


//Load arrows
var img1 = new Image();
var img2 = new Image();
img1.src = "images/back.png";
img2.src = "images/next.png";

$(document).ready(function () {
    $("#img1").attr("src", "images/back.png");
    $("#img2").attr("src", "images/next.png");
});

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
$(document).ready(function () {
    $('#name a , .sub-menu-photo a , .sub-menu-video a , #biography a').click(function (e) {
        e.preventDefault(e);
        let to = $(this).attr('href');
        array.push(to);
        var penultimate = array[array.length - 2];
        $(penultimate).fadeOut(500, function () {
            $(to).fadeIn(500).css("display", "inline-block");
            film = $("#film");
            film.html(film.html());
            music = $("#music");
            music.html(music.html());
            commercial = $("#commercial");
            commercial.html(commercial.html());
        });
    });
});


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


// Fuctions for see-all and navigation in album
$('.sub-menu-photo a').click(function () {
    $("#see-all").fadeIn(400);
    $("#see-all-text").fadeIn(400);
});
$('#name a , .sub-menu-video a , #biography a').click(function (e) {
    $("#see-all").fadeOut(400);
    $("#see-all-text").fadeOut(400);
});

// Function for see-all
$('.sub-menu-photo a').click(function (e) {
    let toes = $(this).attr('id');
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
setInterval(function () {
    $('#slideshow > div:first').fadeOut(1000).next().delay(1000).fadeIn(2000).end().appendTo('#slideshow');
}, 5000);



// Ayax for html albums
$(document).ready(function () {
    $("#ko").on("click", function () {
        $("#kolos").load("views/kolos.html");
    });
});
$(document).ready(function () {
    $("#bo").on("click", function () {
        $("#bor").load("views/bor.html");
    });
});
$(document).ready(function () {
    $("#ci").on("click", function () {
        $("#juveline").load("views/juveline.html");
    });
});
$(document).ready(function () {
    $("#ju").on("click", function () {
        $("#paris").load("views/paris.html");
    });
});
$(document).ready(function () {
    $("#mu").on("click", function () {
        $("#music").load("views/music.html");
    });
});
$(document).ready(function () {
    $("#fo").on("click", function () {
        $("#commercial").load("views/commercial.html");
    });
});
$(document).ready(function () {
    $("#fi").on("click", function () {
        $("#film").load("views/film.html");
    });
});


