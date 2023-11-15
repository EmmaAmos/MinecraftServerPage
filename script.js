$(document).ready(function(){
    var idx = 0;
    var interval = 6000; //time between scroll
    var images = $('ul.slider li img');
    setInterval(function(){
        idx++;
        $('img#current').fadeOut(function () { 
            $(this).attr('src', $(images[idx%images.length]).attr('src')).fadeIn()                
        });
    }, interval);
});