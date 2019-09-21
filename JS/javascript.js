 // Mobiili-navbarin full-width
 function openNav() {
     document.getElementById("myNav").style.height = "100%";
 }

 function closeNav() {
     document.getElementById("myNav").style.height = "0%";
 }



 // Scrolling Effect

 $(window).on("scroll", function () {
     if ($(window).scrollTop()) {
         $('nav').addClass('black');
     } else {
         $('nav').removeClass('black');
     }
 })




 $(document).ready(function () {


     $('.navbar-brand').click(function (e) {

         $(".navbar-collapse").collapse('hide');
         var headerHeight = $('header').outerHeight();
         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 1000);

         e.preventDefault();
     });



     $('.dropdown-toggle').click(function (e) {

         var headerHeight = $('header').outerHeight();
         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 1000);

         e.preventDefault();
     });

     $('.btn-info').click(function (e) {



         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top
         }, 1000);

         e.preventDefault();
     });

     $('.scroll-link').click(function (e) {

         $(".navbar-collapse").collapse('hide');
         var headerHeight = $('header').outerHeight();
         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 1000);

         e.preventDefault();
     });

     $('.etusivu').click(function (e) {


         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top
         }, 1000);

         e.preventDefault();
     });

     $('a.btn.btn-primary').click(function (e) {

         var headerHeight = $('header').outerHeight();
         var linkHref = $(this).attr('href');

         $('html, body').animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 1000);

         e.preventDefault();
     });




 });






 $(document).ready(function () {

     $(".vaihto").click(function () {
         var value = $(this).attr('data-filter');

         if (value == "all") {

             $('.filter').show('1000');
         } else {

             $(".filter").not('.' + value).hide('3000');
             $('.filter').filter('.' + value).show('3000');

         }
     });

     if ($(".filter-button").removeClass("active")) {
         $(this).removeClass("active");
     }
     $(this).addClass("active");

 });


 $(document).ready(function () {
     $(".dropdown-toggle").click(function (event) {
         $(".navbar-collapse").collapse('hide');
     });
 });






 $(document).ready(function () {

     $('.sivulle').hide();


     $(window).scroll(function () {


         $('.testaus').each(function (i) {

             var kohteenPohja = $(this).offset().top + $(this).outerHeight();
             var ruudunPohja = $(window).scrollTop() + $(window).height();


             if (ruudunPohja > kohteenPohja) {

                 $('.sivulle').fadeIn();

             }

         });

     });

 });

 $(document).ready(function () {

     $('.sivulle2').hide();


     $(window).scroll(function () {


         $('.testaus2').each(function (i) {

             var kohteenPohja = $(this).offset().top + $(this).outerHeight();
             var ruudunPohja = $(window).scrollTop() + $(window).height();


             if (ruudunPohja > kohteenPohja) {

                 $('.sivulle2').fadeIn();

             }

         });

     });

 });

 $(document).ready(function () {

     $('.sivulle3').hide();


     $(window).scroll(function () {


         $('.testaus3').each(function (i) {

             var kohteenPohja = $(this).offset().top + $(this).outerHeight();
             var ruudunPohja = $(window).scrollTop() + $(window).height();


             if (ruudunPohja > kohteenPohja) {

                 $('.sivulle3').fadeIn();

             }

         });

     });

 });

 $(document).ready(function () {

     $('.sivulle4').hide();


     $(window).scroll(function () {


         $('.testaus4').each(function (i) {

             var kohteenPohja = $(this).offset().top + $(this).outerHeight();
             var ruudunPohja = $(window).scrollTop() + $(window).height();


             if (ruudunPohja > kohteenPohja) {

                 $('.sivulle4').fadeIn();

             }

         });

     });

 });

 $(document).ready(function () {

     $('.progress-bar').hide();


     $(window).scroll(function () {


         $('.esilletulo').each(function (i) {

             var kohteenPohja = $(this).offset().top + $(this).outerHeight();
             var ruudunPohja = $(window).scrollTop() + $(window).height();


             if (ruudunPohja > kohteenPohja) {

                 $('.progress-bar').fadeIn();

             }

         });

     });

 });



 var TxtType = function (el, toRotate, period) {
     this.toRotate = toRotate;
     this.el = el;
     this.loopNum = 0;
     this.period = parseInt(period, 10) || 1000;
     this.txt = '';
     this.tick();
     this.isDeleting = false;
 };

 TxtType.prototype.tick = function () {
     var i = this.loopNum % this.toRotate.length;
     var fullTxt = this.toRotate[i];

     if (this.isDeleting) {
         this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
         this.txt = fullTxt.substring(0, this.txt.length + 1);
     }

     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

     var that = this;
     var delta = 200 - Math.random() * 100;

     if (this.isDeleting) {
         delta /= 2;
     }

     if (!this.isDeleting && this.txt === fullTxt) {
         delta = this.period;
         this.isDeleting = true;
     } else if (this.isDeleting && this.txt === '') {
         this.isDeleting = false;
         this.loopNum++;
         delta = 500;
     }

     setTimeout(function () {
         that.tick();
     }, delta);
 };

 window.onload = function () {
     var elements = document.getElementsByClassName('typewrite');
     for (var i = 0; i < elements.length; i++) {
         var toRotate = elements[i].getAttribute('data-type');
         var period = elements[i].getAttribute('data-period');
         if (toRotate) {
             new TxtType(elements[i], JSON.parse(toRotate), period);
         }
     }
     // INJECT CSS
     var css = document.createElement("style");
     css.type = "text/css";
     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
     document.body.appendChild(css);
 };
