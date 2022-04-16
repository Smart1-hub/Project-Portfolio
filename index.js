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
const projectCards = [{
  id: 1,
  title: 'Multi-Post Stories',
  image: './img-mobile.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
    'css',
    'html',
    'bootstrap',
    'Ruby'
  ]
},
{
  id: 2,
  title: 'Multi-Post Stories',
  image: './img-mobile.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
    'css', 'html', 'bootstrap', 'Ruby'
  ]

},
{
  id: 3,
  title: 'Multi-Post Stories',
  image: './img-mobile.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
    'css',
    'html',
    'bootstrap',
    'Ruby'
  ]
},
{
  id: 4,
  title: 'Multi-Post Stories',
  image: './img-mobile.png',
  description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
  languages: [
    'css',
    'html',
    'bootstrap',
    'Ruby'
  ]

}
];

/* projects */
function cardWorks() {
  const card = document.querySelector('.card-works-container');
  for (let i = 0; i < projectCards.length; i++) {
    let initData = card.innerHTML;

    let cardContent = `<div class="sub-flex ${i % 2 !== 0 ? 'reverse' : ''}">
                          <div class='box'>
                            <img src='${projectCards[i].image}' alt='#'>
                          </div>
                          <div class='story-title'>
                            <div>
                              <h2>${projectCards[i].title}</h2>
                              <p>${projectCards[i].description}</p>
                            </div>
                            <div>
                              <ul>
                                <li>${projectCards[i].languages[0]}</li>
                                <li>${projectCards[i].languages[1]}</li>
                                <li>${projectCards[i].languages[2]}</li>
                                <li>${projectCards[i].languages[3]}</li>
                              </ul>
                            </div>
                            <div>
                              <button class='window-btn' class="btn-1">See Project</button>
                            </div>
                          </div>
                        </div>${initData}`;

    card.innerHTML = cardContent;
  }
}

window.onload = cardWorks();

/* popup window */

// const openWindow = document.getElementById('window-btn');
// const popupWindow = document.querySelector('.popup-window').style;


function popping() {
  const popupContainer = document.querySelector('.popup-container');
  const body = document.querySelector('.body-wrapper');
  const sampleData = projectCards[1];
  const popup = `<div class='popUpData ${sampleData.title}'>
                  <div id='opup-title'>
                    <h2>${sampleData.title}</h2>
                    <i class='fa fa-close opup-close' onclick='closePopUp()'></i>
                  </div>
                  <img src='${sampleData.image}' alt='Story Image' />
                  <p>${sampleData.description}</p>
                  <div class='opup-languages'>
                    <ul class='laguages-list'>${sampleData.languages.map((s) => `<li>${s}</li>`).join('')}</ul>
                  </div>
                  <div class='opup-button'>
                    <div class='link-btn'>
                      <button class='btn-ctc'>See Live </button>
                      <button class='btn-ctc'>See Source</button>
                    </div>
                  </div>
                </div>`;

  popupContainer.innerHTML = popup;
  body.classList.add('hide-main');
  popupContainer.classList.add('show-popup');

}
// window.onload = popping();
const openBtn = document.querySelectorAll('.window-btn');
// const closeBtn = document.querySelector('.opup-close');
const popUpData = document.querySelector('.popUpData');

function closePopUp() {
  const popUpContainer = document.querySelector('.popup-container');
  popUpContainer.classList.add('close-modal');
}
//   const model = document.getElementById("popup-container");
//   const container = document.querySelector(".body-wrapper");
//   container.classList.remove("hide-main");
//   model.classList.remove("show-popup");
//   // popUpData.style.display = 'none';
// }

openBtn.forEach((n) => n.addEventListener("click", popping));
// closeBtn.addEventListener("click", closePopUp);

// function poppuWindow(cardId) {
//     if (cardId === null) return;
//     let item = projectsList.filter((elem) => elem.id === cardId);
//     item = item.shift();
//     const popup = `<div class="popup-window">
//         <div class="popup-title">
//             <h2>${item.title}</h2>
//             <i class="fa fa-close popup-close"></i>
//         </div>
//         <img src="${item.image}" alt="">
//         <p>${item.description}</p>
//         <div class="popup-languages">
//             <ul class="laguages-list">
//                 <li>html</li>
//                 <li>Ruby on rails</li>
//                 <li>css</li>
//             </ul>
//         </div>
//         <div class="popup-button">
//             <div class="link-btn">
//                 <button class="btn-ctc">See Live </button>
//                 <button class="btn-ctc">See Source</button>
//             </div>
//         </div>
//     </div>`;
//     document.querySelector('.popup-container').innerHTML = popup;

// }