//Cover menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });


// Life in zippy Image slider

var i = 0;
var images = [];
var time = 2000;

//image list
images[0] = "images/zippy-slider-1.jpeg";
images[1] = "images/zippy-slider-2.jpeg";
images[2] = "images/zippy-slider-3.jpeg";
images[3] = "images/zippy-slider-4.jpeg";
images[4] = "images/zippy-slider-5.jpeg";
images[5] = "images/zippy-slider-6.jpeg";
images[6] = "images/zippy-slider-7.jpeg";
images[7] = "images/zippy-slider-8.jpeg";


function ImageSlide(){
    document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }
    else
    {
        i=0;
    }

    setTimeout("ImageSlide()",time)
}

window.onload = ImageSlide;