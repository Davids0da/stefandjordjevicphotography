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
    $('.second-left , .second-photo-left , .second-photo-right , .second-right').css('top',300);
    $('.first-text-left').css('top', 250);
    $('.first-text-right').css('top', 250);
    $('.second-text-left').css('top', 550);
    $('.second-text-right').css('top', 550);
};


