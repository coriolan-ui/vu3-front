$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    $('body').toggleClass('is-overflowed');
    e.preventDefault();
  });
});




$(function() {
  $('.sidebar-menu a[href^="/coriolan-ui/' + location.pathname.split("/coriolan-ui/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/game-hall/' + location.pathname.split("/game-hall/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/lottery/' + location.pathname.split("/lottery/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/tournaments/' + location.pathname.split("/tournaments/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/promotions/' + location.pathname.split("/promotions/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/shop/' + location.pathname.split("/shop/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/news/' + location.pathname.split("/news/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/news/' + location.pathname.split("/news/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/video/' + location.pathname.split("/video/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/plugin/' + location.pathname.split("/plugin/")[1] + '"]').addClass('active');
});




$('.open-popup-link').magnificPopup({
  type: 'inline',
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true,
  closeMarkup: '<span title="%title%" class="mfp-close icon-close"></span>',
  focus: '#email',
});






/**
* layzr.js
* http://callmecavs.github.io/layzr.js/
*/
// var layzr = new Layzr({
  // container: null,
  // selector: '[data-layzr]',
  // attr: 'data-layzr',
  // retinaAttr: 'data-layzr-retina',
  // bgAttr: 'data-layzr-bg',
  // hiddenAttr: 'data-layzr-hidden',
  // threshold: 0,
  // callback: null
// });






/**
* holder.js
* https://github.com/imsky/holder
*/












$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});




$('#tab-container').easytabs();



