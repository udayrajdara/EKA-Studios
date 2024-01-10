const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: null,
      // hide:true,
      enabled:false

    },
  
  freeMode: {
    enabled: true,
    sticky: true,
    momentumBounce: false,
  },
 
  mousewheel: {
    enabled: true,
    sensitivity: 5,
  },
  });
  



  // loader




 let spin =  document.querySelector("body")

 setTimeout(()=>{
  spin.classList.add('loaded')
 },3000)


 let label = document.querySelector('.anchor')
 let menu = document.querySelector('input[type="checkbox"]')
 let nav = document.querySelector('.menu')

 setTimeout(()=>{
  label.classList.add('label')
  nav.classList.add('animate')

 },3600)

//  setTimeout(()=>{
//  },3500)















