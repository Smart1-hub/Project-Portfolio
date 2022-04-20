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

burger.addEventListener('click', (event) => {
    if (event.target) {
        menu.style.display = 'block'
    }
})

close.addEventListener('click', (event) => {
    if (event.target) {
        menu.style.display = 'none'
    }
})

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (event.target) {
            menu.style.display = 'none'
        }
    })
});

/* object */
const projectCards = {
  project1: {
  id: 1,
  title: 'Multi-Post Stories',
  image: 'Snapshoot.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
      'css',
      'html',
      'bootstrap',
      'Ruby'
  ]
},
project2: 
{
  id: 2,
  title: 'Geographic Information System',
  image: 'Snapshoot.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
      'css', 'html', 'bootstrap', 'Ruby'
  ]

},
project3:
{
  id: 3,
  title: 'Information Management',
  image: 'Snapshoot.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
      'css',
      'html',
      'bootstrap',
      'Ruby'
  ]
},
project4:
{
  id: 4,
  title: 'Health Management System',
  image: 'Snapshoot.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
      'css',
      'html',
      'bootstrap',
      'Ruby'
  ]
},
};


const modal = document.querySelector('.popup-container');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.popup-close');
const projectButton = document.querySelectorAll('.btn-1');

projectButton.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

    const h2 = document.querySelector('.popup-window .popup-title h2') 
    const p = document.querySelector('.popup-window p')
    const img = document.querySelector('.modal-image')
    const items = document.querySelectorAll('.popup-languages .languages-list li')

    for(const project of [...Object.keys(projectCards)]) {
      if(button.classList.contains(project)) {
        h2.textContent = projectCards[project].title
        p.textContent = projectCards[project].description
        img.src = projectCards[project].image
        
        let no = 0
        for(const li of items) {
          li.textContent = projectCards[project].languages[no]
          no += 1
        }
      }
      
    }
  })
})

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
})

 // start of validation
function chckValidation(elem) {
    if (!elem) {
      document.querySelector('small').style = 'display: block';
      document.querySelector('small').innerHTML = 'Please write your email in lowercase.';
      document.querySelector('.form-email').style = 'border: 3px red solid';
    }
  }
  
  const form = document.getElementById('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.form-email').value;
    if (email !== email.toLowerCase()) {
      chckValidation(false);
      return;
    }
    form.submit();
    form.reset();
    chckValidation(true);
  });
  // end of validation

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