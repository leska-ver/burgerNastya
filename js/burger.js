document.addEventListener('DOMContentLoaded', function() {

  //burger
  let open = document.querySelector('.burger');
  let close = document.querySelector('.menu-close');
  let tl = gsap.timeline({paused: true});
  tl.fromTo('.menu', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: .5})
  if(open) {
    open.addEventListener('click', function() {
      tl.play()
    })
    close.addEventListener('click', function() {
    tl.reverse();
    })
  }
  
});  