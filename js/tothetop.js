$(document).ready(function() {

    checkTopButtonVisibility();
    
    $(window).scroll(function() {
        checkTopButtonVisibility();
    });
    
});

/**
 * Determines wether or not the Top of Page button should be shown or not
 * based on how far down the page is scrolled.
 * 
 * @author Chris Kankiewicz (http://www.ChrisKankiewicz.com)
 */
function checkTopButtonVisibility() {
    if($(window).scrollTop() >= $('.navigation').offset().top) {
        $('#toTop').show();
    } else {
        $('#toTop').hide();
    }
}