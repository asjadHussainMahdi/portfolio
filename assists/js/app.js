// var typed = new Typed(".typing",{
//     strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
//     typeSpeed: 80,
//     backSpeed: 80,
//     loop: false,
//     loopCount: Infinity,
// });
$(function() {
    $(".typing").typed({
      strings: ["Freelancer","Blogger","Front end Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });
  });

// counter number
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

// navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
  if(this.scrollY > 100){
    navbar.style.backgroundColor = "#13131ae0";
  } else{
    navbar.style.backgroundColor = "#13131a";
  }
})