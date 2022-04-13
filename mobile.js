// mobile JavaScript DOM
/*const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.nav-links');
  burger.addEventListener('click', ()=> {
    navbar.classList.toggle('nav-active');
  });
}
navSlide();*/

const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.mobile')
const links = document.querySelectorAll('.menu-links')

burger.addEventListener('click', (event)=>{
  if (event.target) {
    menu.style.display = 'block'
  }
})

close.addEventListener('click', (event)=>{
  if (event.target) {
    menu.style.display = 'none'
  }
})

links.forEach((link)=>{
  link.addEventListener('click', (event)=>{
    if (event.target) {
      menu.style.display = 'none'
    }
  })
  
})
