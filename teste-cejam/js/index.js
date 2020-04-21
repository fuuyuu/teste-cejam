var modal = document.getElementById('modal');
var close = document.getElementById('close');
var open = document.getElementById('open');

close.addEventListener('click', closeModal);
open.addEventListener('click', openModal);

function closeModal() {
    modal.classList.remove('is-active');
}

function openModal() {
    modal.classList.add('is-active');
    console.log('alo');
}

window.onscroll = function(){
    navbarfixo();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navbarfixo() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(".voltar-topo").css("display", "none");

  $("body").scroll(function() {
    if($(this).scrollTop() == 0){
      $(".voltar-topo").css("display", "none");
    } else {
      $(".voltar-topo").css("display", "block");
    }
  });

  $(".voltar-topo").click(function() {
    $("html, body").animate({scrollTop: 0}, 800);
   });
});

var sliders  = document.querySelectorAll('#sliders');
var current  = 0;
var total    = sliders.length - 1;

window.setInterval(function(){
	var index =  current ? current - 1 : total;
	sliders[index].className  = '';
	sliders[current].className  = 'slider-active';
	current = current >= total ? 0 : current+1; 	
}, 
    2000);

var scrollTop = function() {
  window.scrollTo(0, 0);
};
