// Function for responsive top and bottom margin
$(document).ready(larg);
$(window).resize(larg);
function larg() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var marginInPercentMobile = ((window.innerHeight * 18) / 100) / 6;
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
        $('#see-all').css('bottom', marginInPercentMobile + 8);
        $('#see-all-text').css('bottom', marginInPercentMobile);
    }
};


//Load arrows
var img1 = new Image();
var img2 = new Image();
img1.src = "images/back.png";
img2.src = "images/next.png";

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "images/pocetna/01.jpg",
    "images/pocetna/02.jpg",
    
    "images/kolos-min/01.jpg",
    "images/kolos-min/02.jpg",
    "images/kolos-min/03.jpg",
    "images/kolos-min/04.jpg",
    "images/kolos-min/05.jpg",
    "images/kolos-min/06.jpg",
    "images/kolos-min/07.jpg",
    "images/kolos-min/08.jpg",
    "images/kolos-min/10.jpg",
    "images/kolos-min/12.jpg",
    "images/kolos-min/13.jpg",
    "images/kolos-min/14.jpg",
    "images/kolos-min/15.jpg",
    "images/kolos-min/16.jpg",
    "images/kolos-min/18.jpg",
    "images/kolos-min/19.jpg",
    "images/kolos-min/20.jpg",
    "images/kolos-min/22.jpg",
    "images/kolos-min/23.jpg",
    "images/kolos-min/24.jpg",
    "images/kolos-min/25.jpg",
    "images/kolos-min/27.jpg",
    "images/kolos-min/29.jpg",
    "images/kolos-min/30.jpg",

    "images/bor-min/01.jpg",
    "images/bor-min/02.jpg",
    "images/bor-min/03.jpg",
    "images/bor-min/04.jpg",
    "images/bor-min/05.jpg",
    "images/bor-min/06.jpg",
    "images/bor-min/07.jpg",
    "images/bor-min/08.jpg",
    "images/bor-min/09.jpg",
    "images/bor-min/10.jpg",
    "images/bor-min/11.jpg",
    "images/bor-min/12.jpg",
    "images/bor-min/13.jpg",
    "images/bor-min/14.jpg",
    "images/bor-min/15.jpg",
    "images/bor-min/16.jpg",
    "images/bor-min/17.jpg",
    "images/bor-min/18.jpg",
    "images/bor-min/19.jpg",
    "images/bor-min/20.jpg",
    "images/bor-min/21.jpg",
    "images/bor-min/22.jpg",
    "images/bor-min/23.jpg",
    "images/bor-min/24.jpg",
    "images/bor-min/25.jpg",
    "images/bor-min/26.jpg",
    "images/bor-min/27.jpg",
    "images/bor-min/28.jpg",
    "images/bor-min/29.jpg",
    "images/bor-min/30.jpg",

    "images/juveline-min/01.jpg",
    "images/juveline-min/02.jpg",
    "images/juveline-min/03.jpg",
    "images/juveline-min/04.jpg",
    "images/juveline-min/05.jpg",
    "images/juveline-min/06.jpg",
    "images/juveline-min/07.jpg",
    "images/juveline-min/08.jpg",
    "images/juveline-min/09.jpg",
    "images/juveline-min/10.jpg",
    "images/juveline-min/11.jpg",
    "images/juveline-min/12.jpg",
    "images/juveline-min/13.jpg",
    "images/juveline-min/14.jpg",
    "images/juveline-min/15.jpg",
    "images/juveline-min/16.jpg",
    "images/juveline-min/17.jpg",
    "images/juveline-min/18.jpg",
    "images/juveline-min/19.jpg",
    "images/juveline-min/20.jpg",
    "images/juveline-min/21.jpg",
    "images/juveline-min/22.jpg",
    "images/juveline-min/23.jpg",
    "images/juveline-min/24.jpg",
    "images/juveline-min/25.jpg",
    "images/juveline-min/26.jpg",
    "images/juveline-min/27.jpg",
    "images/juveline-min/28.jpg",
    "images/juveline-min/29.jpg",
    "images/juveline-min/30.jpg",

    "images/paris-min/01.jpg",
    "images/paris-min/02.jpg",
    "images/paris-min/03.jpg",
    "images/paris-min/04.jpg",
    "images/paris-min/05.jpg",
    "images/paris-min/06.jpg",
    "images/paris-min/07.jpg",
    "images/paris-min/08.jpg",
    "images/paris-min/09.jpg",
    "images/paris-min/10.jpg",
    "images/paris-min/11.jpg",
    "images/paris-min/12.jpg",
    "images/paris-min/13.jpg",
    "images/paris-min/14.jpg",
    "images/paris-min/15.jpg",
    "images/paris-min/16.jpg",
    "images/paris-min/17.jpg",
    "images/paris-min/18.jpg",
    "images/paris-min/19.jpg",
    "images/paris-min/20.jpg",
    "images/paris-min/21.jpg",
    "images/paris-min/22.jpg",
    "images/paris-min/23.jpg",
    "images/paris-min/24.jpg",
    "images/paris-min/25.jpg",
    "images/paris-min/26.jpg",
    "images/paris-min/27.jpg",
    "images/paris-min/28.jpg",
)

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
$(document).ready(function () {
    $('.sub-menu-photo a').click(function () {
        $("#see-all").fadeIn(400);
        $("#see-all-text").fadeIn(400);
    });
    $('#name a , .sub-menu-video a , #biography a').click(function (e) {
        $("#see-all").fadeOut(400);
        $("#see-all-text").fadeOut(400);
    });
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

$(document).ready(function () {
    var arrayOfValues = [];
    $('.sub-menu-photo a , .sub-menu-video a').click(function (e) {
        let top = $(this).attr('href');
        arrayOfValues.push(top);
        var unloadDiv = arrayOfValues[arrayOfValues.length - 2];
        setTimeout(function(){
            $(unloadDiv).html("");
            }, 1000); 
    });
});

