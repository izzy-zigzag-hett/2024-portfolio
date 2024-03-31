// pause videos
var videos = document.getElementsByClassName("video_clip");
var grid_videos = document.getElementsByClassName("grid_video");
var grid_items = document.getElementsByClassName("img_and_label");

function stopAllVideos() {
  // console.log("attempted to pause!");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].currentTime = 0;
    // video.pause();
    // video.currentTime = 0;
    
  }
}

function hideGridItems() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_items.length; i++) {
    grid_items[i].style.display = "none";
  
  }
}
function showGridItems() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_items.length; i++) {
    grid_items[i].style.display = "block";
    
  }
}

function pauseGridVideos() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_videos.length; i++) {
    grid_videos[i].pause();
    
  }
}
function playGridVideos() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_videos.length; i++) {
    grid_videos[i].play();
    
  }
}

var slides = document.getElementsByClassName("mySlides");
var scrollY = 0;

// Open the Modal
function openModal() {
  scrollY = document.getElementById("home_main").scrollHeight;
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflowY = "hidden";


  // pauseGridVideos();
  hideGridItems();
  // console.log("orig scroll h: "+ scrollHeight)
  // scrollHeight = document.body.scrollTop;
  // console.log("new scroll h: "+ scrollY)
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  stopAllVideos();
  // playGridVideos();
  showGridItems();
  console.log("attempted scroll h: "+ scrollY)
  document.getElementById("home_main").scrollTop = scrollY;
  document.body.style.overflowY = "scroll";


}

var slideIndex = 1;
var currCaption = "";
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  // debugger;
  showSlides(slideIndex += n);
  // console.log("pluslides");
  // stopAllVideos();
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
//   stopAllVideos();
// }
function currentSlide(slide_id) {
  // var curr_slide = document.getElementById(slide_id);
  console.log(slides)
  for (var i=0;  i<slides.length; i++) {

    
    if (slides[i].id == slide_id) {
      showSlides(slideIndex = i+1);
      // console.log('found at' + i)
      break
    }
    

  }
  
  stopAllVideos();
}

function checkCategory(n) {
  var modalHeader = document.getElementById("modal_header");

  var currSlide = slides[n-1];
  var captionText = document.getElementById("caption");

  var div_attrs = currSlide.attributes;
  var div_class = div_attrs.getNamedItem("class").value;
  // console.log(currSlide)
  const classList = div_class.split(" ");
  captionText.innerHTML = currSlide.id;
  if (classList.includes("GD")) {
    modalHeader.innerHTML = "Graphic Design"
    // modalHeader.style.backgroundImage = "radial-gradient(rgba(144, 238, 144,1), rgba(144, 238, 144,0),rgba(144, 238, 144,0))";
    modalHeader.style.color = "rgba(144, 238, 144,1)";
  }
  else if (classList.includes("anim")) {
    modalHeader.innerHTML = "Animation"
    // modalHeader.style.backgroundImage = "radial-gradient(rgba(111, 201, 231,1), rgba(111, 201, 231,0),rgba(111, 201, 231,0) )";
    modalHeader.style.color = "rgba(111, 201, 231,1)";

  }
  else {
    modalHeader.innerHTML = "OOPS"
  }
  
}

function showSlides(n) {
  
  var i;
  // var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("modal-preview");

  
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = slides[slideIndex-1].alt;
  checkCategory(slideIndex);
  stopAllVideos();
  
}
