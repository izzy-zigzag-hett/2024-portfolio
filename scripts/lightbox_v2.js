// pause videos
var videos = document.getElementsByClassName("video_clip");
function stopAllVideos() {
  // console.log("attempted to pause!");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].currentTime = 0;
    // video.pause();
    // video.currentTime = 0;
    
  }
  
}

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  stopAllVideos();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  debugger;
  showSlides(slideIndex += n);
  console.log("pluslides");
  // stopAllVideos();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  stopAllVideos();
}


function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("modal-preview");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  stopAllVideos();
  
}
