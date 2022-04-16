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

 // Local Storge

 const inputs = document.querySelectorAll('.formInput');
 inputs.forEach((input) => {
   input.addEventListener('change', (e) => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'));
     if (!userInfo) {
       userInfo = { name: '', email: '', message: '' };
     }
     userInfo[e.target.name] = e.target.value;
     localStorage.setItem('userInfo', JSON.stringify(userInfo));
   });
 });
 
 function getInfo() {
   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
   if (userInfo) {
     document.getElementById('name').value = userInfo.name;
     document.getElementById('email').value = userInfo.email;
     document.getElementById('msg').value = userInfo.message;
   }
 }
 
 getInfo();
 
 // end of local Storge