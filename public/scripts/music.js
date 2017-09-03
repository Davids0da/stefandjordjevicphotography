//FIRST 
$(document).ready(larges1); 
$(window).resize(larges1);
function larges1() {
        var videoWidth = $('#music').width();
        var videoLeftandRightSize = ((videoWidth * 15) / 100) / 2;  
        $('.first-left').css('left',videoLeftandRightSize);
        $('.first-photo-left').css('left',videoLeftandRightSize);
        $('.first-right').css('right',videoLeftandRightSize);
        $('.first-photo-right').css('right',videoLeftandRightSize);
        $('#first-text-left').css('left',videoLeftandRightSize);
        $('#first-text-right').css('right',videoLeftandRightSize);
        $('#second-text-left').css('left',videoLeftandRightSize);
        $('#second-text-right').css('right',videoLeftandRightSize);
        if (window.innerWidth > 1500) {
            var videoWidth = $('#music').width();
            var videoLeftandRightSize = ((videoWidth * 25) / 100) / 2;  
            $('.first-left').css('left',videoLeftandRightSize);
            $('.first-photo-left').css('left',videoLeftandRightSize);
            $('.first-right').css('right',videoLeftandRightSize);
            $('.first-photo-right').css('right',videoLeftandRightSize);
            $('#first-text-left').css('left',videoLeftandRightSize);
            $('#first-text-right').css('right',videoLeftandRightSize);
            $('#second-text-left').css('left',videoLeftandRightSize);
            $('#second-text-right').css('right',videoLeftandRightSize);
        }
};

$('.first-photo-left').click(function(){
    $('.first-photo-left').fadeOut(200);
});
$('.first-photo-right').click(function(){
    $('.first-photo-right').fadeOut(200);
});


$(document).ready(largomen);
$(window).resize(largomen);
function largomen() {
    $('#first-text-left').css('top', 250);
    $('#first-text-right').css('top', 250);
};


