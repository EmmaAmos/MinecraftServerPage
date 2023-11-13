/*
function before(){
    document.getElementById('myimage').
        src="images/titleCard.jpg";
}
function next(){
    document.getElementById('myArray')
    scr=["images/titleCard.jgp", "images/bees.jpg", "images/AboveDisneySprings.png"]
}
*/

$(document).ready(function(){
    var idx = 0;
    var interval = 6000;
    var images = $('ul.slider li img');
    setInterval(function(){
        idx++;
        $('img#current').fadeOut(function () { 
            $(this).attr('src', $(images[idx%images.length]).attr('src')).fadeIn()                
        });
    }, interval);
});