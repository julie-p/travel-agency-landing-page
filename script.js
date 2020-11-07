
/* hamburgerMenu.removeEventListener('click', function() {
    header.classList.remove('menu-open');
}) */
//JQuery
$(document).ready(function() {
    //Ouvre le menu
    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('menu-open');
        $('.nav').toggleClass('menu-open');
    });
    //Ferme le menu s/click et redirige vers la section
    $('.nav .nav-link').on('click', function () {
        $('.hamburger-menu').removeClass('menu-open');
        $('.nav').removeClass('menu-open');
    });
    //Smooth scroll down
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
    //Header styles on scroll
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".header").css("background", "var(--red-alt)");
          $(".header").css("opacity", ".9");
          $('.header').css("border-bottom", 'none');
          $(".menu-open .nav-list").css("opacity", "1");
        }
        else {
            $(".header").css("background" , "transparent");  
            $(".header").css("opacity", "none");
            $('.header').css("border-bottom", '1px solid #fff');	
        };
    });

    //Initialisation AOS
    AOS.init({
        easing: 'ease',
        duration: 2000,
        once: true
    });
});