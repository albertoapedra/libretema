$(window).on("scroll", function () {
       if ($(window).scrollTop() > $("#cambio").offset().top - 50) {
         $("nav").addClass("active");
       } else {
         $("nav").removeClass("active");
       };
     });

