//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

//Event listener pour ouvrir le menu
hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
});

//JQuery
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".header").css("background", "var(--red-alt)");
          $(".header").css("opacity", ".9");
        }
        else{
            $(".header").css("background" , "transparent");  	
        }
    });

    //Initialisation AOS
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});