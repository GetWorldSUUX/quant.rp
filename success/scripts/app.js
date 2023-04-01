
// $("button.btn-ui-svg").mouseenter(function(){
//   let svg = $(this).find("svg").attr("data-gradient");
//   $(this).find("path").attr("fill", svg);
// });

cards_swiper_cards();
// func init
function cards_swiper_cards(){

  $(".select > .display").click(function(){
    let el = $(this).closest(".select");
    if(el.find(".list").is(":hidden")){
      el.find(".list").fadeIn(300);
    }else{
      el.find(".list").fadeOut(300);
    }
  });

  $(".close_burger").click(function(){
    $("header>.container>nav").fadeOut(300);
  }); 
  $("[data-link]").click(function(){
    let link = $(this).attr("data-link");
    window.open(link,'_blank');
  });
  $(".open_burger").click(function(){
    $("header>.container>nav").fadeIn(300);
  });
  $(".popup-close").click(function(){
    let el = $(this).closest(".popup").fadeOut(300);
  });
  $("[data-scroll]").click(function(){
    let el = $(this).attr("data-scroll");

    $('html').animate({ 
      scrollTop: $(el).offset().top // прокручиваем страницу к требуемому элементу
    }, 500);
  });
  $(".popup-open").on("click", function(){
    let type = $(this).attr("data-type");

    $(type).fadeIn(300);

  });
  $(".open_quest").click(function(){
    let el = $(this).closest(".wrapper");
    let isOpen = el.attr("data-open");

    if(isOpen == "true"){
      // do close
      el.find("button").find("#line_tss").css("transform", "rotate(-180deg) translate(-33px, -23px)");
      el.find("button").find("#line_ds").css("transform", "rotate(90deg) translate(10px, -33px)");
      setTimeout(function(){
        el.find("button").find("#line_tss").css("transform", "rotate(0deg) translate(0, 0)");
        el.find("button").find("#line_ds").css("transform", "rotate(0deg) translate(0, 0)");
      },300);
      el.find(".content").hide(300);
      el.attr("data-open", "false");
    }else{
      // do open
      el.find("button").find("#line_tss").css("transform", "rotate(-180deg) translate(-33px, -23px)");
      el.find("button").find("#line_ds").css("transform", "rotate(90deg) translate(10px, -33px)");
      setTimeout(function(){
        el.find("button").find("#line_tss").css("transform", "rotate(-180deg) translate(-33px, -33px)");
        el.find("button").find("#line_ds").css("transform", "rotate(90deg) translate(0, -33px)");
      },300);
      el.find(".content").show(300);
      el.attr("data-open", "true");
    }

  });
  if($(window).width() > 1100){
    
    $("#cards-init-swipe-001").children("li").on("mouseenter", function(){
      _swipe_card($(this), true);
    });

    $("#cards-init-swipe-001").children("li").on("mouseleave", function(){
      _swipe_card($(this), false);
    });

  }else{
    $("#cards-init-swipe-001").children("li").on("click", function(){
      if($(this).attr("data-open-card") === "true"){
        _swipe_card($(this), false);
      }else{
        _swipe_card($(this), true);
      }
    });
  }
    
  function _swipe_card(el, isOpen){
    if(isOpen){
      el.find(".wrapper.sideB").css({"transform": "rotateY(160deg)", "opacity": "0"});
      el.find(".wrapper.side").css({"transform": "rotateY(0deg)", "opacity": "1"});
      el.attr("data-open-card", "true");
    }else{
      el.find(".wrapper.sideB").css({"transform": "rotateY(0deg)", "opacity": "1"});
      el.find(".wrapper.side").css({"transform": "rotateY(160deg)", "opacity": "0"});
      el.attr("data-open-card", "false");
    }
    
  }

    const swiper_roadMap = new Swiper('#swiper-init-001', {
        // Optional parameters
        slidesPerView: 3.3,
        spaceBetween: 70,
        grabCursor: true,
        // Navigation arrows
        navigation: {
          nextEl: '#btn-swiper-001-right',
          prevEl: '#btn-swiper-001-left',
        },
        breakpoints: {
          
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight:true,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 47,
          },
          1400: {
            slidesPerView: 3.3,
            spaceBetween: 70,
          },
        },
    });

    const swiper_team = new Swiper('#swiper-init-002', {
         // Optional parameters
         slidesPerView: 5,
         spaceBetween: 26,
         // Navigation arrows
         navigation: {
           nextEl: '#btn-swiper-002-right',
           prevEl: '#btn-swiper-002-left',
         },
         breakpoints: {
          300: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 5,
          },
        },
    });

    const swiper_news = new Swiper("#swiper-init-003", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation:{
        nextEl: ".swiper-003-right",
        prevEl: ".swiper-003-left"
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
}