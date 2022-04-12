// mobile JavaScript DOM
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.nav-links');
  burger.addEventListener('click', ()=> {
    navbar.classList.toggle('nav-active');
  });
}
navSlide();
