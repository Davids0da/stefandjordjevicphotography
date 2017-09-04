//FIRST 
$(document).ready(larges3);
$(window).resize(larges3);
function larges3() {
    var videoWidth = $('#commercial').width();
    var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;
    $('.f-left').css('left', videoLeftandRightSize);
    $('.f-photo-left').css('left', videoLeftandRightSize);
    $('.f-right').css('right', videoLeftandRightSize);
    $('.f-photo-right').css('right', videoLeftandRightSize);
    $('.f-text-left').css('left', videoLeftandRightSize);
    $('.f-text-right').css('right', videoLeftandRightSize);
    if (window.innerWidth > 1500) {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;
        $('.f-left').css('left', videoLeftandRightSize);
        $('.f-photo-left').css('left', videoLeftandRightSize);
        $('.f-right').css('right', videoLeftandRightSize);
        $('.f-photo-right').css('right', videoLeftandRightSize);
        $('.f-text-left').css('left', videoLeftandRightSize);
        $('.f-text-right').css('right', videoLeftandRightSize);
    }
    if ($(window).width() <= 1025) {
        $('.f-right').css('left', videoLeftandRightSize);
        $('.f-photo-right').css('left', videoLeftandRightSize);
        $('.f-right , .f-photo-right').css('top', 720);
        $('.f-text-right').css('left', videoLeftandRightSize);
        var windowWidth = window.innerWidth;
        var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
        $('#f-left , .f-photo-left , #f-right , .f-photo-right').width(valueForVideoSize);
        $('#f-left , .f-photo-left , #f-right , .f-photo-right').height(500);
    }
};

$('.f-photo-left').click(function () {
    $('.f-photo-left').fadeOut(200);
});
$('.f-photo-right').click(function () {
    $('.f-photo-right').fadeOut(200);
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



$(document).ready(largomende3);
$(window).resize(largomende3);
function largomende3() {
    $('.second-left2 , .second-photo-left2 , .second-photo-right2 , .second-right2').css('top', 365);
    $('.f-text-left').css('top', 250);
    $('.f-text-right').css('top', 250);
    $('.second-text-left2').css('top', 615);
    $('.second-text-right2').css('top', 615);
    if ($(window).width() <= 1025) {
        $('.f-text-left').css('top', 520);
        $('.f-text-right').css('top', 1230);
        $('.second-left2 , .second-photo-left2').css('top',1430);
        $('.second-right2 , .second-photo-right2').css('top',2150);
        $('.second-text-left2').css('top', 1950);
        $('.second-text-right2').css('top', 2670);
    }
};


