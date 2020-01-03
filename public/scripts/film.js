//FIRST 
$(document).ready(larges2);
$(window).resize(larges2);
function larges2() {
    var videoWidth = $('#film').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.first-left').css('left', videoLeftandRightSize);
    $('.first-photo-left').css('left', videoLeftandRightSize);
    $('.first-right').css('right', videoLeftandRightSize);
    $('.first-photo-right').css('right', videoLeftandRightSize);
    $('.first-text-left').css('left', videoLeftandRightSize);
    $('.first-text-right').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.first-left').css('left', videoLeftandRightSize);
        $('.first-photo-left').css('left', videoLeftandRightSize);
        $('.first-right').css('right', videoLeftandRightSize);
        $('.first-photo-right').css('right', videoLeftandRightSize);
        $('.first-text-left').css('left', videoLeftandRightSize);
        $('.first-text-right').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.first-right').css('left', videoLeftandRightSize);
        $('.first-photo-right').css('left', videoLeftandRightSize);
        $('.first-right , .first-photo-right').css('top', 1255);
        $('.first-text-right').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#first-left , .first-photo-left , #first-right , .first-photo-right').width(valueForVideoSize);
        $('#first-left , .first-photo-left , #first-right , .first-photo-right').height(500);
    }
};

$('.first-photo-left').click(function () {
    $('.first-photo-left').fadeOut(200);
});
$('.first-photo-right').click(function () {
    $('.first-photo-right').fadeOut(200);
});



//SECOND 
$(document).ready(largeses1);
$(window).resize(largeses1);
function largeses1() {
    var videoWidth = $('#film').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.second-left').css('left', videoLeftandRightSize);
    $('.second-photo-left').css('left', videoLeftandRightSize);
    $('.second-right').css('right', videoLeftandRightSize);
    $('.second-photo-right').css('right', videoLeftandRightSize);
    $('.second-text-left').css('left', videoLeftandRightSize);
    $('.second-text-right').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.second-left').css('left', videoLeftandRightSize);
        $('.second-photo-left').css('left', videoLeftandRightSize);
        $('.second-right').css('right', videoLeftandRightSize);
        $('.second-photo-right').css('right', videoLeftandRightSize);
        $('.second-text-left').css('left', videoLeftandRightSize);
        $('.second-text-right').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.second-right').css('left', videoLeftandRightSize);
        $('.second-photo-right').css('left', videoLeftandRightSize);
        $('.second-text-right').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#second-left , .second-photo-left , #second-right , .second-photo-right').width(valueForVideoSize);
        $('#second-left , .second-photo-left , #second-right , .second-photo-right').height(500);
    }
};

$('.second-photo-left').click(function () {
    $('.second-photo-left').fadeOut(200);
});
$('.second-photo-right').click(function () {
    $('.second-photo-right').fadeOut(200);
});



$(document).ready(largom1);
$(window).resize(largom1);
function largom1() {
    $('.second-left , .second-photo-left , .second-photo-right , .second-right').css('top', 480);
    $('.first-text-left').css('top', 250);
    $('.first-text-right').css('top', 250);
    $('.second-text-left').css('top', 730);
    $('.second-text-right').css('top', 730);
    $('.t-text-left').css('top', 1220);
    $('.t-text-right').css('top', 1220);
    $('.t-left , .t-photo-left').css('top', 973);
    $('.t-right , .t-photo-right').css('top', 973);
    $('.f-left , .f-photo-left').css('top', 1420);
    $('.f-text-left').css('top', 1670);
    if ($(window).width() <= 1025) {
        $('.first-text-left').css('top', 910);
        $('.first-text-right').css('top', 1755);
        $('.second-left , .second-photo-left').css('top', 2140);
        $('.second-right , .second-photo-right').css('top', 2995);
        $('.second-text-left').css('top', 2640);
        $('.second-text-right').css('top', 3490);
        $('.t-left , .t-photo-left').css('top', 3900);
        $('.t-text-left').css('top', 4405);
        $('.t-right , .t-photo-right').css('top', 4680);
        $('.t-text-right').css('top', 5180);
        $('.f-left , .f-photo-left').css('top', 5530);
        $('.f-text-left').css('top', 6030);
    }
};


//THIRD
$(document).ready(larges6);
$(window).resize(larges6);
function larges6() {
    var videoWidth = $('#film').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.t-left').css('left', videoLeftandRightSize);
    $('.t-photo-left').css('left', videoLeftandRightSize);
    $('.t-right').css('right', videoLeftandRightSize);
    $('.t-photo-right').css('right', videoLeftandRightSize);
    $('.t-text-left').css('left', videoLeftandRightSize);
    $('.t-text-right').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.t-left').css('left', videoLeftandRightSize);
        $('.t-photo-left').css('left', videoLeftandRightSize);
        $('.t-right').css('right', videoLeftandRightSize);
        $('.t-photo-right').css('right', videoLeftandRightSize);
        $('.t-text-left').css('left', videoLeftandRightSize);
        $('.t-text-right').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.t-left').css('left', videoLeftandRightSize);
        $('.t-photo-left').css('left', videoLeftandRightSize);
        $('.t-text-left').css('left', videoLeftandRightSize);
        $('.t-text-right').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#t-left , .t-photo-left , .t-right , .t-photo-right').width(valueForVideoSize);
        $('#t-left , .t-photo-left , .t-right , .t-photo-right').height(500);
    }
};

$('.t-photo-left').click(function () {
    $('.t-photo-left').fadeOut(200);
});
$('.t-photo-right').click(function () {
    $('.t-photo-right').fadeOut(200);
});

//FOURTH 
$(document).ready(larges7);
$(window).resize(larges7);
function larges7() {
    var videoWidth = $('#film').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.f-left').css('left', videoLeftandRightSize);
    $('.f-photo-left').css('left', videoLeftandRightSize);
    $('.f-text-left').css('left', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.f-left').css('left', videoLeftandRightSize);
        $('.f-photo-left').css('left', videoLeftandRightSize);
        $('.f-text-left').css('left', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#f-left , .f-photo-left').width(valueForVideoSize);
        $('#f-left , .f-photo-left').height(500);
    }
};

$('.f-photo-left').click(function () {
    $('.f-photo-left').fadeOut(200);
});


$(document).ready(functionForOverflow);
$(window).resize(functionForOverflow);
function functionForOverflow() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var heightForOverflowDivs = window.innerHeight - marginInPercent;
    $('#film').css('height', heightForOverflowDivs);
    $('#film').css('overflow', 'scroll');
};

$(document).ready(function () {
    $('#second-photo-left').click(function () {
        var iframe = $('#second-left')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#second-photo-right').click(function () {
        var iframe = $('#second-right')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#first-photo-right').click(function () {
        var iframe = $('#first-right')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#first-photo-left').click(function () {
        var iframe = $('#first-left')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#t-photo-right').click(function () {
        var iframe = $('#t-right')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#f-photo-left').click(function () {
        var iframe = $('#f-left')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#t-photo-left').click(function () {
        var iframe = $('#t-left')[0];
        var player = $f(iframe);
        player.api('play');
    });
});


