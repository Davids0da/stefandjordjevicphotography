//FIRST 
$(document).ready(larges3);
$(window).resize(larges3);
function larges3() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.fi-left').css('left', videoLeftandRightSize);
    $('.fi-photo-left').css('left', videoLeftandRightSize);
    $('.fi-right').css('right', videoLeftandRightSize);
    $('.fi-photo-right').css('right', videoLeftandRightSize);
    $('.fi-text-left').css('left', videoLeftandRightSize);
    $('.fi-text-right').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.fi-left').css('left', videoLeftandRightSize);
        $('.fi-photo-left').css('left', videoLeftandRightSize);
        $('.fi-right').css('right', videoLeftandRightSize);
        $('.fi-photo-right').css('right', videoLeftandRightSize);
        $('.fi-text-left').css('left', videoLeftandRightSize);
        $('.fi-text-right').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.fi-right').css('left', videoLeftandRightSize);
        $('.fi-photo-right').css('left', videoLeftandRightSize);
        $('.fi-right , .fi-photo-right').css('top', 720);
        $('.fi-text-right').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#fi-left , .fi-photo-left , #fi-right , .fi-photo-right').width(valueForVideoSize);
        $('#fi-left , .fi-photo-left , #fi-right , .fi-photo-right').height(500);
    }
};

$('.fi-photo-left').click(function () {
    $('.fi-photo-left').fadeOut(200);
});
$('.fi-photo-right').click(function () {
    $('.fi-photo-right').fadeOut(200);
});



//SECOND 
$(document).ready(largeses2);
$(window).resize(largeses2);
function largeses2() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.second-left2').css('left', videoLeftandRightSize);
    $('.second-photo-left2').css('left', videoLeftandRightSize);
    $('.second-right2').css('right', videoLeftandRightSize);
    $('.second-photo-right2').css('right', videoLeftandRightSize);
    $('.second-text-left2').css('left', videoLeftandRightSize);
    $('.second-text-right2').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.second-left2').css('left', videoLeftandRightSize);
        $('.second-photo-left2').css('left', videoLeftandRightSize);
        $('.second-right2').css('right', videoLeftandRightSize);
        $('.second-photo-right2').css('right', videoLeftandRightSize);
        $('.second-text-left2').css('left', videoLeftandRightSize);
        $('.second-text-right2').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.second-right2').css('left', videoLeftandRightSize);
        $('.second-photo-right2').css('left', videoLeftandRightSize);
        $('.second-text-right2').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#second-left2 , .second-photo-left2 , #second-right2 , .second-photo-right2').width(valueForVideoSize);
        $('#second-left2 , .second-photo-left2 , #second-right2 , .second-photo-right2').height(500);
    }
};

$('.second-photo-left2').click(function () {
    $('.second-photo-left2').fadeOut(200);
});
$('.second-photo-right2').click(function () {
    $('.second-photo-right2').fadeOut(200);
});


//THIRD 
$(document).ready(largeses9);
$(window).resize(largeses9);
function largeses9() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.t-left2').css('left', videoLeftandRightSize);
    $('.t-photo-left2').css('left', videoLeftandRightSize);
    $('.t-right2').css('right', videoLeftandRightSize);
    $('.t-photo-right2').css('right', videoLeftandRightSize);
    $('.t-text-left2').css('left', videoLeftandRightSize);
    $('.t-text-right2').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.t-left2').css('left', videoLeftandRightSize);
        $('.t-photo-left2').css('left', videoLeftandRightSize);
        $('.t-right2').css('right', videoLeftandRightSize);
        $('.t-photo-right2').css('right', videoLeftandRightSize);
        $('.t-text-left2').css('left', videoLeftandRightSize);
        $('.t-text-right2').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.t-right2').css('left', videoLeftandRightSize);
        $('.t-photo-right2').css('left', videoLeftandRightSize);
        $('.t-text-right2').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#t-left2 , .t-photo-left2 , #t-right2 , .t-photo-right2').width(valueForVideoSize);
        $('#t-left2 , .t-photo-left2 , #t-right2 , .t-photo-right2').height(500);
    }
};

$('.t-photo-left2').click(function () {
    $('.t-photo-left2').fadeOut(200);
});
$('.t-photo-right2').click(function () {
    $('.t-photo-right2').fadeOut(200);
});

