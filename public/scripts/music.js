//FIRST 
$(document).ready(larges1); 
$(window).resize(larges1);
function larges1() {
        var videoWidth = $('#music').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.first-left1').css('left',videoLeftandRightSize);
        $('.first-photo-left1').css('left',videoLeftandRightSize);
        $('.first-right1').css('right',videoLeftandRightSize);
        $('.first-photo-right1').css('right',videoLeftandRightSize);
        $('.first-text-left1').css('left',videoLeftandRightSize);
        $('.first-text-right1').css('right',videoLeftandRightSize );
        if (window.innerWidth > 1500) {
            var videoWidth = $('#music').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.first-left1').css('left',videoLeftandRightSize);
            $('.first-photo-left1').css('left',videoLeftandRightSize);
            $('.first-right1').css('right',videoLeftandRightSize);
            $('.first-photo-right1').css('right',videoLeftandRightSize);
            $('.first-text-left1').css('left',videoLeftandRightSize);
            $('.first-text-right1').css('right',videoLeftandRightSize );
        }
};

$('.first-photo-left1').click(function(){
    $('.first-photo-left1').fadeOut(200);
});
$('.first-photo-right1').click(function(){
    $('.first-photo-right1').fadeOut(200);
});


$(document).ready(largomen);
$(window).resize(largomen);
function largomen() {
    $('.first-text-left1').css('top', 250);
    $('.first-text-right1').css('top', 250);
};


