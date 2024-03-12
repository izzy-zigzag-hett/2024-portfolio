let GslideIndex = 1;
showSlides(GslideIndex);
let JslideIndex = 1;
JshowSlides(JslideIndex);
let BslideIndex = 1;
showSlidesB(BslideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(GslideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(GslideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("aof_sb_1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {GslideIndex = 1}
  if (n < 1) {GslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_slide", "");
  }
  slides[GslideIndex-1].style.display = "block";
  dots[GslideIndex-1].className += " active_slide";
}



// Next/previous controls
function plusSlidesJ(n) {
  JshowSlides(JslideIndex += n);
}

// Thumbnail image controls
function currentSlideJ(n) {
  JshowSlides(JslideIndex = n);
}

function JshowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("aof_sb_2");
  let dots = document.getElementsByClassName("dotJ");
  if (n > slides.length) {JslideIndex = 1}
  if (n < 1) {JslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_slide", "");
  }
  slides[JslideIndex-1].style.display = "block";
  dots[JslideIndex-1].className += " active_slide";
}

// Next/previous controls
function plusSlidesB(n) {
    showSlidesB(BslideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlideB(n) {
    showSlidesB(BslideIndex = n);
  }
  
  function showSlidesB(n) {
    let i;
    let slides = document.getElementsByClassName("bh_sb_1");
    let dots = document.getElementsByClassName("dotB");
    if (n > slides.length) {BslideIndex = 1}
    if (n < 1) {BslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_slide", "");
    }
    slides[BslideIndex-1].style.display = "block";
    dots[BslideIndex-1].className += " active_slide";
  }