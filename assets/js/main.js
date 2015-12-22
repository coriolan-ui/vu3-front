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
});
