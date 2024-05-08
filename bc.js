
$(document).ready(function() {
  // Initialize the carousel
  $('.carousel').carousel();

  // Set autoplay interval (in milliseconds)
  const autoplayInterval = 5000; // Adjust this value as needed

  // Start autoplay
  let autoplay = setInterval(function() {
    $('.carousel').carousel('next');
  }, autoplayInterval);

  // Pause autoplay on mouse hover
  $('.carousel').hover(function() {
    clearInterval(autoplay);
  }, function() {
    // Restart autoplay on mouse leave
    autoplay = setInterval(function() {
      $('.carousel').carousel('next');
    }, autoplayInterval);
  });
});