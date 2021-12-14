




var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active2");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}



// get elements froom html
var hours = document.getElementById('hours'); 
var minutes = document.getElementById('minutes'); 
var seconds = document.getElementById('seconds'); 

var currentYear = new Date().getFullYear();

var nextYear = new Date(`may 08 ${currentYear + 1} 00:00:00`);


function countdown()
{
    var currentTime = new Date();
    var diff = nextYear - currentTime;
    var s = Math.floor(diff/1000) % 60;
    var m = Math.floor(diff/1000/60) % 60; 
    var h = Math.floor(diff/1000/60/60) % 24;

    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
}
setInterval(countdown,1000);
//  plyer slick
    // testimonail slider 
  $(document).ready(function(){
      $('.click_player').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 2, 
        vertical:true,
        centerMode: true,
      });

    //   service slick
  
    $('.service').slick({
      dots: false,
      infinite: true,
      arrows:false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 4,
            loops:true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 4
          }
        }
      ]
    });
  });

