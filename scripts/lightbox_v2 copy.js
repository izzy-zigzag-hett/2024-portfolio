// pause videos
var videos = document.getElementsByClassName("video_clip");
var grid_videos = document.getElementsByClassName("grid_video");
var grid_items = document.getElementsByClassName("img_and_label");

var slides = document.getElementsByClassName("mySlides");

var scrollYvalue = 0;

var slideIndex = 1;
var currCaption = "";

var first_slide;


var curr_category = "anim";

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

  slides[slideIndex - 1].scrollIntoView();
}

// function pauseGridVideos() {
//   // console.log("attempted to pause!");
//   for (i = 0; i < grid_videos.length; i++) {
//     grid_videos[i].pause();
    
//   }
// }
// function playGridVideos() {
//   // console.log("attempted to pause!");
//   for (i = 0; i < grid_videos.length; i++) {
//     grid_videos[i].play();
    
//   }
// }



// Open the Modal
function openModal(this_slide) {
  alert(document.getElementById('home_main').scrollTop)
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

// Close the Modal
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
  document.getElementById('myModal').scrollTop = 0;

}



// Next/previous controls
function plusSlides(n) {

  showSlides(slideIndex += n);

}


function currentSlide(slide_id) {
  console.log(slides)
  for (var i=0;  i<slides.length; i++) {

    
    if (slides[i].id == slide_id) {
      showSlides(slideIndex = i+1);
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
    modalHeader.innerHTML = "AOF Internship"
    
    modalHeader.style.color = "#d18af4";
    curr_category = "AOF";
  }
  else if (classList.includes("flourish")) {
    modalHeader.innerHTML = "Flourish Internship"
    
    modalHeader.style.color = "#d18af4";
    curr_category = "flourish";
  }
  else {
    console.log("Slide has no category")
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
