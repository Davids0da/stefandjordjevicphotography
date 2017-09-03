//FIRST 
$(document).ready(larges3);
$(window).resize(larges3);
function larges3() {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.first-left').css('left',videoLeftandRightSize);
        $('.first-photo-left').css('left',videoLeftandRightSize);
        $('.first-right').css('right',videoLeftandRightSize);
        $('.first-photo-right').css('right',videoLeftandRightSize);
        $('.first-text-left').css('left',videoLeftandRightSize);
        $('.first-text-right').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#commercial').width();
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
$(document).ready(largeses2);
$(window).resize(largeses2);
function largeses2() {
        var videoWidth = $('#commercial').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.second-left2').css('left',videoLeftandRightSize);
        $('.second-photo-left2').css('left',videoLeftandRightSize);
        $('.second-right2').css('right',videoLeftandRightSize);
        $('.second-photo-right2').css('right',videoLeftandRightSize);
        $('.second-text-left2').css('left',videoLeftandRightSize);
        $('.second-text-right2').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#commercial').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.second-left2').css('left',videoLeftandRightSize);
            $('.second-photo-left2').css('left',videoLeftandRightSize);
            $('.second-right2').css('right',videoLeftandRightSize);
            $('.second-photo-right2').css('right',videoLeftandRightSize);
            $('.second-text-left2').css('left',videoLeftandRightSize);
            $('.second-text-right2').css('right',videoLeftandRightSize);
        }
};

$('.second-photo-left2').click(function(){
    $('.second-photo-left2').fadeOut(200);
});
$('.second-photo-right2').click(function(){
    $('.second-photo-right2').fadeOut(200);
});



$(document).ready(largomende3);
$(window).resize(largomende3);
function largomende3() {
    $('.second-left2 , .second-photo-left2 , .second-photo-right2 , .second-right2').css('top',365);
    $('.first-text-left').css('top', 250);
    $('.first-text-right').css('top', 250);
    $('.second-text-left2').css('top', 615);
    $('.second-text-right2').css('top', 615);
}; 


