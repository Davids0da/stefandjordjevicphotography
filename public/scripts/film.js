//FIRST 
$(document).ready(larges2);
$(window).resize(larges2);
function larges2() {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.first-left').css('left',videoLeftandRightSize);
        $('.first-photo-left').css('left',videoLeftandRightSize);
        $('.first-right').css('right',videoLeftandRightSize);
        $('.first-photo-right').css('right',videoLeftandRightSize);
        $('.first-text-left').css('left',videoLeftandRightSize);
        $('.first-text-right').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#film').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.first-left').css('left',videoLeftandRightSize);
            $('.first-photo-left').css('left',videoLeftandRightSize);
            $('.first-right').css('right',videoLeftandRightSize);
            $('.first-photo-right').css('right',videoLeftandRightSize);
            $('.first-text-left').css('left',videoLeftandRightSize);
            $('.first-text-right').css('right',videoLeftandRightSize);
        }
        if ($(window).width() <= 1025) {
            $('.first-right').css('left', videoLeftandRightSize);
            $('.first-photo-right').css('left', videoLeftandRightSize);
            $('.first-right , .first-photo-right').css('top',1430);
            $('.first-text-right').css('left', videoLeftandRightSize);
            var windowWidth = window.innerWidth;
            var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
            $('#first-left , .first-photo-left , #first-right , .first-photo-right').width(valueForVideoSize);
            $('#first-left , .first-photo-left , #first-right , .first-photo-right').height(500);
        }
};

$('.first-photo-left').click(function(){
    $('.first-photo-left').fadeOut(200);
}); 
$('.first-photo-right').click(function(){
    $('.first-photo-right').fadeOut(200);
});



//SECOND 
$(document).ready(largeses1);
$(window).resize(largeses1);
function largeses1() {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.second-left').css('left',videoLeftandRightSize);
        $('.second-photo-left').css('left',videoLeftandRightSize);
        $('.second-right').css('right',videoLeftandRightSize);
        $('.second-photo-right').css('right',videoLeftandRightSize);
        $('.second-text-left').css('left',videoLeftandRightSize);
        $('.second-text-right').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#film').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.second-left').css('left',videoLeftandRightSize);
            $('.second-photo-left').css('left',videoLeftandRightSize);
            $('.second-right').css('right',videoLeftandRightSize);
            $('.second-photo-right').css('right',videoLeftandRightSize);
            $('.second-text-left').css('left',videoLeftandRightSize);
            $('.second-text-right').css('right',videoLeftandRightSize);
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

$('.second-photo-left').click(function(){
    $('.second-photo-left').fadeOut(200);
});
$('.second-photo-right').click(function(){
    $('.second-photo-right').fadeOut(200);
});



$(document).ready(largom1); 
$(window).resize(largom1);
function largom1() {
    $('.second-left , .second-photo-left , .second-photo-right , .second-right').css('top',480);
    $('.t-left , .t-photo-left').css('top',950);
    $('.first-text-left').css('top', 250);
    $('.first-text-right').css('top', 250);
    $('.second-text-left').css('top', 730);
    $('.second-text-right').css('top', 730);
    $('.t-text-left').css('top', 1200);
    if ($(window).width() <= 1025) {
        $('.first-text-left').css('top', 1010);
        $('.first-text-right').css('top', 1945);
        $('.second-left , .second-photo-left').css('top',2450);
        $('.second-right , .second-photo-right').css('top',3280);
        $('.second-text-left').css('top', 2960);
        $('.second-text-right').css('top', 3785);
        $('.t-left , .t-photo-left').css('top',4130);
        $('.t-text-left').css('top', 4630);
    }
};


//THIRD
$(document).ready(larges6);
$(window).resize(larges6);
function larges6() {
        var videoWidth = $('#film').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.t-left').css('left',videoLeftandRightSize);
        $('.t-photo-left').css('left',videoLeftandRightSize);
        $('.first-right').css('right',videoLeftandRightSize);
        $('.first-photo-right').css('right',videoLeftandRightSize);
        $('.t-text-left').css('left',videoLeftandRightSize);
        $('.first-text-right').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#film').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.t-left').css('left',videoLeftandRightSize);
            $('.t-photo-left').css('left',videoLeftandRightSize);
            $('.first-right').css('right',videoLeftandRightSize);
            $('.first-photo-right').css('right',videoLeftandRightSize);
            $('.t-text-left').css('left',videoLeftandRightSize);
            $('.first-text-right').css('right',videoLeftandRightSize);
        }
        if ($(window).width() <= 1025) {
            $('.t-left').css('left', videoLeftandRightSize);
            $('.t-photo-left').css('left', videoLeftandRightSize);
            $('.t-text-left').css('left', videoLeftandRightSize);
            var windowWidth = window.innerWidth;
            var valueForVideoSize = windowWidth - ((windowWidth * 15) / 100);
            $('#t-left , .t-photo-left').width(valueForVideoSize);
            $('#t-left , .t-photo-left').height(500);
        }
};

$('.t-photo-left').click(function(){
    $('.t-photo-left').fadeOut(200);
}); 
$('.t-photo-right').click(function(){
    $('.t-photo-right').fadeOut(200);
});


$(document).ready(functionForOverflow);
$(window).resize(functionForOverflow);
function functionForOverflow() {
    var marginInPercent = ((window.innerHeight * 18) / 100 ) / 2; 
    var heightForOverflowDivs =  window.innerHeight - marginInPercent;
    $('#film').css('height',heightForOverflowDivs);
    $('#film').css('overflow', 'scroll');
};