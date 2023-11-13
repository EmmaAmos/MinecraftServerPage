/*
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImageIndex = 0;

    function showImage(index) {
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % slider.children.length;
        showImage(currentImageIndex);
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + slider.children.length) % slider.children.length;
        showImage(currentImageIndex);
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
});
*/
function before(){
    document.getElementById('myImage')
    .src="img/titleCard.jpg";
    document.getElementById('message')
    .innerHTML="Hii! GeeksforGeeks people";
}
     
function afterr(){
    document.getElementById('myImage')
    .src="img/bees.jpg";
    document.getElementById('message')
    .innerHTML="Bye! GeeksforGeeks people";
}