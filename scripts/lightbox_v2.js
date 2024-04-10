// List of embedded videos in Modal content
var videos = document.getElementsByClassName("video_clip");

// List of embedded videos on Homepage
var grid_videos = document.getElementsByClassName("grid_video");

// List of images and videos from home page
var grid_items = document.getElementsByClassName("img_and_label");


// List of DIV elements
var slides = document.getElementsByClassName("mySlides");


var scrollYvalue = 0;

// Current slide index
var slideIndex = 1;

// Current caption
var currCaption = "";

// Current category of slide
var curr_category = "anim";

// Slide clicked when modal is opened
var first_slide;





// Stop embedded videos from playing when closed ----------------------------------------------------------------------
function stopAllVideos() {
  // console.log("attempted to pause!");
  for (i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].currentTime = 0;
    // video.pause();
    // video.currentTime = 0;
  }
  // document.getElementById("home_main").scrollTo(0,scrollYvalue);

}

// Hide homepage items to save memory----------------------------------------------------------------------
function hideGridItems() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_items.length; i++) {
    grid_items[i].style.visibility = "hidden";
  
  }
}

// SHow homepage items again----------------------------------------------------------------------
function showGridItems() {
  // console.log("attempted to pause!");
  for (i = 0; i < grid_items.length; i++) {
    grid_items[i].style.visibility = "visible";
    
  }

  // slides[slideIndex - 1].scrollIntoView();
}



// Open the Modal----------------------------------------------------------------------
function openModal(this_slide) {
  document.getElementById('myModal').scrollTop = 0;
  // console.log(document.getElementById('home_main').scrollTop)

  event.stopPropagation();
  // scrollYvalue = document.getElementById("home_main").scrollHeight;
  document.getElementById("myModal").style.display = "block";

  document.body.style.overflowY = "hidden";
  // document.body.scrollTop = 0;

  // pauseGridVideos();
  hideGridItems();
  // console.log("orig scroll h: "+ scrollHeight)
  // scrollHeight = document.body.scrollTop;
  // console.log("new scroll h: "+ scrollYvalue)

  first_slide=this_slide;
}

// Close the Modal----------------------------------------------------------------------
function closeModal() {
  document.body.style.overflowY = "scroll";
  document.getElementById("myModal").style.display = "none";
  stopAllVideos();
  // playGridVideos();
  showGridItems();
  // console.log("attempted scroll h: "+ scrollYvalue)

  // console.log(scrollYvalue)
  
  // if( curr_category == "gd") {
  //   document.getElementById('gd_main').scrollIntoView();
  // }
  // else if( curr_category == "anim") {
  //   document.getElementById('HR_1').scrollIntoView();
  // }
  // else if( curr_category == "anim") {
  //   document.getElementById('process_main').scrollIntoView();
  // }
  // else {
  //   document.getElementById('top_of_page').scrollIntoView();
  // }


  // console.log("actualScrollH: "+ document.body.scrollTop)
  // document.getElementById('myModal').scrollTop = 0;

}



// Next/previous controls----------------------------------------------------------------------
function plusSlides(n) {

  showSlides(slideIndex += n);
  document.getElementById('myModal').scrollTop = 0;


}


function currentSlide(slide_id) {
  document.getElementById('myModal').scrollTop = 0;

  // console.log(slides)
  for (var i=0;  i<slides.length; i++) {

    
    if (slides[i].id == slide_id) {
      showSlides(slideIndex = i+1);
      break
    }
    

  }
  
  stopAllVideos();
}

// Change Modal Header based on category----------------------------------------------------------------------
function checkCategory(n) {
  var modalHeader = document.getElementById("modal_header");

  var currSlide = slides[n-1];
  var captionText = document.getElementById("caption");

  var div_attrs = currSlide.attributes;
  var div_class = div_attrs.getNamedItem("class").value;
  const classList = div_class.split(" ");


  if (classList.includes("GD")) {
    modalHeader.innerHTML = "Graphic Design"
    
    modalHeader.style.color = "rgba(144, 238, 144,1)";
    curr_category = "gd";
  }
  else if (classList.includes("anim")) {
    modalHeader.innerHTML = "Animation"
    
    modalHeader.style.color = "rgba(111, 201, 231,1)";
    curr_category = "anim";


  }
  else if (classList.includes("process")) {
    modalHeader.innerHTML = "Process"
    
    modalHeader.style.color = "#ffd700";
    curr_category = "process";
  }
  else if (classList.includes("AOF")) {
    modalHeader.innerHTML = "AOF"
    
    modalHeader.style.color = "#d18af4";
    curr_category = "AOF";
  }
  else if (classList.includes("flourish")) {
    modalHeader.innerHTML = "Flourish"
    
    modalHeader.style.color = "#d18af4";
    curr_category = "flourish";
  }
  else {
    console.log("Slide has no category")
  }
  
}


// Displays Modal content----------------------------------------------------------------------
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