//FOURTH 
$(document).ready(largeses10);
$(window).resize(largeses10);
function largeses10() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.f-left2').css('left', videoLeftandRightSize);
    $('.f-photo-left2').css('left', videoLeftandRightSize);
    $('.f-right2').css('right', videoLeftandRightSize);
    $('.f-photo-right2').css('right', videoLeftandRightSize);
    $('.f-text-left2').css('left', videoLeftandRightSize);
    $('.f-text-right2').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.f-left2').css('left', videoLeftandRightSize);
        $('.f-photo-left2').css('left', videoLeftandRightSize);
        $('.f-right2').css('right', videoLeftandRightSize);
        $('.f-photo-right2').css('right', videoLeftandRightSize);
        $('.f-text-left2').css('left', videoLeftandRightSize);
        $('.f-text-right2').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.f-right2').css('left', videoLeftandRightSize);
        $('.f-photo-right2').css('left', videoLeftandRightSize);
        $('.f-text-right2').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#f-left2 , .f-photo-left2 , #f-right2 , .f-photo-right2').width(valueForVideoSize);
        $('#f-left2 , .f-photo-left2 , #f-right2 , .f-photo-right2').height(500);
    }
};

$('.f-photo-left2').click(function () {
    $('.f-photo-left2').fadeOut(200);
});
$('.f-photo-right2').click(function () {
    $('.f-photo-right2').fadeOut(200);
});

//FIFTH 
$(document).ready(largeses11);
$(window).resize(largeses11);
function largeses11() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.fifth-left2').css('left', videoLeftandRightSize);
    $('.fifth-photo-left2').css('left', videoLeftandRightSize);
    $('.fifth-text-left2').css('left', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.fifth-left2').css('left', videoLeftandRightSize);
        $('.fifth-photo-left2').css('left', videoLeftandRightSize);
        $('.fifth-text-left2').css('left', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#fifth-left2 , .fifth-photo-left2').width(valueForVideoSize);
        $('#fifth-left2 , .fifth-photo-left2').height(500);
    }
};

$('.fifth-photo-left2').click(function () {
    $('.fifth-photo-left2').fadeOut(200);
});


$(document).ready(largomende3);
$(window).resize(largomende3);
function largomende3() {
    $('.second-left2 , .second-photo-left2 , .second-photo-right2 , .second-right2').css('top', 365);
    $('.fi-text-left').css('top', 250);
    $('.fi-text-right').css('top', 250);
    $('.second-text-left2').css('top', 615);
    $('.second-text-right2').css('top', 615);
    $('.t-left2 , .t-photo-left2 , .t-photo-right2 , .t-right2').css('top', 750);
    $('.t-text-left2').css('top', 1000);
    $('.t-text-right2').css('top', 1000);
    $('.f-left2 , .f-photo-left2 , .f-photo-right2 , .f-right2').css('top', 1130);
    $('.f-text-left2').css('top', 1380);
    $('.f-text-right2').css('top', 1380);
    $('.fifth-left2 , .fifth-photo-left2').css('top', 1510);
    $('.fifth-text-left2').css('top', 1760);
    if ($(window).width() <= 1025) {
        $('.fi-text-left').css('top', 920);
        $('.fi-photo-right , .fi-right').css('top', 1100);
        $('.fi-text-right').css('top', 1600);
        $('.second-left2 , .second-photo-left2').css('top', 1800);
        $('.second-right2 , .second-photo-right2').css('top', 2520);
        $('.second-text-left2').css('top', 2320);
        $('.second-text-right2').css('top', 3040);
        $('.t-left2 , .t-photo-left2').css('top', 3270);
        $('.t-right2 , .t-photo-right2').css('top', 4010);
        $('.t-text-left2').css('top', 3790);
        $('.t-text-right2').css('top', 4520);
        $('.f-left2 , .f-photo-left2').css('top', 4710);
        $('.f-right2 , .f-photo-right2').css('top', 5420);
        $('.f-text-left2').css('top', 5220);
        $('.f-text-right2').css('top', 5930);
        $('.fifth-left2 , .fifth-photo-left2').css('top', 6120);
        $('.fifth-text-left2').css('top', 6620);
    }
};

$(document).ready(functionForOverflow);
$(window).resize(functionForOverflow);
function functionForOverflow() {
    var marginInPercent = ((window.innerHeight * 18) / 100) / 2;
    var heightForOverflowDivs = window.innerHeight - marginInPercent;
    $('#commercial').css('height', heightForOverflowDivs);
    $('#commercial').css('overflow', 'scroll');
};

$(document).ready(function () {
    $('#fi-photo-left').click(function () {
        var iframe = $('#fi-left')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#fi-photo-right').click(function () {
        var iframe = $('#fi-right')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#second-photo-right2').click(function () {
        var iframe = $('#second-right2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#second-photo-left2').click(function () {
        var iframe = $('#second-left2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#t-photo-right2').click(function () {
        var iframe = $('#t-right2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#t-photo-left2').click(function () {
        var iframe = $('#t-left2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#f-photo-right2').click(function () {
        var iframe = $('#f-right2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#f-photo-left2').click(function () {
        var iframe = $('#f-left2')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#fifth-photo-left2').click(function () {
        var iframe = $('#fifth-left2')[0];
        var player = $f(iframe);
        player.api('play');
    });
});


