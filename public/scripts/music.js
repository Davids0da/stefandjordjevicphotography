//FIRST 
$(document).ready(larges1);
$(window).resize(larges1);
function larges1() {
    var videoWidth = $('#music').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.first-left1').css('left', videoLeftandRightSize);
    $('.first-photo-left1').css('left', videoLeftandRightSize);
    $('.first-right1').css('right', videoLeftandRightSize);
    $('.first-photo-right1').css('right', videoLeftandRightSize);
    $('.first-text-left1').css('left', videoLeftandRightSize);
    $('.first-text-right1').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#music').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.first-left1').css('left', videoLeftandRightSize);
        $('.first-photo-left1').css('left', videoLeftandRightSize);
        $('.first-right1').css('right', videoLeftandRightSize);
        $('.first-photo-right1').css('right', videoLeftandRightSize);
        $('.first-text-left1').css('left', videoLeftandRightSize);
        $('.first-text-right1').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.first-right1').css('left', videoLeftandRightSize);
        $('.first-photo-right1').css('left', videoLeftandRightSize);
        $('.first-right1 , .first-photo-right1').css('top', 670);
        $('.first-text-right1').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#first-left1 , .first-photo-left1 , #first-right1 , .first-photo-right1').width(valueForVideoSize);
        $('#first-left1 , .first-photo-left1 , #first-right1 , .first-photo-right1').height(500);
    }
};

$('.first-photo-left1').click(function () {
    $('.first-photo-left1').fadeOut(200);
});
$('.first-photo-right1').click(function () {
    $('.first-photo-right1').fadeOut(200);
});

//SECOND 
$(document).ready(larges2);
$(window).resize(larges2);
function larges2() {
    var videoWidth = $('#music').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.s-left1').css('left', videoLeftandRightSize);
    $('.s-photo-left1').css('left', videoLeftandRightSize);
    $('.s-text-left1').css('left', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#music').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.s-left1').css('left', videoLeftandRightSize);
        $('.s-photo-left1').css('left', videoLeftandRightSize);
        $('.s-text-left1').css('left', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#s-left1 , .s-photo-left1').width(valueForVideoSize);
        $('#s-left1 , .s-photo-left1').height(500);
    }
};

$('.s-photo-left1').click(function () {
    $('.s-photo-left1').fadeOut(200);
});


$(document).ready(largomen);
$(window).resize(largomen);
function largomen() {
    $('.first-text-left1').css('top', 250);
    $('.first-text-right1').css('top', 250);
    $('.s-photo-left1 , #s-left1').css('top', 350);
    $('#s-text-left1').css('top', 600);
    if ($(window).width() <= 1025) {
        $('.first-text-left1').css('top', 520);
        $('.first-text-right1').css('top', 1180);
        $('.s-photo-left1 , #s-left1').css('top', 1320);
        $('#s-text-left1').css('top', 1841);
    }
};

$(document).ready(function () {
    $('#first-photo-left1').click(function () {
        var iframe = $('#first-left1')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#first-photo-right1').click(function () {
        var iframe = $('#first-right1')[0];
        var player = $f(iframe);
        player.api('play');
    });
    $('#s-photo-left1').click(function () {
        var iframe = $('#s-left1')[0];
        var player = $f(iframe);    
        player.api('play');
    });
});

